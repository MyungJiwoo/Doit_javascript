function who(name, id, age, address) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.address = address;
};

var member1 = new who("명지우", 123, 22, "서울");
console.log(member1);

document.write("<h2>" + member1.name + "</h2>");
document.write("<ul><li> id : " + member1.id + "</li> ");
document.write("<li>나이 : " + member1.age + "</li>");
document.write("<li>주소 : " + member1.address + "</li></ul > ");

// 모범답안 => 객체 리터럴 표기법으로 member1 객체를 선언
// var member1 = {
//     id:123,
//     name: "홍길동",
//     age:25,
//     address : "서울"
// };