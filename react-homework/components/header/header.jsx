import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="fixed2">
        <div className="navigation2">
          <nav>
            <div className="nav-menu2">
              <div className="nav-capture2">
                <ul className="nav-menu-ul2">
                  <li className="nav-category2">
                    <img
                      src="/images/header/hamberger.svg"
                      alt="카테고리 목록"
                    />
                    카테고리
                  </li>
                </ul>
                <ul className="nav-menu-hide2">
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/present1.png"
                      alt=""
                    />
                    <a href="">선물하기</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/plant2.png"
                      alt=""
                    />
                    <a href="/">채소</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/apple3.png"
                      alt=""
                    />
                    <a href="/">과일•견과•쌀</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/shrimp.png"
                      alt=""
                    />
                    <a href="/">수산•해산•건어물</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/meat.png"
                      alt=""
                    />
                    <a href="/">정육•계란</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/nabe.svg"
                      alt=""
                    />
                    <a href="/">국•반찬•메인요리</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/leaves.png"
                      alt=""
                    />
                    <a href="/">샐러드•간편식</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/sault.png"
                      alt=""
                    />
                    <a href="/">면•양념•오일</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/coffee.png"
                      alt=""
                    />
                    <a href="/">생수•음료•우유•커피</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/cookie.png"
                      alt=""
                    />
                    <a href="/">간식•과자•떡</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/bread.png"
                      alt=""
                    />
                    <a href="/">베이커리•치즈•델리</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/pill.png"
                      alt=""
                    />
                    <a href="/">건강식품</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/alchol.png"
                      alt=""
                    />
                    <a href="/">와인</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/Icon.png"
                      alt=""
                    />
                    <a href="/">전통주</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/senzai.png"
                      alt=""
                    />
                    <a href="/">생활용품•리빙•캠핑</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/makeup.png"
                      alt=""
                    />
                    <a href="/">스킨케어•메이크업</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/shampoo.png"
                      alt=""
                    />
                    <a href="/">헤어•바디•구강</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/fork.png"
                      alt=""
                    />
                    <a href="/">주방용품</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/drum.png"
                      alt=""
                    />
                    <a href="/">가전제품</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/dog.png"
                      alt=""
                    />
                    <a href="/">반려동물</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/baby.png"
                      alt=""
                    />
                    <a href="/">베이비•키즈•완구</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/plane.png"
                      alt=""
                    />
                    <a href="/">여행•티켓</a>
                  </li>
                </ul>
              </div>
              <ul className="header-center center">
                <li>
                  <a href="/">신상품</a>
                </li>
                <li>
                  <a href="/src/pages/product/index.html">베스트</a>
                </li>
                <li>
                  <a href="/">알뜰쇼핑</a>
                </li>
                <li>
                  <a href="/">특가/혜택</a>
                </li>
              </ul>

              <div className="search2">
                <form action="/" method="get">
                  <label for="search"></label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="search2"
                      placeholder="검색어를 입력해주세요"
                    />
                  </div>
                </form>
                <button id="submit" type="submit">
                  <img src="/images/header/glass.svg" alt="돋보기" />
                </button>
              </div>

              <div className="ect-menu">
                <a href="/">
                  <img
                    className="add-package1"
                    src="/images/header/Group.svg"
                    alt="배송지 등록"
                  />
                </a>
                <a href="/">
                  <img
                    className="heart-img"
                    src="/images/header/ic-heart.svg"
                    alt="찜하기"
                  />
                </a>
                <a href="/src/pages/cart/index.html">
                  <img
                    className="cart-img"
                    src="/images/header/cart.svg"
                    alt="장바구니"
                  />
                  <div className="drop-bubble2"></div>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="header-ad">
        <div className="header-ad-width">
          <a href="/src/pages/register/index.html">
            <span>
              지금 가입하고 인기상품
              <b>100원</b>에 받아가세요!
            </span>
          </a>
          <button className="header-ad-btn" type="button">
            <img src="/images/header/x-button.png" alt="창닫기" />
          </button>
        </div>
      </div>
      <div className="header-wrapper">
        <ul className="header-right">
          <li>
            <a className="register" href="/src/pages/register/index.html">
              회원가입
            </a>
          </li>
          <li>
            <span className="divider">|</span>
            <a className="login-btn" href="/src/pages/login/index.html">
              로그인
            </a>
          </li>

          <li className="info-wrapper">
            <span className="divider">|</span>
            <a className="information" href="/">
              고객센터
              <img src="/images/header/Icon_down.png" alt="" />
            </a>
          </li>
        </ul>
        <div className="search-wrapper">
          <div className="search-main">
            <h1 className="logo">
              <a href="/index.html">
                <picture>
                  <img src="/images/header/logo.svg" alt="마켓칼리" />
                </picture>
              </a>
            </h1>
            <button onclick="location.href='/index.html'" className="market">
              마켓칼리
            </button>
            <span className="divider">|</span>
            <button className="beauty">
              뷰티칼리
              <img src="/images/header/new.svg" alt="new 뷰티칼리소식" />
            </button>
          </div>
          <div className="search">
            <form action="/" method="get">
              <label htmlFor="search"></label>
              <input
                type="text"
                id="search"
                placeholder="검색어를 입력해주세요"
              />
            </form>
            <button type="submit">
              <img src="/images/header/glass.svg" alt="돋보기" />
            </button>
          </div>
          <div className="ect-menu">
            <div className="ect-menu-add-package">
              <a href="">
                <img
                  className="add-package add-package2"
                  src="/images/header/Group.svg"
                  alt="배송지 등록"
                />
              </a>
              <div className="drop-bubble">
                <div className="bubble-text">
                  <span>배송지를 등록</span>하고
                  <br />
                  <span>구매가능한 상품을 확인하세요!</span>
                  <div className="bubble-login">
                    <a href="/src/pages/login/index.html">로그인</a>
                    <div className="bubble-search">
                      <button className="bubble-search-ad" type="button">
                        <img
                          width="22"
                          height="20"
                          src="/images/header/search-white.png"
                          alt="돋보기"
                        />
                        주소검색
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="heart" href="#">
              <img
                className="heart-img"
                src="/images/header/ic-heart.svg"
                alt="찜하기"
              />
            </a>
            <a href="/src/pages/cart/index.html">
              <img
                className="cart-img"
                src="/images/header/cart.svg"
                alt="장바구니"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="fixed">
        <div className="navigation">
          <nav>
            <div className="nav-menu">
              <div className="nav-capture">
                <ul className="nav-menu-ul">
                  <li className="nav-category">
                    <img
                      src="/images/header/hamberger.svg"
                      alt="카테고리 목록"
                    />
                    카테고리
                  </li>
                </ul>
                <ul className="nav-menu-hide1">
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/present1.png"
                      alt=""
                    />
                    <a href="">선물하기</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/plant2.png"
                      alt=""
                    />
                    <a href="/">채소</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/apple3.png"
                      alt=""
                    />
                    <a href="/">과일•견과•쌀</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/shrimp.png"
                      alt=""
                    />
                    <a href="/">수산•해산•건어물</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/meat.png"
                      alt=""
                    />
                    <a href="/">정육•계란</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/nabe.svg"
                      alt=""
                    />
                    <a href="/">국•반찬•메인요리</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/leaves.png"
                      alt=""
                    />
                    <a href="/">샐러드•간편식</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/sault.png"
                      alt=""
                    />
                    <a href="/">면•양념•오일</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/coffee.png"
                      alt=""
                    />
                    <a href="/">생수•음료•우유•커피</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/cookie.png"
                      alt=""
                    />
                    <a href="/">간식•과자•떡</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/bread.png"
                      alt=""
                    />
                    <a href="/">베이커리•치즈•델리</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/pill.png"
                      alt=""
                    />
                    <a href="/">건강식품</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/alchol.png"
                      alt=""
                    />
                    <a href="/">와인</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/Icon.png"
                      alt=""
                    />
                    <a href="/">전통주</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/senzai.png"
                      alt=""
                    />
                    <a href="/">생활용품•리빙•캠핑</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/makeup.png"
                      alt=""
                    />
                    <a href="/">스킨케어•메이크업</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/shampoo.png"
                      alt=""
                    />
                    <a href="/">헤어•바디•구강</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/fork.png"
                      alt=""
                    />
                    <a href="/">주방용품</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/drum.png"
                      alt=""
                    />
                    <a href="/">가전제품</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/dog.png"
                      alt=""
                    />
                    <a href="/">반려동물</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/baby.png"
                      alt=""
                    />
                    <a href="/">베이비•키즈•완구</a>
                  </li>
                  <li>
                    <img
                      width="24"
                      height="24"
                      src="/images/header/nav-icon/plane.png"
                      alt=""
                    />
                    <a href="/">여행•티켓</a>
                  </li>
                </ul>
              </div>
              <ul className="header-center">
                <li>
                  <a href="">신상품</a>
                </li>
                <li>
                  <a href="/src/pages/product/index.html">베스트</a>
                </li>
                <li>
                  <a href="">알뜰쇼핑</a>
                </li>
                <li>
                  <a href="">특가/혜택</a>
                </li>
              </ul>
            </div>
          </nav>
          <button className="package">
            <b>샛별･낮</b>
            배송안내
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
