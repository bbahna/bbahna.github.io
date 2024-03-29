---
title: "Gatsby 개발기록 _github page 배포설정"
description: ""
date: 2022-05-01
update: 2022-05-01
tags:
  - github
  - build
  - cicd
  - TIL
series: "Gatsby"
---

&nbsp;기술 블로그로 **Gatsby**를 선택한 후, 서버 배포에 대해 고민하다 **github-page를 이용하여 배포**하기로 하였습니다.<br />
**github와 연동**이 되며 **사용법이 어렵지 않다**는 장점으로 선택하게 되었습니다.

## 1. github-page repository 생성

- repository name: `계정.github.io`
  ![](<github-page(1).png>)

## 2. gatsby template 선택

- gatsby template는 [gatsby-starter-hoodie](https://github.com/devHudi/gatsby-starter-hoodie) 결정

> **나의 template 선택조건**
>
> - 다크모드, 검색, 태그, 댓글기능

추가로 [gatsby-starter-bee](https://github.com/JaeYeopHan/gatsby-starter-bee), [gatsby-starter-apple](https://github.com/sungik-choi/gatsby-starter-apple)도 마지막까지 고민한 템플릿입니다.<br/>
공식 홈페이지에서도 [template](https://www.gatsbyjs.com/starters/)를 제공하고 있습니다.

## 3. gatsby template clone

- gatsby cli 설치<br/>
  `$ npm install -g gatsby-cli`<br/>
  `$ yarn global add gatsby-cli`
- project 생성<br/>
  `$ gatsby new {project-name} {template-route}`<br/>
  `$ gatsby new bbahna.github.io https://github.com/devHudi/gatsby-starter-hoodie`
- 개발 설정<br/>
  `$ cd bbahna.github.io`<br/>
  `$ npm install`<br/>
  `$ gatsby develop` 또는 `$ yarn develop`
- git 연결<br/>
  `$ rm -rf .git`<br/>
  `$ git init`<br/>
  `$ git remote add origin https://github.com/bbahna/bbahna.github.io.git`
- 원격 저장소에 소스 올리기<br/>
  `$ git add .`<br/>
  `$ git commit -m “init”`<br/>
  `$ git push origin master`

## 4. customizing

- [blog-config.js 수정](https://github.com/bbahna/bbahna.github.io/blob/master/blog-config.js)
- favicon, profile, link image 변경

## 5. github page **호스팅**

- gh-pages 설치<br/>
  `$ npm i gh-pages`<br/>
  `$ yarn add gh-pages --dev`

## 6. **github actions** 배포 자동화(CI/CD)

### [token 발급](https://github.com/settings/tokens)

- [자동 build token 설정](https://github.com/bbahna/bbahna.github.io/commit/01b0684c08700088b8c2b152bb9662c5b913a3ef)
  - .[github/workflows/ci.yml](https://github.com/bbahna/bbahna.github.io/blob/master/.github/workflows/ci.yml)
    ```json
    with:
    	access-token: ${{ secrets.BBAHNA_TOKEN }}
    	deploy-branch: gh-pages
    ```
- [Create main.yml](https://github.com/bbahna/bbahna.github.io/commit/759b0a9bb288a4e5f8847f4f46fddb49320752f3)
  - [.github/workflows/main.yml](https://github.com/bbahna/bbahna.github.io/blob/master/.github/workflows/main.yml)
    ```json
    access-token: ${{ secrets.BBAHNA_TOKEN }}
    ```
- 새글 생성

  - contents/posts/post-name/index.md<br/>
    _**url: bbahna.gitbhub.io/post-name**_

- [Action](https://github.com/bbahna/bbahna.github.io/actions) 확인

### Gatsby 배포특징

- 가공할 정보를 GraphQL에서 가져와서 **Build 과정에서 마크업 생성**
- 배포할 때 각 페이지 정보들이 모두 만들어지므로 따로 서버가 필요하지 않다.<br/>
  ↔ SPA(Single Page Application): JavaScript가 실행되면 빈 HTML 페이지 안에 마크업을 추가
