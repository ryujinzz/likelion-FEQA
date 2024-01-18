// createElement 함수
// DOM 노드 : HTMLElement 반환
export function createElement(type, props = {}, ...children) {
  // type - DOM 요소 노드 생성
  const element = document.createElement(type);

  // props 객체 { key1, value1, key2, value2, ... }
  // props 객체를 배열로 변경해서 순환한 다음
  const keyValues = Object.entries(props);
  // 각 속성(key)과 속성 값(value)을 element에 설정 (x 반복)
  // 문(statement)
  // for (const [key, value] of keyValues) {
  //     element.setAttribute(key, value);
  // }
  // for (const [key, value] of keyValues) element.setAttribute(key, value);
  // 식(expression)
  keyValues.forEach(([key, value]) => element.setAttribute(key, value));

  // 생성한 DOM 요소 노드 반환
  return element;
}

// createRoot 함수
// 객체 : { render, unmount }
export function createRoot(domNode /* container */) {}

// EUID 객체의 멤버로 내보내기
const EUID = Object.freeze({
  createElement,
  createRoot,
});

// 모듈 기본 내보내기
export default EUID;
