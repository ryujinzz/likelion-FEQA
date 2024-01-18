/*---------------------------------------------*/
/*             "createElement 함수"             */
/*---------------------------------------------*/
export function createElement(type, props = {}, ...children) {
  const element = document.createElement(type);

  // case 1 = for in 문을 사용한 props 처리
  // for (const key in props) {
  //   if (Object.hasOwnProperty.call(props, key)) {
  //     const value = props[key];
  //     element.setAttribute(key, value);
  //   }
  // }

  // case 2 = for of 문을 사용한 props 처리
  // const keyValues = Object.entries(props);
  // for (const [key, value] of keyValues) {
  //   element.setAttribute(key, value);
  // }

  //  case 3 = forEach 식을 사용한 props 처리
  const keyValues = Object.entries(props);
  keyValues.forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  element.append(...children);

  return element;
  // console.log(element);
}

/*------------------------------------------*/
/*             "createRoot 함수"             */
/*------------------------------------------*/

export function createRoot(domNode) {
  // Dom에 렌더링하는 함수 = render
  const render = (element) => {
    domNode.append(element);
  };

  // Dom에 렌더링 된 루트 요소를 제거 = unmount
  const unmount = () => {
    domNode.firstElementChild.remove();
  };

  return { render, unmount };
}
