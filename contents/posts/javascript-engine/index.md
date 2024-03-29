---
title: "JavaScript 엔진(V8, Spider Monkey)"
description: ""
date: 2022-04-10
update: 2022-04-10
tags:
  - JavaScript
  - engine
  - V8
  - SpiderMonkey
  - TIL
series: "JavaScript"
---

## 자바스크립트란
- ‘웹페이지(HTML)에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다.
- 오늘날 자바스크립트는 브라우저 환경에서 가장 널리 사용되는 언어이며, 자바스크립트는 브라우저뿐만 아니라 서버에서도 실행할 수 있습니다.
- 이 외에도 [자바스크립트 엔진(JavaScript engine)](https://en.wikipedia.org/wiki/JavaScript_engine)이라 불리는 특별한 프로그램이 들어 있는 모든 디바이스에서도 동작합니다.
- 브라우저엔 '자바스크립트 가상 머신’이라 불리는 엔진이 내장되어 있습니다.

## 브라우저 내 자바스크립트 엔진 종류
- Chrome, Opera - [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine))
- Firefox - [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey)
- Edge - ChakraCore
- Safari - SquirrelFish

## 자바스크립트만의 장점
- HTML/CSS와 완전히 통합할 수 있음
- 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨
- 간단한 일은 간단하게 처리할 수 있게 해줌

## 호환성 표
자바스크립트 메서드/함수 관련정보, 브라우저 지원여부 확인
- [자바스크립트 해당 기능을 특정 엔진이 지원하는지](https://kangax.github.io/compat-table/es6/)
- [브라우저가 특정 기능을 지원하는지](https://caniuse.com/)

> 참고문서
> - [JavaScript engine-wiki](https://en.wikipedia.org/wiki/JavaScript_engine)
> - [자바스크립트 튜토리얼](https://ko.javascript.info/intro)
