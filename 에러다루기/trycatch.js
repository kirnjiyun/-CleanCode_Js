try {
    // 이 부분에는 실행하려는 코드를 작성합니다.
    let x = a; // a가 정의되지 않았으므로, 이 줄은 오류를 던집니다.
} catch (error) {
    // try 블록에서 오류가 발생하면, 그 오류는 catch 블록으로 전달됩니다.
    console.log("catch 블록이 실행되었습니다.");
    console.log("오류: ", error);
} finally {
    // finally 블록은 오류 발생 여부와 관계없이 항상 실행됩니다.
    console.log("finally 블록이 실행되었습니다.");
}
