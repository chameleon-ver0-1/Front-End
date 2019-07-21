'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const parameters = require('./parameters');
const fs = require('fs');
const automl = require('@google-cloud/automl');
const PythonShell = require('python-shell');
//이미지 자르기
const sharp = require('sharp');
const sizeOf = require('image-size');

const port = process.env.PORT || 5000;


const rekognition = new AWS.Rekognition({
  apiVersion: '2016-06-27',
  accessKeyId: parameters.AWS.accessKeyId,
  secretAccessKey: parameters.AWS.secretAccessKey,
  region: parameters.AWS.region
});


var count = 0;
var data;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(bodyParser.json());

//pattern１
//C:/Users/yejiH/Documents/Front-End/client/build/
// app.use(express.static('/home/ubuntu/Front-End/client/build/'));
// app.get('/*', function(req, res) {
//     res.sendFile('/home/ubuntu/Front-End/client/build/');
// });
app.use(express.static('C:/Users/yejiH/Documents/Front-End/client/build/'));
app.get('/*', function(req, res) {
    res.sendFile('C:/Users/yejiH/Documents/Front-End/client/build/');
});

app.post('/trans_data', function(req, res) {
    //console.log(count);
    var img = req.body.img;
    var buffer = new Buffer.from(img.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
  
    //로컬에서 불러온 이미지
    var params = {
      Attributes: ["ALL"],
      Image: {
        Bytes: buffer
      }
    };

    rekognition.detectFaces(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        try {
          var seconds = (new Date()).getSeconds();
          //console.log(seconds);
          //console.log("전송됨");
          fs.writeFileSync("./result.json", "{"+'"1":'+JSON.stringify(data.FaceDetails[0].Emotions));

          //TODO: 예지 - 넘겨온 이미지의 사람얼굴이 1명이 아닐때  
          if(data.FaceDetails.length!=1){
            for(var i=1; i<data.FaceDetails.length;i++){
              fs.appendFileSync('./result.json',","+'"'+(i+1)+'":'+JSON.stringify(data.FaceDetails[i].Emotions));
            } 
          }     
          fs.appendFileSync('./result.json',"}");
        } catch (err) {
          console.error(err)
        }
      }
      //TODO: 예지 - HAPPY감정 
      var happySum = 0 ;
      var len = data.FaceDetails.length;
      for(var i=0; i<len;i++){
        var emo = data.FaceDetails[i].Emotions.filter(function (emo) { return emo.Type == "HAPPY" });
        happySum += emo[0].Confidence;
        console.log(data.FaceDetails[i].Emotions);
        console.log(emo[0].Confidence);
      }
      var happyAvg = happySum/len;
      console.log("평균값 : "+happyAvg);

      if(happyAvg>=7.3){
        res.send('과반수의 참여자가 긍정의 반응을 보였습니다.');
      }
      else{
        res.send('무반응');
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

app.post('/emotion',(req,res) => {
  var img = req.body.img;

  var buffer = new Buffer.from(img.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
  var dimensions = sizeOf(buffer);

  var outputImage = 'crop.jpg';
  
  var params = {
    Attributes: ["ALL"],
    Image: {
      Bytes: buffer
    }
  };
  rekognition.detectFaces(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      try {
          for(var i=0; i<data.FaceDetails.length;i++){
            //console.log(data.FaceDetails[i].Landmarks);
            var leftEyeBrowLeft = data.FaceDetails[i].Landmarks.filter(function (e) { return e.Type == "leftEyeBrowLeft"; });
            var chinBottom = data.FaceDetails[i].Landmarks.filter(function (e) { return e.Type == "chinBottom"; });
            var rightEyeBrowRight = data.FaceDetails[i].Landmarks.filter(function (e) { return e.Type == "rightEyeBrowRight"; });
           
            var width = Math.round(rightEyeBrowRight[0].X*dimensions.width)-Math.round(leftEyeBrowLeft[0].X*dimensions.width)+30;
            var height = Math.round(chinBottom[0].Y*dimensions.height)-Math.round(leftEyeBrowLeft[0].Y*dimensions.height)+10;
            var left = Math.round(leftEyeBrowLeft[0].X*dimensions.width)-15;
            var top = Math.round(leftEyeBrowLeft[0].Y*dimensions.height)-20;
            //console.log(width+" "+height);
            //console.log(left+" "+top);
            
            
            
            var perWidth = data.FaceDetails[i].BoundingBox.Width;
            var perHeight = data.FaceDetails[i].BoundingBox.Height;
            var perLeft = leftEyeBrowLeft[0].X;
            var perTop = leftEyeBrowLeft[0].Y;

            sharp(buffer)
                .extract({ width: width, 
                           height: height, 
                           left: left, 
                           top: top})
                .toFile(outputImage)
                .then(function(new_file_info) {
                  console.log("Image cropped and saved");
                })
                .catch(function(err) {
                  console.log(err);
                });

                sharp(buffer) //여기 수정해야 함 --> 캡쳐 이미지로
                .extract({ width: width, 
                           height: height, 
                           left: left, 
                           top: top})
                .toBuffer()
                .then(data => { 
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
                    payload.image = {imageBytes: content};
                  
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
                     
                    });
                    // [END automl_quickstart]
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
  });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));