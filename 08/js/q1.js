var hText = document.querySelector("h1");
var myText = document.querySelector("#myText")
hText.addEventListener("click", function () {
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "yellow";
});

var re = document.querySelector("h2");
re.addEventListener("click", function () {
    myText.style.fontSize = "";
    myText.style.color = "";
    myText.style.backgroundColor = "";
});