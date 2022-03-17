var now = new Date();   // 오늘 날짜 정보
var firstDay = new Date("2022-01-07");  // 처음 만난 날의 Date 객체

// 시간 계산을 위해 Date 객체를 밀리초로 바꾸고 만난 시간 계산
// ** 시간 계산은 밀리초로 계산 = getTime() 함수 사용
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

// 밀리초를 다시 날짜로 계산 (1000*60*60*24로 나눈다)
// 결과가 실수일 수도 있기 때문에 round()함수로 반올림
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "일";


// 날짜 계산 함수 선언
function calcDate(days) {
    // n일 후 계산
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);

    var year = someday.getFullYear();
    var month = someday.getMonth() + 1; // 0부터 시작해서 +1
    var date = someday.getDate();

    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);