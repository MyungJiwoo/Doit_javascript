var check = document.querySelector("#shippingInfo");   // 체크 상자의 id는 shippingInfo
check.addEventListener("click", function () {
    if (check.checked == true) {
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;   // 주문 정보(이름)을 배송 정보(이름)에 복사
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;   // 주문 정보(전화번호)를 배송 정보(전화번호)에 복사
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;   // 주문 정보(주소)를 배송 정보(주소)에 복사
    }
    else {   // 체크가 해제되면 배송 정보 필드 초기화
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
})