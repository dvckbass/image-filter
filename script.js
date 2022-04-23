var originalImage = null,
    grayscaleImage = null,
    redImage = null,
    greenImage = null,
    blueImage = null;
var canvas = document.getElementById("canvas");

/**
 * Load image from a file and display it to canvas
 */
function loadImage() {
    var inputFile = document.getElementById("fileInput");

    originalImage = new SimpleImage(inputFile);
    originalImage.drawTo(canvas);
}

/**
 * Apply and draw grayscale filter to the canvas
 */
function makeGrayscale() {
    grayscaleImage = originalImage;
    if (isImageLoaded()) {
        filterGrayscale();
        grayscaleImage.drawTo(canvas);
    }
}

/**
 * Apply grayscale filter to the image
 */
function filterGrayscale() {
    for (var pixel of originalImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);

        grayscaleImage.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}

/**
 * Apply and draw red filter to the canvas
 */
function makeRed() {
    redImage = originalImage;
    if (isImageLoaded()) {
        filterRed();
        redImage.drawTo(canvas);
    }
}

/**
 * Apply red filter to the image
 */
function filterRed() {
    for (var pixel of originalImage.values()) {
        pixel.setRed(255);

        redImage.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}

/**
 * Apply and draw green filter to the canvas
 */
function makeGreen() {
    greenImage = originalImage;
    if (isImageLoaded()) {
        filterGreen();
        greenImage.drawTo(canvas);
    }
}

/**
 * Apply filter green to the image
 */
function filterGreen() {
    for (var pixel of originalImage.values()) {
        pixel.setGreen(255);
        greenImage.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}

/**
 * Apply and draw blue filter to the canvas
 */
function makeBlue() {
    blueImage = originalImage;
    if (isImageLoaded()) {
        filterBlue();
        blueImage.drawTo(canvas);
    }
}

/**
 * Apply blue filter to the image
 */
function filterBlue() {
    for (var pixel of originalImage.values()) {
        pixel.setBlue(255);
        blueImage.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}
/**
 * Reset filter applied to the image
 */
function reset() {
    alert("Reset");
}

/**
 * Check if the original image is loaded to canvas
 * @returns true if the image is loaded, otherwise false
 */
function isImageLoaded() {
    if (originalImage == null) {
        return false;
    } else {
        return true;
    }
}
