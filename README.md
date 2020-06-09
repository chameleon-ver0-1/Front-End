# 카멜레On

**한이음 2019 공모전 한국정보산업연합회장상 수상작**

개발 기간 : 2019년 01월 01일  ~ 2019년 11월 24일


## [ About ]

**얼굴인식과 감정분석 기술을 활용한 화상회의 중심 협업 플랫폼**입니다.
<iframe width="560" height="315" src="https://youtu.be/1Wjx9Bl95wU" frameborder="0" allowfullscreen></iframe>  
[시연영상 확인하기](https://youtu.be/1Wjx9Bl95wU)

**1. 프로젝트 생성 및 참여** <br>
프로젝트를 생성하거나, 초대를 받아 이미 생성된 프로젝트에 참여.

**2. 프로젝트 이슈 관리** <br>
프로젝트 이슈를 TODO/DOING/DONE 상태로 분류하여 관리합니다.

**3. 화상회의 개설 및 참여** <br>
프로젝트 내의 멤버를 초대하여 화상회의를 개설하거나 개설된 회의에 참여할 수 있습니다.

**4. 실시간 화상회의 기록** <br>
화상회의 중 발언들을 실시간 텍스트로 기록하여 표시합니다.

**5. 실시간 회의 참여자 반응 알림** <br>
화상회의 중 실시간으로 참여 멤버의 긍/부정 반응을 수집/종합/분석하여 표시합니다.

**6. 회의록 자동 생성** <br>
화상회의 종료 후 회의 내용을 요약하고 키워드를 추출한 회의록을 생성/관리할 수 있습니다.

## [ Architecture ]             

![architecture](https://github.com/chameleon-ver0-1/Front-End/blob/develop/chameleonArchitecture.png)

## [ Develop Environment ]
### FrontEnd
- Web: **React** 라이브러리로 구현.

### Server
- Web Server: NginX, Node.js
- Web Socket Server: NginX
- Database: MySQL, MongoDB, LocalStorage

## [ API ]
- [WebRTC - RTCMultiConnection](https://github.com/muaz-khan/RTCMultiConnection)
- [Chromem STT/TTS](https://github.com/dodortus/webrtc-lab/tree/master/frontend/views/examples/speech-recognition)
- [Kingfisher](https://github.com/onevcat/Kingfisher)

## [ 기술 ]
- [Google Cloud AutoML](https://cloud.google.com/automl?hl=ko)
- [SocketIO](https://socket.io/)

