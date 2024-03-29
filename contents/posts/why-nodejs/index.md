---
title: "JavaScript 런타임 환경 Node.js"
description: ""
date: 2022-05-30
update: 2022-05-30
tags:
  - node.js
  - nvm
  - npm
  - yarn
  - TIL
series: "JavaScript"
---

## Node.js란
chrome의 JavaScript 해석엔진 [V8](https://v8.dev/)로부터 개발된 JavaScript 런타임(실행) 환경
- nvm(node version management)
- npm(node package management)
- yarn

## Node.js를 쓰는 이유
- non-blocking I/O
- 코드가 짧고 쉬움

> **blocking**: 요청받은 함수 작업을 모두 마쳐야 제어권을 넘겨줌 (그동안 요청자는 기다림)
> 
> **non-blocking**: 요청받은 함수가 요청자에게 제어권을 바로 넘겨줌 (그동안 요청자는 다른 일을 할 수 있음)
>
> ⇒ 요청받은 함수가 제어권(함수실행권)을 언제 넘겨주냐
> 
> <br/>
> 
> **Syncronous**(동기): 요청자가 요청받은 함수의 작업이 완료되었는지 계속 확인
> 
> **Asynchronous**(비동기): 요청자는 요청 후 신경쓰지 않음, 요청받은 함수가 작업을 마치면 알려줌
>
> ⇒ 요청받은 함수의 작업완료 여부를 누가 체크하느냐

## [Node 버전](https://nodejs.org/ko/) - LTS, Current
![nodejs.org](why-nodejs(1).png)

### LTS ‘안정적, 신뢰도 높음’
- Long Term Support
- 오랜기간 지원이 가능한
- 해당 버전에 대한 취약점 및 개선사항에 대한 패치를 2년간 보증하는 버전

### Current ‘최신 기능’
- 아직 개발이 진행 중인 버전
