// 생성자 함수를 이용해서 변수 r에 있는 반지름 값을 매개변수로 하는 Circle 객체
var r = prompt("원의 반지름은? (cm)");
var circle1 = new Circle(r);
document.write("반지름이 " + r + "cm일 때 " + "<br>원의 둘레 : 약 " + circle1.circumference() + "cm <br>원의 넓이 : 약 " + circle1.area() + "cm<sup>2</sup>");

// Circle 객체 안에 원의 둘레와 원의 넓이 계산하는 함수
function Circle(radius) {
    this.radius = radius;
    this.circumference = function () {
        return Math.floor(this.radius * 2 * Math.PI);
    }
    this.area = function () {
        return Math.floor(Math.pow(this.radius, 2) * Math.PI);
    }
}