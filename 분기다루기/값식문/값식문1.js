// This JSX:
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

//render() 괄호가 호출한다는걸의미한다.
//함수의 인자로 두개를 넘김 jsx랑 mountNode
// ()=>함수와 관련된
// {}=>
// []=>

// Is transformed to this JS:
//JSX가 바벨을 만나면 transfiling된다.
ReactDOM.render(
  React.createElement("div", { id: "msg" }, "Hello World!"),
  mountNode
);
