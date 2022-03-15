var num1 = parseInt(prompt("첫 번째 수를 입력하세요"));
var num2 = parseInt(prompt("두 번째 수를 입력하세요"));

var result = sumMulti(num1, num2);

function sumMulti(a, b) {
    if (a == b) {
        return a * b;
    }
    else {
        return a + b;
    }
}

console.log(result);

// 정답
// 사용자에게 입력받는 게 아니라 파일 내에서 하는 거였음...!
// function sumMulti(x, y) {
//     if (x == y) return x * y;
//     else return x + y;
// }

// console.log(sumMulti(5, 10));
// console.log(sumMulti(10, 10));