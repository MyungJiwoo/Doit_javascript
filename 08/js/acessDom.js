document.getElementById("heading").onclick = function () {
    this.style.fontSize = "5em";
}

document.getElementsByClassName("accent")[0].style.textDecoration = "underline";

document.getElementsByTagName("h2")[0].style.backgroundColor = "#eee";

document.querySelectorAll(".accent")[1].style.backgroundColor = "yellow";

document.querySelector("#prod-img > img").setAttribute("src", "images/coffee-blue.jpg");