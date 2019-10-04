'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const AWS = require('aws-sdk'); //
const parameters = require('./parameters');//
const fs = require('fs');
const cors = require('cors');
const automl = require('@google-cloud/automl');//
// const PythonShell = require('python-shell');
// const automl = require('./automl');
//이미지 자르기
const sharp = require('sharp');//
const sizeOf = require('image-size');//

const port = process.env.PORT || 5000;

//모듈 분리
const rekognition = new AWS.Rekognition({
  apiVersion: '2016-06-27',
  accessKeyId: parameters.AWS.accessKeyId,
  secretAccessKey: parameters.AWS.secretAccessKey,
  region: parameters.AWS.region
});


var count = 0;
var data;

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}))

//pattern１
// C:/Users/yejiH/Documents/Front-End/client/build/
// app.use(express.static('/home/ubuntu/Front-End/client/build/'));
// app.get('/*', function(req, res) {
//     res.sendFile('/home/ubuntu/Front-End/client/build/');
// });
app.use(express.static("/Users/cho-yoonyoung/Front-End/client/build/"));
app.get("/*", function(req, res) {
  res.sendFile("/Users/cho-yoonyoung/Front-End/client/build/");
});

app.post('/trans_data', function (req, res) {
  //console.log(count);
  var img = req.body.img;
  var buffer = new Buffer.from(img.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');

  //로컬에서 불러온 이미지
  var params = {
    Attributes: ["ALL"],
    Image: {
      Bytes: buffer
    }
  };

  rekognition.detectFaces(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      try {
        var seconds = (new Date()).getSeconds();
        //console.log(seconds);
        //console.log("전송됨");
        fs.writeFileSync("./result.json", "{" + '"1":' + JSON.stringify(data.FaceDetails[0].Emotions));

        //TODO: 예지 - 넘겨온 이미지의 사람얼굴이 1명이 아닐때  
        if (data.FaceDetails.length != 1) {
          for (var i = 1; i < data.FaceDetails.length; i++) {
            fs.appendFileSync('./result.json', "," + '"' + (i + 1) + '":' + JSON.stringify(data.FaceDetails[i].Emotions));
          }
        }
        fs.appendFileSync('./result.json', "}");
      } catch (err) {
        console.error(err)
      }
    }
    //TODO: 예지 - HAPPY감정 
    var happySum = 0;
    var len = data.FaceDetails.length;
    for (var i = 0; i < len; i++) {
      var emo = data.FaceDetails[i].Emotions.filter(function (emo) {
        return emo.Type == "HAPPY";
      });
      happySum += emo[0].Confidence;
      console.log(data.FaceDetails[i].Emotions);
      console.log(emo[0].Confidence);
    }
    var happyAvg = happySum / len;
    console.log("평균값 : " + happyAvg);

    if (happyAvg >= 7.3) {
      res.status(201).json({
        message: '과반수의 참여자가 긍정의 반응을 보였습니다.',
        data: true
      });
    } else {
      res.status(201).json({
        message: '무반응',
        data: false
      });
    }

  });


  //TODO: 예지 - 브라우저에 토스트메세지를 띄우기 위한 반환값 설정
  // for(var i=1; i<data.FaceDetails.length;i++){

  // }

  // rekognition.detectFaces(params, function(err, data) {
  //   if (err) console.log(err, err.stack); // an error occurred
  //   else {
  //     console.log(data.FaceDetails[0].Emotions); // successful response
  //     console.log(data.FaceDetails[1].Emotions);
  //     try {
  //       if(count===0){
  //         fs.writeFileSync("./result.json", JSON.stringify(data.FaceDetails[0].Emotions)+","+JSON.stringify(data.FaceDetails[1].Emotions));
  //         count++;
  //       }
  //       else{
  //         fs.appendFileSync('./result.json',","+JSON.stringify(data.FaceDetails[0].Emotions)+","+JSON.stringify(data.FaceDetails[1].Emotions));
  //       }
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  // });
  // res.send('무반응');
});

//TODO: 진짜 감정요청 부분
app.post('/emotion', async function (req, res) {

  var img = req.body.img;
  //모듈분리
  var buffer = new Buffer.from(img.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
  var dimensions = sizeOf(buffer);

  //var outputImage = 'crop.jpg';

  var params = {
    Attributes: ["ALL"],
    Image: {
      Bytes: buffer
    }
  };
  await rekognition.detectFaces(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      //과반수 수
      var goodCount = 0;
      var badCount = 0;
      var noCount = 0;
      var goodValue = 0;
      var badValue = 0;
      var noValue = 0;
      var majority = Math.ceil(data.FaceDetails.length / 2.0);
      console.log("과반수 수는 : " + majority);

      try {
        for (var i = 0; i < data.FaceDetails.length; i++) {
          //console.log(data.FaceDetails[i].Landmarks);
          var leftEyeBrowLeft = data.FaceDetails[i].Landmarks.filter(function (e) {
            return e.Type == "leftEyeBrowLeft";
          });
          var chinBottom = data.FaceDetails[i].Landmarks.filter(function (e) {
            return e.Type == "chinBottom";
          });
          var rightEyeBrowRight = data.FaceDetails[i].Landmarks.filter(function (e) {
            return e.Type == "rightEyeBrowRight";
          });

          var width = Math.round(rightEyeBrowRight[0].X * dimensions.width) - Math.round(leftEyeBrowLeft[0].X * dimensions.width) + 30;
          var height = Math.round(chinBottom[0].Y * dimensions.height) - Math.round(leftEyeBrowLeft[0].Y * dimensions.height) + 10;
          var left = Math.round(leftEyeBrowLeft[0].X * dimensions.width) - 15;
          var top = Math.round(leftEyeBrowLeft[0].Y * dimensions.height) - 20;
         

          // sharp(buffer)
          //     .extract({ width: width, 
          //                height: height, 
          //                left: left, 
          //                top: top})
          //     .toFile(outputImage)
          //     .then(function(new_file_info) {
          //       console.log("Image cropped and saved");
          //     })
          //     .catch(function(err) {
          //       console.log(err);
          //     });
          
          //모듈분리 - automlImg로
          sharp(buffer) 
            .extract({
              width: width,
              height: height,
              left: left,
              top: top
            })
            .toBuffer()
            .then(function(data){
              async function main(
                projectId,
                computeRegion,
                modelId,
                scoreThreshold
              ) {
                // Create client for prediction service.
                const client = new automl.PredictionServiceClient();
                /**
                 * TODO(developer): Uncomment the following line before running the sample.
                 */
                projectId = parameters.AutoML.projectId;
                computeRegion = parameters.AutoML.computeRegion;
                modelId = parameters.AutoML.modelId;
                scoreThreshold = parameters.AutoML.scoreThreshold;
        
                // Get the full path of the model.
                const modelFullId = client.modelPath(projectId, computeRegion, modelId);
        
                // Read the file content for prediction.
                const content = data;
                const params = {};
        
                if (scoreThreshold) {
                  params.score_threshold = scoreThreshold;
                }
        
                // Set the payload by giving the content and type of the file.
                const payload = {};
                payload.image = {
                  imageBytes: content
                };
        
                // params is additional domain-specific parameters.
                // currently there is no additional parameters supported.
                const [response] = await client.predict({
                  name: modelFullId,
                  payload: payload,
                  params: params,
                });
                console.log(`Prediction results:`);
                response.payload.forEach(result => {
                  console.log(`Predicted class name: ${result.displayName}`);
                  console.log(`Predicted class score: ${result.classification.score}`);
        
                  //임계값 설정 부분
                  //good의 임계값이 0.7이상일때
                  if (result.displayName == 'good' && result.classification.score >= 0.6) {
                    goodValue+=result.classification.score;
                    goodCount++;
                    console.log("good: " + goodCount);
        
                  }
                  //bad의 임계값이 0.8이상일때
                  else if (result.displayName == 'bad' && result.classification.score >= 0.9) {
                    badValue+=result.classification.score;
                    badCount++;
                    console.log("bad: " + badCount);
                  }
                  //good, bad가 0.8을 못넘으면 무표정인 걸로 간주하고 no인것도 포함
                  else {
                    noValue+=result.classification.score;
                    noCount++;
                    console.log("no: " + noCount);
                  }
        
                });
              }
              main(...process.argv.slice(2)).catch(err => {
                console.error(err);
                process.exitCode = 1;
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      } catch (err) {
        console.error(err);
      }
    }
    setTimeout(async function() {
      console.log(majority + " " + goodCount);
      console.log(majority + " " + badCount);
      console.log(majority + " " + noCount);
      console.log(majority + " " + goodValue/majority);
      console.log(majority + " " + badValue/majority);
      console.log(majority + " " + noValue/majority);
      if (goodCount >= majority) {
        console.log("긍정");
        res.status(201).json({
          message: '과반수 이상의 참여자가 긍정의 반응을 보였습니다',
          data: goodValue/majority
        });
      } else if (badCount >= majority) {
        console.log("부정");
        res.status(201).json({
          message: '과반수 이상의 참여자가 부정의 반응을 보였습니다',
          data: badValue/majority
        });
      } else if (noCount >= majority) {
        console.log("무반응");
        res.status(201).json({
          message: '무반응',
          data: false
        });
      } else {
        res.status(500).json({
          message: '감정 인식 오류 발생',
          data: false
        });
      }
    }, 2500);
    
  });
  //res.send("오류");
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));