var checking = document.querySelectorAll(".check");
var onoff = [];
for (var i = 0; i < checking.length; i++) {
    onoff[i] = true;
}

for (var i = 0; i < checking.length; i++) {
    checking[i].addEventListener("click", function () {
        if (onoff[i]) {
            this.parentNode.style.color = "#ccc";
            onoff[i] = false;
        }
        else {
            this.parentNode.style.color = "";
            onoff[i] = true;
        }
    });
}