---
title: "React hooks에 대해 알아보자"
description: ""
date: 2022-06-30
update: 2022-06-30
tags:
  - React
  - hooks
  - useEffect
  - useMemo
  - useCallback
  - useRef
  - useReducer
  - useState
  - useContext
  - portals
series: "React"
---

> **React hooks란?** <br/> 함수형 컴포넌트에서 기능을 추가할 때 사용하는 함수들

## 1. useEffect
 - 컴포넌트가 마운트 됐을 때(처음 나타났을 때), 언마운트 됐을 때(사라질 때), 그리고 업데이트 될 때(특정 props가 바뀔 때) 실행되는 hook
 - API 호출, 이벤트 처리 등을 처리할 때 사용

## 2. useMemo
  - 이전에 계산 한 값(랜더링한 함수 등)을 재사용하게 해줌
  - 특정 결과값을 재사용 할 때 사용
  - why? 성능 최적화

## 3. useCallback
  - 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용
  - useMemo와의 차이? useMemo는 함수를 실행, useCallback은 함수를 반환

## 4. useRef
  - 특정 DOM 선택, 접근하기 위해서
  - why? 특정 DOM에 적용하기 때문에 DOM을 선택해야 하는 상황이 발생
  - 외부 라이브러리 사용할 때 등

## 5. useState
  - 현재 컴포넌트에서 동적으로 변경되는 상태를 관리

## 6. useReducer
  - 상태관리, 현재 컴포넌트가 아닌 **다른 곳에 state를 저장하고 싶을 때 유용**
  - useState와 다르게 컴포넌트 바깥에 작성, 다른 파일에 작성 후 불러와서 사용
  ### + useState 차이점?
    - 컴포넌트에서 관리하는 값이 딱 하나고, 그 값이 단순한 숫자, 문자열 또는 boolean 값이라면 확실히 useState로 관리하는게 편할 것
    - 만약에 컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해진다면 useReducer로 관리하는게 편할 것

## 7. useContext
  - 컴포넌트 간 상태를 전달할 때 사용
  - props로 전달하기에 코드중첩, 가독성 등 좋지 않음
  - 중첩 구조가 복잡한 상황에서도 비교적 쉽게 데이터를 전달할 수 있다

## 8. reactDom portal
  - 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 기능을 제공 <br/>
  -> 독립적인 구조를 가질 수 있음. 부모 컴포넌트의 제약에서 벗어날 수 있음. 왜? react 트리구조를 가지고 있기 때문에.
  [공식문서](https://ko.reactjs.org/docs/portals.html)

## +useSelector, useDispatch, useStore
  - [redux 관련 hook](https://react-redux.js.org/api/hooks)
  
