# ๐ญ StackOverFlow Clone Project
์ง์์์ฅ ์ฌ์ดํธ์ธ StackOverFlow๋ฅผ ํด๋ก  ์ฝ๋ฉํ๋ ํ๋ก์ ํธ์๋๋ค.

</br>

## ๐ก๋ฐฐํฌ๋งํฌ
http://codestates-fe-006.s3-website.ap-northeast-2.amazonaws.com/

</br>

## ๐ Team members
### ๐ชFrontend
- ๋ฐ์ฑํ (ํ์ฅ)
- ์ด์ฑ์ (์๊ธฐ)
- ์ด์ธ๋น

### ๐ชBackend
- ์ฅ์ ์ฑ (BE ํ์ฅ)
- ์ด๊ท๋ฆฌ
- ๊นํจ์ฑ

</br>

## โ๏ธ Description
์ฝ๋์คํ์ด์ธ  ๋ถํธ์บ ํ์์ ๋ฐฐ์ด ๋ชจ๋  ๊ธฐ์ ์ ํ์ฉํ์ฌ 
ํ๋ก ํธ์๋ ๊ฐ๋ฐ์ 3๋ช, ๋ฐฑ์๋ ๊ฐ๋ฐ์ 3๋ช์ด ํ ํ์ ์ด๋ฃจ์ด,
StackOverFlow ์ฌ์ดํธ๋ฅผ ๋ฐด์น๋งํน ๊ตฌํํ๋ ํ์ ํ๋ก์ ํธ ์๋๋ค.

</br>


## ๐ Project period
- 2022.10.20 ~ 2022.11.07 (13์ผ๊ฐ)

</br>

## ๐  Tech Stacks
### ๐ช Front-end
 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Recoil](https://img.shields.io/badge/recoil-%23593d88.svg?style=for-the-badge&logo=recoil&logoColor=white)![axios](https://img.shields.io/badge/Axios-181717?style=for-the-badge&logo=Axios&logoColor=white) 

### ๐ช Back-end
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/spring data JPA-6DB33F?style=for-the-badge&logo=spring data JPA&logoColor=white"> <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"> <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> ![JWT](https://img.shields.io/badge/JWT-181717?style=for-the-badge&logo=JWT&logoColor=white) 


</br>


## ๐ฑCollaboration Tools
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">


</br>

## ๐ช Client (Front-end) ์คํ๋ฐฉ๋ฒ

### git clone ํ

1. Git ๋ธ๋์น ์๋ฐ์ดํธ
```
 git remote update
```

2. fe-dev ๋ธ๋์น๋ก ์ด๋
```
 git checkout -t origin/fe-dev
```

3. package.json ์ค์น
```
 npm install
```

4. app ์คํ
```
 npm run start
```

## Back-end ์คํ๋ฐฉ๋ฒ
### ์ฌ์  ์กฐ๊ฑด : git clone ํ์ฌ ๋ฐฑ์๋ ํ๋ก์ ํธ๊ฐ ์๋ server ํด๋ ๊ฒฝ๋ก ๋ค์ด๊ฐ๊ธฐ
### yml ํ์ผ๋ณ ํ๋กํ์ผ ์ค๋ช๊ณผ ์คํ ๋ฐฉ๋ฒ
#### application.yml
- H2( local ์์ DB)๋ฅผ ์ฌ์ฉํ๋ ์ค์ 
- ์คํ๋ฐฉ๋ฒ(IntelliJ๋ฅผ ์ฌ์ฉํ์ง ์๋ ๋ฐฉ๋ฒ) : ๋น๋ ์๋ฃ ํ, CLI ํ๊ฒฝ์ ํ๋ก์ ํธ ๋ด์ serverํด๋ ์์น์์, `java -jar build/libs/preproject-0.0.1-SNAPSHOT.jar` ๋ช๋ น์ด๋ฅผ ์คํํ  ๊ฒ
#### application-aws-createdb.yml
- AWS์์ RDS์ ์ค์  DB๋ฅผ ์ฌ์ฉํ๋ ์ค์  (์ต์ด ์ํ ์ดํ์ ์ํ ์, ์ฌ์ฉํ๋ ์ฉ๋ - DB์ ํ์ด๋ธ์ด ์ด๋ฏธ ์์ด์ผ์ง๋ง ์ฑ๊ณต์ ์ผ๋ก ์ํ๋จ [`ddl-auto: none`] )
- ์คํ๋ฐฉ๋ฒ(IntelliJ๋ฅผ ์ฌ์ฉํ์ง ์๋ ๋ฐฉ๋ฒ) : ๋น๋ ์๋ฃ ํ, CLI ํ๊ฒฝ์ ํ๋ก์ ํธ ๋ด์ serverํด๋ ์์น์์, `java -jar build/libs/preproject-0.0.1-SNAPSHOT.jar --spring.profiles.active=aws-createdb` ๋ช๋ น์ด๋ฅผ ์คํํ  ๊ฒ
#### application-aws.yml
- AWS์์ RDS์ ์ค์  DB๋ฅผ ์ฌ์ฉํ๋ ์ค์  (์ต์ด ์ํ์, ์ฌ์ฉ ์ฉ๋ - DB์ ํ์ด๋ธ์ ์ง์  ๋ง๋ค์ด์ ๋์ํ๋ ์ค์  [`ddl-auto: create`] )
- ์คํ๋ฐฉ๋ฒ(IntelliJ๋ฅผ ์ฌ์ฉํ์ง ์๋ ๋ฐฉ๋ฒ) : ๋น๋ ์๋ฃ ํ, CLI ํ๊ฒฝ์ ํ๋ก์ ํธ ๋ด์ serverํด๋ ์์น์์, `java -jar build/libs/preproject-0.0.1-SNAPSHOT.jar --spring.profiles.active=aws` ๋ช๋ น์ด๋ฅผ ์คํํ  ๊ฒ
### ๋น๋ ๋ฐฉ๋ฒ (window ํ๊ฒฝ ๊ธฐ์ค)
- server ํด๋ ๊ฒฝ๋ก์์ ํฐ๋ฏธ๋์ ์ฐ ํ, `./gradlew build` ๋ช๋ น์ด๋ฅผ ์คํํ๋ฉด, *build/libs* ํด๋ ๊ฒฝ๋ก์ jarํ์ผ์ด ์์ฑ๋จ.


</br>

## ๐๏ธCode Convention
### ๐ชFrontend
- Camel Casting
: const camelCase ํ์์ผ๋ก ์์ฑํด์ฃผ์ธ์.

- Components -> Pascal Case
: ์ปดํฌ๋ํธ ์ด๋ฆ์ ์ฒซ ๊ธ์๋ ๋๋ฌธ์๋ก ์์ฑํด์ฃผ์ธ์.

- ์ด๋ฒคํธ ํธ๋ค๋ฌ ๋ค์ด๋ฐ
: ์ด๋ฒคํธ ํจ์ ์ด๋ฆ์ handle๋ก ์์ํด์ฃผ์ธ์. (ex. handleClick())

- Styled Components
: ๋ชจ๋  styled ๋ณ์๋ ํด๋น ์ปดํฌ๋ํธ ํ์ผ์ ์ ์ํด์ฃผ์ธ์.

- className
: abc-class (- ์ฌ์ฉ)

### ๐ชBackend
- Class Name
: ๋ช์ฌ์ด์ด์ผ ํ๋ฉฐ, ์ฒซ ๊ธ์๋ฅผ ๋๋ฌธ์๋ก ์์ฑํด ์ฃผ์ธ์.

- Interface Name
: ์ฒซ ๊ธ์๋ฅผ ๋๋ฌธ์๋ก ์์ฑํด ์ฃผ์ธ์.

- Variable Name
: CamelCase, ์ฒซ ๊ธ์๋ฅผ ๋๋ฌธ์๋ก ์ ์ง๋ง ๋งจ ์์ ์ค๋ ๊ธ์๋ ์๋ฌธ์๋ก ์์ฑํด ์ฃผ์ธ์.

- Method Name
: CamelCase, ๋์ฌ์ด์ด์ผ ํ๋ฉฐ, ์ฒซ ๊ธ์๋ฅผ ๋๋ฌธ์๋ก ์ ์ง๋ง ๋งจ ์์ ์ค๋ ๊ธ์๋ ์๋ฌธ์๋ก ์์ฑํด ์ฃผ์ธ์.


## ๐๏ธCommit / PR Convention
- `feat` : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
- `fix` : ๋ฒ๊ทธ ์์ 
- `refactor` : ์ฝ๋ ๋ฆฌํฉํ ๋ง
- `style` : CSS ์ถ๊ฐ/์์ 
- `test` : ํ์คํธ ์ถ๊ฐ/์์ 
- `chore` : ๊ธฐํ

```
 #์ด์๋ฒํธ feat: ์์๋ด์ฉ
 ex) #1 feat: ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ์ถ๊ฐ
```

## ๐๏ธbranch Convention
- `feat` : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
- `fix` : ๋ฒ๊ทธ ์์ 
- `refactor` : ์ฝ๋ ๋ฆฌํฉํ ๋ง
- `style` : CSS ์ถ๊ฐ/์์ 
- `test` : ํ์คํธ ์ถ๊ฐ/์์ 
- `chore` : ๊ธฐํ

```
 feat/Issue#[์ด์๋ฒํธ]
 ex) feat/Issue#1
```


## ๐๏ธWork Flow
![image](https://user-images.githubusercontent.com/106587166/197428263-5a4eb773-b177-412d-ac87-3e5e7b7a62e0.png)



