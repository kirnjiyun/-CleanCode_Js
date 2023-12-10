function ReactComponent() {
    return (
        <div>
            {(() => {
                if (conditionOne) return <span>One</span>;
                if (conditionTwo) return <span>Two</span>;
                else conditionOne;
                return <span>Three</span>;
            })()}
            {consitionOne && <span>One</span>}
            {consitionTwo && <span>Two</span>}
            {!consitionTwo && <span>Three</span>}
        </div>
    );
}
// 함수가 인자를 받을때 값 또는 식이 되어야함
