function loadImage() {
    var inputFile = document.getElementById("fileInput");
    var canvas = document.getElementById("canvas");
    var image = new SimpleImage(inputFile);
    image.drawTo(canvas);
}

function makeGrayscale() {
    alert("Grayscale");
}

function makeRed() {
    alert("Red");
}

function makeGreen() {
    alert("Green");
}

function makeBlue() {
    alert("Blue");
}

function reset() {
    alert("Reset");
}
