---
title: "기술 블로그에 Gatsby를 사용한 이유"
description: ""
date: 2022-04-30
update: 2022-04-30
tags:
  - Gatsby
  - Next
  - Nuxt
  - JAMStack
series: "JavaScript"
---

**Gatsby**는 **JAM Stack을 활용한 정적 사이트 생성 프레임워크**

## JAM Stack?
![](js-framework(1).png)
- **`J`**: JavaScript
- **`A`**: API
- **`M`**: Markup

**JavaScript, API,** HTML이나 CSS 등을 칭하는 **MarkUp**으로 웹 애플리케이션을 구성하는 스택

> **Jamstack is an architecture designed to make the web faster, more secure, and easier to scale.**
> 
> JAM Stack 은 더 빠르고, 안전하며, 스케일링하기 쉬운 웹을 만들기 위해 디자인된 아키텍처입니다.

## JAM Stack 기반 프레임워크
- next, gatsby, nuxt, jekyll..

## JAM Stack 동작원리
![](js-framework(2).png)
- **Traditional Web**: server DB 또는 CMS(Content Management System)에서 추출한 데이터를 프론트엔드에 뿌려주는 방식 ⇒ 구조가 복잡함
- **JAM Stack**: CDN(Content Delivery Network)

## **JAM Stack 장점**
### 1. **더 빠르게 웹 사이트를 제공할 수 있음**
![](js-framework(3).png)

### 2. **안전한 웹 사이트를 제공할 수 있음**
![](js-framework(4).png)

### 3. **스케일링하기 쉬운 웹 사이트를 제공할 수 있음**
![](js-framework(5).png)
`data scaling 데이터 전처리`

## Blog project에 Gatsby를 선택한 이유
- 현재시점 가장 많은 다운로드가 있는 **Next**는 서버 사이드 렌더링(SSR) 프레임워크에 가까우며,

    컨텐츠의 변화가 잦지 않은 블로그에는 정적 사이트 생성에는 **Gatsby**가 적합하다고 판단
- +**React 기반**이며 **custom**이 어렵지 않음
