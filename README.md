# sw-repo-manager

본 리포는 연습문제과 정답을 관리하기 위한 리포 입니다.

2개의 깃모듈과 원 코드 폴더를 포함한 총 3개의 폴더로 구현되어 있습니다. 

1. 수강생을 위한 연습문제용 (read-only, version)

2. 수강생을 위한 정답 레퍼런스용 (read-only, version)

3. 내부 코드 정리와 이력을 기록하는 용도 및 1번, 2번을 특정 버전 시점으로 생성하는 용도 (read and write)

3가지 명령어가 있다 .
- 검증 버전
- 배포 버전 -y

- 검증
- 배포 -y

## 배포명령어의 세부과정
배포를 하면 
2개의 서브 git 모듈에 특정 버전이 정리되어 나오며
버전번호도 변경된다.


<package-name>-master-1
생성되는 repo name
<package-name>-assign-1
<package-name>-ref-1

nodejs 14.19.1

## Basic Cencepts

{}-master 폴더를 제외한 
() 및 {}-assign 폴더는 언제든 삭제되어도 무방하다, assing branch and ref branch에 기록되어 있을뿐

## Usage
#### 1/ 코드 개발
 Master 폴더에서 코드 수정후 

#### 2. 브랜치별 코드 분리
문제는 assign브랜치에서 만들고 커밋하고, 거기로 ref를 rebase한다음에, 다 완성되면 ref로 master를 rebase한다음에 추가 하고 싶은 내용을 추가해서 기록해둔다.

#### 3. 브랜치별 코드를 하위Git폴더로 배포
deploy 명령으로 두개의 브랜치에 있는 파일들을 하위 git 시스템 폴더로 옮기고 커밋을 정리한다. 
```
npm run deploy:ref
npm run deploy:assign
```

#### 4. 버저닝
standard-version 을 실행해서 모든 파일이 커밋된상태에서 버저닝을 진행하고 
```
standard-version                                 ──(화, 412)─┘
✔ bumping version in package.json from 0.1.0 to 0.1.1
✔ bumping version in package-lock.json from 1.0.4 to 0.1.1
✔ outputting changes to CHANGELOG.md
✔ committing package-lock.json and package.json and CHANGELOG.md
✔ tagging release v0.1.1
ℹ Run `git push --follow-tags origin master && npm publish` to publish
```
하위 폴더 2개에도 같은 버전 태그를 기입한다. 
```
    cd ./im-repo-manager   
    git tag v0.1.1 
```

