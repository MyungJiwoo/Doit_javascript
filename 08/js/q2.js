var checking = document.querySelectorAll(".check");

for (var i = 0; i < checking.length; i++) {
    checking[i].addEventListener("click", function () {
        this.parentNode.style.color = "#ccc";
    });
}