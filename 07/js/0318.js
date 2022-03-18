// 1분 복습
var triple = [3, 6, 9];
for (var i = 0; i < triple.length; i++) {
    document.write(triple[i]);
}

// Array 객체의 함수
var nums = ["1", "2", "3"];
var chars = ["a", "b", "c", "d"];

document.write("<br><br> 변경 전 nums : " + nums);
document.write("<br> 변경 전 chars : " + chars);

// concat()은 두 배열을 연결하여 새로운 배열 반환
document.write("<br><br>" + nums.concat(chars));
// join()은 배열 요소를 원하는 구분자로 연결 (디폴트는 쉼표)
document.write("<br>" + nums.join("-"));
// push(), unshift()는 기존 함수에 요소 추가 (맨 앞이냐, 맨 뒤냐)
document.write("<br>" + nums.push("4", "5"));   // 추가 후 원소 개수 반환
document.write("<br>" + nums.unshift("0"));

// pop(), shift()는 기존 함수에서 요소 추출 (맨 앞이냐, 맨 뒤냐)
document.write("<br>" + chars.pop());   // 추출한 요소 반환
document.write("<br>" + chars.shift());
document.write("<br><br> 변경 후 nums : " + nums);
document.write("<br> 변경 후 chars : " + chars);

// 이 외에도 splice(), slice() 등이 있음
// splice() : 원하는 인덱스의 요소를 삭제하거나 추가 (추가시 두번째 인자는 0)
// slice() : 원하는 인덱스의 요소들을 추출 (추출시 기존 배열에 영향 X)