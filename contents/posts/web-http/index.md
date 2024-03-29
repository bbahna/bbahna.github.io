---
title: "웹 브라우저 동작원리, http란?"
description: ""
date: 2022-04-03
update: 2022-04-03
tags:
  - web
  - browser
  - http
  - TIL
series: "Web"
---

## 1. 웹 브라우저 동작원리

입력한 사이트의 서버로부터 index.html을 가져오며 **html 파일에 종속된** 파일(js, css, image 등)을 만날 때마다 서버로 `http request`를 보내 받아온다.
![overview](<web-http(1).png>)

### 웹 클라이언트

필요한 파일들(html,js,css...)을 다운받아 해석(렌더링)하여 사용자에게 보여주는 프로그램(브라우저)

### 웹 서버

클라이언트의 요청(url)에 따라 응답(response)해주는 프로그램

- 프론트 서버: 정적 or 동적인 페이지를 응답하기 위한 서버. 웹 구성요소(html, css, js) 응답 등.
  - 웹이 비대해지면 서버의 역할 분담, 보안을 위해 `WAS` 와 `프론트 서버`로 나누기도 한다.
- 백엔드 서버: 사용자의 요청을 받았을 때 DB에서 적절한 데이터를 가져와 응답하기 위한 서버

### DB

사용자의 목록, 정보 등 중요한 데이터들이 저장된 저장소

---

## 동작원리

1. 주소창에 url(ex: 구글) 입력
2. 구글 서버로 찾아감
3. \*DNS가 연결해줄 곳을 찾음
   > **도메인 이름 시스템(Domain Name System)**
   > [IP](https://namu.wiki/w/IP) 네트워크에서 사용하는 시스템. 영문/한글 주소를 IP 네트워크에서 찾아갈 수 있는 [IP](https://namu.wiki/w/IP)로 변환해줌.
4. 구글 서버에서 HTML 파일을 클라이언트로 보냄.
5. 서버로 부터 받은 HTML(Document Object Model) 파일 파싱 및 DOM Tree 생성 (브라우저 역할)
   ![DOM Tree](<web-http(2).png>)
6. CSS 파싱 및 CSSOM(CSS Object Model) Tree 생성  
   ![CSSOM Tree](<web-http(3).png>)
7. DOM, CSSOM 합쳐 Render Tree 생성  
   ![Render Tree](<web-http(4).png>)  
   Render Tree에는 실제 화면에 표현되는 노드(요소)들로만 구성됨  
   ex) `display : none` 속성이 설정된 요소는 Render Tree를 만드는 과정에서 제외됨<br/>
   `visibility : invisible` 속성은 공간은 차지하고 요소가 보이지 않게 하기에 Render Tree에 포함
8. JavaScript를 만나면? HTML 파서는 JS 코드를 실행하기 위해 파싱 중단
9. JS 엔진 실행 및 JS 코드 파싱

---

## 2. http란?

- Hyper Text Transfer Protocol의 약자
- 인터넷에서 데이터를 주고받을 수 있는 프로토콜(통신규약)
- 웹에서 모든 데이터 교환의 기초
- 규칙을 정해두었기 때문에, 모든 프로그램이 이 규칙에 맞춰 개발하여 정보교환을 함
  - 클라이언트 ⇒ 서버 : request(요청)
  - 서버 → 클라이언트 : respnse(응답)

### http요청

- 읽기(GET)
- 쓰기(POST)
- 수정(PUT)
- 삭제(DELETE)

### 응답코드

- 추후 업데이트 예정 :)
