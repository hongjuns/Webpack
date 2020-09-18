const logInput = input => `입력받은 값은 : ${input}`;
const logResult = (figure, result) => `${figure} 의 넓이는 : ${result} 입니다.`;
const logError = `지원되지 않는 도형입니다. \n 커멘드 라인을 종료합니다.`;

module.exports = {
    logInput,
    logResult,
    logError
}