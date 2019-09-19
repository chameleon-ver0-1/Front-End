const AWS = require('aws-sdk');
const parameters = require('./parameters');
const automl = require('@google-cloud/automl');

const sharp = require('sharp');
const sizeOf = require('image-size');

const rekognition = new AWS.Rekognition({
    apiVersion: '2016-06-27',
    accessKeyId: parameters.AWS.accessKeyId,
    secretAccessKey: parameters.AWS.secretAccessKey,
    region: parameters.AWS.region
});

module.exports.cropImg = function(img){
    //이미지 데이터 받아 cropping한 이미지 반환
    var buffer = new Buffer.from(img.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
    var dimensions = sizeOf(buffer);

    
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
          
          //automl function 위치
          automlImg(buffer, width, height, left, top);
        }
      }
      catch (e) {
        console.error(e);
      }
    }
  });

	return ;
};

const automlImg = function(buffer, width, height, left, top){
    //cropping된 데이터 받아와서 감정 분석
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
                  //good의 임계값이 0.8이상일때
                  if (result.displayName == 'good' && result.classification.score >= 0.8) {
                    //goodSum+=result.classification.score;
                    goodCount++;
                    console.log("good: " + goodCount);
        
                  }
                  //bad의 임계값이 0.8이상일때
                  else if (result.displayName == 'bad' && result.classification.score >= 0.8) {
                    //badSum+=result.classification.score;
                    badCount++;
                    console.log("bad: " + badCount);
                  }
                  //good, bad가 0.8을 못넘으면 무표정인 걸로 간주하고 no인것도 포함
                  else {
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
	return data;
};