/**
 * Object Lookup Table
 */
function getUserType(type) {
    if (type === "ADMIN") {
        return "관리자";
    }
    if (type === "INSTRUCTOR") {
        return "강사";
    }
    if (type === "STUDENT") {
        return "수강생";
    }

    return "해당 없음";
}
