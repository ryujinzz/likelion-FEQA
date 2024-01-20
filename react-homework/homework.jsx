import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

createRoot(document.querySelector("main")).render(
  <div>
    <Header />
    <div class="login">
      <span>로그인</span>
      <form>
        <label htmlFor="email"></label>
        <input type="email" id="email" placeholder="아이디를 입력해주세요" />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </form>
      <div className="find">
        <a href="https://www.kurly.com/member/find/id">아이디 찾기</a>
        <span className="divider">|</span>
        <a href="https://www.kurly.com/member/find/password">비밀번호 찾기</a>
      </div>
      <div className="login-register">
        <button className="btn-login">로그인</button>

        <a className="login-register-a" href="/src/pages/register/index.html">
          회원가입
        </a>
      </div>
    </div>
    <Footer />
  </div>
);
