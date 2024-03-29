var itemList = [];

var addBtn = document.querySelector("#add");    // add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click", addList);  // addBtn을 클릭하면 addList 함수 실행

function addList() {
    var item = document.querySelector("#item").value;    // 텍스트 필드 내용 가져옴
    if (item != null) {
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList() {
    var list = "<ul>";  // 목록을 시작하는 ul 태그
    for (var i = 0; i < itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; // 각 요소를 li 태그로 묶음
    }
    list += "</ul>";    // 목록을 끝내는 ul 태그

    document.querySelector("#itemList").innerHTML = list;   // list 변수값 표시

    var remove = document.querySelectorAll(".close");   // 삭제 버튼을 변수로 저장, 배열 형태

    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");   // this(누른 삭제 버튼)의 id 값 가져와 id 변수에 저장

    itemList.splice(id, 1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
    showList(); // 변경된 itemList 배열을 다시 화면에 표시
}