function createHeart() {
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    var heart = document.createElement("div");
    var disc1 = document.createElement("div");
    var disc2 = document.createElement("div");
    var square = document.createElement("div");
    heart.classList.add("heart");
    disc1.classList.add("disc1");
    disc2.classList.add("disc2");
    square.classList.add("square");

    disc1.style.background = "rgb(255," + g + "," + b + ")"
    disc2.style.background = "rgb(255," + g + "," + b + ")"
    square.style.background = "rgb(255," + g + "," + b + ")"
    heart.appendChild(disc1)
    heart.appendChild(disc2)
    heart.appendChild(square)
    return heart;
}
let count = 0
window.onmousemove = function (ev) {
    count++
    if (count % 5 == 0) {
        let heart = createHeart()
        var ev = ev || window.event;
        var oScrollleft = document.documentElement.scrollleft || document.body.scrollLeft;
        var oScrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        var oLeft = ev.clientX + oScrollleft - 5 + "px";
        var oTop = ev.clientY + oScrolltop - 5 + "px";
        heart.style.top = oTop;
        heart.style.left = oLeft;
        heart.style.zIndex = "-1"
        document.body.appendChild(heart)
        heart.style.animation = "moveheart 1s"
        setTimeout(() => {
            heart.parentNode.removeChild(heart)
        }, 1000);
    }

}