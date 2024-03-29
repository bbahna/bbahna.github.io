---
title: "[Git] 기본 명령어들"
description: ""
date: 2022-05-20
update: 2022-05-20
tags:
  - git
  - commit
  - push
  - pull
  - TIL
series: "Git"
---

## Clone(클론)
- 원격 저장소를 로컬 저장소에 복제<br/>
    `$ git clone https://github.com/{GithubID}/{RepositoryName}.git`
    
## Branch(브랜치)
동시에 다양한 작업을 할 수 있도록 분리된 작업영역
- 브랜치 생성<br/>
    `$ git branch {브랜치 이름}`
    
- 브랜치 삭제<br/>
    `$ git branch -D {브랜치 이름}`
    
## Checkout(체크아웃)
- 브랜치 전환<br/>
    `$ git checkout {브랜치 이름}`
    
- 브랜치 생성과 전환<br/>
    `$ git branch -b {브랜치 이름}`
    
- 브랜치 조회<br/>
    `$ git branch`
    
## Commit(커밋)
- 커밋 추가<br/>
    `$ git add .`<br/>
    `$ git add {파일명}`
    
- 커밋 상태<br/>
    `$ git status`
    
- 커밋 메시지<br/>
    `$ git commit -m "커밋 메시지"`
    
## Push(푸시)
- 원격 저장소의 데이터를 로컬 저장소에 가져와 병합하기<br/>
    `$ git push {origin master}`
    
## Fetch(패치)
- 원격 저장소의 데이터를 로컬에 가져오기만 하기<br/>
    `$ git fetch {origin master}`
    
## Pull(풀)
- 로컬 저장소의 데이터를 원격 저장소로 밀어넣기<br/>
    `$ git pull {origin master}`

## Merge(머지)
- 변경 이력 병합하기<br/>
    `$ git merge {branch_name}`
    
## Tag(태그)
- 커밋을 참조하기 쉽도록 알기 쉬운 이름을 붙이는 것<br/>
    `$ git tag {태그 이름}`

- 태그명으로 커밋 조회<br/>
    `$ git show {태그 이름}`
