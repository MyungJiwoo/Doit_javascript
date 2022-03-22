var bigPic = document.querySelector("#cup");    // 큰 이미지를 가져옴
var smallPics = document.querySelectorAll(".small");    // 작은 이미지를 가져옴 (노드 리스트)

for (var i = 0; i < smallPics.length; i++) {  // 노드 리스트의 각 요소에 접근
    smallPics[i].onclick = showBig; // 요소를 누르면 showBig함수 실행

    // // 이렇게 코드 요약할 수도 있음
    // smallPics[i].onclick = function (event) {
    //     bigPic.src = this.src;
    // };
}

function showBig() {
    var newPic = this.src;  // click 이벤트가 발생한 대상의 src 속성 값을 가져옴
    bigPic.setAttribute("src", newPic); // newPic 값을 큰 이미지의 src 속성에 할당
}