---
title: "CSR, SSR / SPA, MPA에 대한 이해"
description: ""
date: 2022-05-10
update: 2022-05-10
tags:
  - CSR
  - SSR
  - SPA
  - MPA
  - TIL
series: "Web"
---

## CSR(Client Side Rendering)
최초에 한번 서버에서 전체 페이지를 로딩하여 보여주고, 이후에는 클라이언트의 요청이 올 때 리소스를 서버에서 제공한 후, 클라이언트가 해석하고 렌더링함
- 모든 html과 static 파일이 로드될 때까지 기다려야 함
- SEO(검색 엔진 최적화)가 어려움

## SSR(Server Side Rendering)
완전한 html 파일을 받아오고, 웹 서버에 요청할 때마다 브라우저 새로고침이 일어나고 서버에서 새로운 페이지를 렌더링함
- 초기 로딩 속도가 빠르고 모든 검색 엔진에 대한 SEO가 가능
- 매번 페이지를 요청할 때마다 서버에 요청하기에 트래픽, 서버 부하가 있음
> **SEO(search engine optimization, 검색 엔진 최적화)**
> 
> 웹 페이지 검색엔진이 자료를 수집하고 순위를 매기는 방식에 맞게 웹 페이지를 구성해서 검색 결과의 상위에 나올 수 있도록 하는 작업
---

## MPA(Multiple Page Application)
모든 페이지는 각각의 **html**으로 이루어지고, 페이지가 바뀔 때마다 매번 완전한 페이지를 응답으로 받음
- 직관적이며 SEO에 대해 고민하지 않아도 됨
- 필요한 부분만 응답으로 받는 방식에 비해 비효율적, 페이지가 바뀔 때 브라우저가 깜빡임

## SPA(Single Page Application)
처음엔 **하나의 페이지**(html) 불러오고, 클라이언트의 요청이 있을 때 관련 컴포넌트를 불러옴
- 화면이 깜빡이지 않는 자연스러운 화면전환
- SPA는 화면을 띄우는데 js가 사용되고, SEO를 위한 웹 크롤러는 대부분 js를 해석하지 못하기에 SEO에 불리함

<aside>
⚠️ SPA 방식이 모두 CSR인 것은 아니다
</aside>
