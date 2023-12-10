// This JSX:
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");

ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode);
//객체에 값이 들어갈 수있듯이 객체에 식이 들어갈 수있다.
//삼항연산자는 되지만 이프문은 안됨