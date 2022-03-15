var num1 = parseInt(prompt("비교할 첫 번째 숫자:"));
var num2 = parseInt(prompt("비교할 두 번째 숫자:"));

bigAndSmall(num1, num2);

function bigAndSmall(a, b) {
    if (a > b || a < b) {
        alert(a + "(이)가 " + b + "보다 큽니다.");
    }
    else {
        alert("두 수가 같거나, 잘못된 입력입니다.");
    }
}