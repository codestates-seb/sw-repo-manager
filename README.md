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