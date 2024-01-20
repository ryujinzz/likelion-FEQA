# vanilla-project 를 React로 전환하는 과제

야무쌤과 함께하는 주간 첫 과제 



## 로그인 페이지 

바닐라 프로젝트에서 로그인 페이지 담당이었으므로, 내가 맡았던 로그인 페이지를 리액트로 바꾸어보기로 결정했다. 

로그인 페이지는 3부분으로 나뉜다. 

헤더/ 로그인 영역/푸터


<img width="804" alt="스크린샷 2024-01-20 오후 3 49 59" src="https://github.com/ryujinzz/likelion-FEQA/assets/146301783/34cd7ff6-c664-488b-8843-90587549dcea">




## 컴포넌트 나누기 

원래는 로그인 페이지만 하려고 했는데 헤더와 푸터도 합쳐 보고 싶은 욕심이 생겨서 컴포넌트 관련으로 인터넷 검색을 해보았다. 

참고 블로그 : https://blog.pumpkin-raccoon.com/70


블로그를 참고하여 아래와 같이 합쳐 주었다. 

|header.jsx|footer.jsx|homework.jsx|
|----------|-----------|-----------|
|<img width="901" alt="header" src="https://github.com/ryujinzz/likelion-FEQA/assets/146301783/86c251dd-317b-42e3-855c-f3760fc2f483">|<img width="898" alt="footer" src="https://github.com/ryujinzz/likelion-FEQA/assets/146301783/546168ec-868e-4134-8f8a-f0a323f2d3b5">|<img width="856" alt="homework" src="https://github.com/ryujinzz/likelion-FEQA/assets/146301783/c117ca36-a483-4c22-88fa-2107b5d3b7e7">|


### 전체적인 폴더 캡쳐와 컴포넌트 css 

슬비쌤이 가르쳐준 css 컴포넌트 합치 방법과 리액트를 접목시켜보았다. 

<img width="1011" alt="component" src="https://github.com/ryujinzz/likelion-FEQA/assets/146301783/258443af-e654-4af9-990b-a45d9d93b611">




## 결과물 

![로그인페이지리액트](https://github.com/ryujinzz/likelion-FEQA/assets/146301783/e074f9b2-263e-4b63-9d90-7aa8ae31a84a)



## 과제를 마무리 하며 

합치는 과정에서 import React를 빼먹은 오류나, 

점하나 빼먹어서 querySelector 가 안 잡히는 오류 등 

css도 컴포넌트로 묶으면서 머리가 아팠지만 

오류를 하나씩 해결해 나가면서 이렇게 하는거구나 조금씩 깨달았다. 

그리고 확실히 바닐라 프로젝트보다 리액트가 훨씬 편하게 끝났다. 
더 편해질 수 있도록 더 많은 것을 배우고 싶다. 
