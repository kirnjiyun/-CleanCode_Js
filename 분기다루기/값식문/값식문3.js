function ReactComponent() {
    return (
        <section>
            <h1>Color</h1>
            <h3>Name</h3>
            <p>{this.state.color || "white"}</p>
            {/* 논리연산자 사용 좌측이 false이면 white 사용 */}
            <h3>Hex</h3>
            <p>
                {(() => {
                    switch (this.state.color) {
                        case "red":
                            return "#FF0000";
                        case "green":
                            return "#00FF00";
                        case "blue":
                            return "#0000FF";
                        default:
                            return "#FFFFFF";
                    }
                })()}
            </p>
        </section>
    );
}
//즉시실행함수 사용해서 값을 리턴해서 내부에서 switch 문을 넣을 수 있는거다.
