const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const AWS = require('aws-sdk')
const parameters = require('./parameters')
const fs = require('fs')

const port = process.env.PORT || 5000;

var count = 0;
var data;

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
  }));

app.use(bodyParser.json());

//pattern１
app.use(express.static('./client/build/'));

app.get('/', function(req, res) {
    res.sendFile('./client/build/index.html');
});

app.post('/trans_data', function(req, res) {
    //console.log(count);
    var img = req.body.img;
    var buffer = new Buffer.from(img.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
  
    var rekognition = new AWS.Rekognition({
      apiVersion: '2016-06-27',
      accessKeyId: parameters.AWS.accessKeyId,
      secretAccessKey: parameters.AWS.secretAccessKey,
      region: parameters.AWS.region
    });
  
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
    res.redirect('/default');
});

app.get('/happy', (req, res) => {
    res.send("happy");
});

app.post('/default', (req, res) => {
  res.send(req.body.name);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));