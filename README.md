# 🔭 StackOverFlow Clone Project
지식시장 사이트인 StackOverFlow를 클론 코딩하는 프로젝트입니다.

</br>

## 💡배포링크
http://codestates-fe-006.s3-website.ap-northeast-2.amazonaws.com/

</br>

## 🙌 Team members
### 🪄Frontend
- 박성훈 (팀장)
- 이채은 (서기)
- 이세비

### 🪄Backend
- 장정욱 (BE 팀장)
- 이규리
- 김효성

</br>

## ✏️ Description
코드스테이츠 부트캠프에서 배운 모든 기술을 활용하여 
프론트엔드 개발자 3명, 백엔드 개발자 3명이 한 팀을 이루어,
StackOverFlow 사이트를 밴치마킹 구현하는 협업 프로젝트 입니다.

</br>


## 📅 Project period
- 2022.10.20 ~ 2022.11.07 (13일간)

</br>

## 🛠 Tech Stacks
### 🪄 Front-end
 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Recoil](https://img.shields.io/badge/recoil-%23593d88.svg?style=for-the-badge&logo=recoil&logoColor=white)![axios](https://img.shields.io/badge/Axios-181717?style=for-the-badge&logo=Axios&logoColor=white) 

### 🪄 Back-end
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/spring data JPA-6DB33F?style=for-the-badge&logo=spring data JPA&logoColor=white"> <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"> <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> ![JWT](https://img.shields.io/badge/JWT-181717?style=for-the-badge&logo=JWT&logoColor=white) 


</br>


## 📱Collaboration Tools
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">


</br>

## 🪄 Client (Front-end) 실행방법

### git clone 후

1. Git 브랜치 업데이트
```
 git remote update
```

2. fe-dev 브랜치로 이동
```
 git checkout -t origin/fe-dev
```

3. package.json 설치
```
 npm install
```

4. app 실행
```
 npm run start
```

## Back-end 실행방법
### 사전 조건 : git clone 하여 백엔드 프로젝트가 있는 server 폴더 경로 들어가기
### yml 파일별 프로파일 설명과 실행 방법
#### application.yml
- H2( local 임시 DB)를 사용하는 설정
- 실행방법(IntelliJ를 사용하지 않는 방법) : 빌드 완료 후, CLI 환경의 프로젝트 내의 server폴더 위치에서, `java -jar build/libs/preproject-0.0.1-SNAPSHOT.jar` 명령어를 실행할 것
#### application-aws-createdb.yml
- AWS상의 RDS의 실제 DB를 사용하는 설정 (최초 수행 이후의 수행 시, 사용하는 용도 - DB에 테이블이 이미 있어야지만 성공적으로 수행됨 [`ddl-auto: none`] )
- 실행방법(IntelliJ를 사용하지 않는 방법) : 빌드 완료 후, CLI 환경의 프로젝트 내의 server폴더 위치에서, `java -jar build/libs/preproject-0.0.1-SNAPSHOT.jar --spring.profiles.active=aws-createdb` 명령어를 실행할 것
#### application-aws.yml
- AWS상의 RDS의 실제 DB를 사용하는 설정 (최초 수행시, 사용 용도 - DB에 테이블을 직접 만들어서 동작하는 설정 [`ddl-auto: create`] )
- 실행방법(IntelliJ를 사용하지 않는 방법) : 빌드 완료 후, CLI 환경의 프로젝트 내의 server폴더 위치에서, `java -jar build/libs/preproject-0.0.1-SNAPSHOT.jar --spring.profiles.active=aws` 명령어를 실행할 것
### 빌드 방법 (window 환경 기준)
- server 폴더 경로에서 터미널을 연 후, `./gradlew build` 명령어를 실행하면, *build/libs* 폴더 경로에 jar파일이 생성됨.


</br>

## 🖌️Code Convention
### 🪄Frontend
- Camel Casting
: const camelCase 형식으로 작성해주세요.

- Components -> Pascal Case
: 컴포넌트 이름의 첫 글자는 대문자로 작성해주세요.

- 이벤트 핸들러 네이밍
: 이벤트 함수 이름은 handle로 시작해주세요. (ex. handleClick())

- Styled Components
: 모든 styled 변수는 해당 컴포넌트 파일에 정의해주세요.

- className
: abc-class (- 사용)

### 🪄Backend
- Class Name
: 명사이어야 하며, 첫 글자를 대문자로 작성해 주세요.

- Interface Name
: 첫 글자를 대문자로 작성해 주세요.

- Variable Name
: CamelCase, 첫 글자를 대문자로 적지만 맨 앞에 오는 글자는 소문자로 작성해 주세요.

- Method Name
: CamelCase, 동사이어야 하며, 첫 글자를 대문자로 적지만 맨 앞에 오는 글자는 소문자로 작성해 주세요.


## 🖌️Commit / PR Convention
- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `refactor` : 코드 리팩토링
- `style` : CSS 추가/수정
- `test` : 테스트 추가/수정
- `chore` : 기타

```
 #이슈번호 feat: 작업내용
 ex) #1 feat: 로그인 기능 추가
```

## 🖌️branch Convention
- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `refactor` : 코드 리팩토링
- `style` : CSS 추가/수정
- `test` : 테스트 추가/수정
- `chore` : 기타

```
 feat/Issue#[이슈번호]
 ex) feat/Issue#1
```


## 🖌️Work Flow
![image](https://user-images.githubusercontent.com/106587166/197428263-5a4eb773-b177-412d-ac87-3e5e7b7a62e0.png)



