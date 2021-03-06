---
title: "[Git] commit history 초기화"
description: ""
date: 2022-06-10
update: 2022-06-10
tags:
  - git
  - commit
  - history
series: "Git"
---

## git commit history 전부 삭제하기

>clone 후 기존 git commit history를 reset 후 새로운 commit history를 남기고 싶을 때 사용하면 됩니다.

* warning: 이 방법을 사용하면 기존 커밋 히스토리가 전부 reset(초기화) 됩니다.

### 1. commit history 삭제
```
$ rm -rf .git
```
### 2. git 재설정
```
$ git init
```
### 3. git 커밋
```
$ git add .
$ git commit -m "initial commit"
```
### 4. git 원격 저장소 연결
```
$ git remote add origin [저장소 URL]
```
### 5. git 원격 저장소 푸시 *(force: 기존 자료로 발생하는 에러를 무시한 강한 규칙 적용)*
```
$ git push -u --force origin master
```
작업이 완료되면 해당 리포지토리에 처음 commit된 상태로 파일이 업로드 된 것을 확인 가능합니다.
