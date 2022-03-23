var isOpen = false;	// detail 내용이 보이는 상태인지?

// 사진 변경
var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");
for (i = 0; i < smallPics.length; i++) {
	smallPics[i].addEventListener("click", function () {
		newPic = this.src;
		bigPic.setAttribute("src", newPic);
	});
}

var view = document.querySelector("#view");	// view 요소를 가져옴
view.addEventListener("click", function () {	// view를 눌렀을 때 실행할 함수
	if (isOpen == false) {
		document.querySelector("#detail").style.display = "block";	// 상세 정보를 화면에 표시
		view.innerText = "상세 설명 닫기";	// 링크 내용 수정
		isOpen = true;	// 표시 상태로 지정
	}
	else {
		document.querySelector("#detail").style.display = "none"; 	// 상세 정보를 화면에서 감춤
		view.innerText = "상세 설명 보기"; 	// 링크 내용 수정
		isOpen = false;	// 감춰진 상태로 지정
	}
});

// 아래는 제이쿼리 애니메이션 : slideToggle()
// 보이지 않을 땐 보이게 하고, 보일 때는 보이지 않게 함 / 열고 닫을 때에는 양방향으로 애니메이션 효과를 줌
// $(선택요소).slideToggle(속도값 ms) : 기본값 400ms => 속도 조절 가능
$(document).ready(function () {
	$("#view2").click(function () {
		$("#detail2").slideToggle(1000)
	})
})