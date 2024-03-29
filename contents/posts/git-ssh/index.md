---
title: "[Git] 한 컴퓨터에서 여러계정 사용하기"
description: ""
date: 2022-08-05
update: 2022-08-05
tags:
  - git
  - ssh
  - key
series: "Git"
---

## 1. ssh key 생성
`$ cd .ssh`

`$ ssh-keygen -t rsa -C "[hyoon.dev@gmail.com](mailto:hyoon.dev@gmail.com)" -r "hyoon"`

`$ ssh-keygen -t rsa -C "[lemontree6629@gmail.com](mailto:lemontree6629@gmail.com)" -r "linaoo7"`

- 다음으로 SSH 키에 대한 비밀번호를 추가로 지정할지 물어봅니다. 패스워드를 설정해도 되고, 추가 패스워드 없이 사용하려면 엔터를 두 번 입력해줍니다.<br/>
  (추가 패스워드는 나중에 지정하는 것도 가능하지만, GitHub에서는 공식적으로 패스워드 설정을 권장하고 있습니다)

```powershell
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

## 2. ssh config 설정
```powershell
Host github.com-hyoon
        HostName github.com
        User hyoon.dev@email.com
        IdentityFile ~/.ssh/hyoon
Host github.com-linaoo7
        HostName github.com
        User lemontree6629@email.com
        IdentityFile ~/.ssh/linaoo7
```

## 3. ssh agent 등록
- 개인키 비밀번호 암호화하여 저장

```powershell
$ ssh-add hyoon
Identity added: hyoon (hyoon.dev@email.com)

$ ssh-add linaoo7
Identity added: linaoo7 (lemontree6629@email.com)

$ ssh-add -l
```

## 4. github에 public key 등록
### 개인키 출력
`$ cat hyoon.pub
 $ cat linaoo7.pub`
- [https://github.com/settings/keys](https://github.com/settings/keys) 등록설정
    ![add new key](git-ssh(1).png)
    ![ssh key (hyoon)](git-ssh(2).png)
    ![ssh key (linaoo7)](git-ssh(3).png)
  1. **리포에 설정하기** : Project Repo → Settings → Deploy Keys → Add Deploy Key> `id_rsa.pub`의 내용 쓰기
  2. **계정에 설정하기** : 계정 → Settings → SSH and GPG keys → SSH Keys → New SSH Key 선택> `id_rsa.pub`의 내용 쓰기

## 5. ssh로 clone
![repository-clone(ssh)](git-ssh(4).png)
