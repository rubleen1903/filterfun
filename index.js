var originalImage = null;
var grayImage = null;
var redImage = null;
var blueImage = null;
var funimage = null;
var canvas = document.getElementById("theCanvas");

function loadImage() {
    var file = document.getElementById("fileInput");
    originalImage = new SimpleImage(file);
    grayImage = new SimpleImage(file);
    redImage = new SimpleImage(file);
    blueImage = new SimpleImage(file);
    funimage = new SimpleImage(file);
    originalImage.drawTo(canvas);
}

function doGray() {
    if (imageIsLoaded(grayImage)) {
        filterGray();
        grayImage.drawTo(canvas);
    }
}

function filterGray() {
    for (var pixel of grayImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
}

function doRed() {
    if (imageIsLoaded(redImage)) {
        filterRed();
        redImage.drawTo(canvas);
    }
}

function filterRed() {
    for (var pixel of redImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
            pixel.setRed(2 * avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(2 * avg - 255);
        }
    }
}

function reset() {
    if (imageIsLoaded(originalImage)) {
        originalImage.drawTo(canvas);
        grayImage = new SimpleImage(originalImage);
        redImage = new SimpleImage(originalImage);
    }
}

function imageIsLoaded(img) {
    if (img == null || !img.complete()) {
        alert("Image not loaded");
        return false;
    } else {
        return true;
    }
}

function doBlue() {
    if (imageIsLoaded(blueImage)) {
        filterBlue();
        blueImage.drawTo(canvas);
    }

}

function filterBlue() {
    for (var pixel of blueImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2 * avg);
        } else {
            pixel.setRed(2 * avg - 255);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(255);
        }
    }
}

function dofun() {
    if (imageIsLoaded(funimage)) {
        dofunimg();
        blueimage.drawTo(canvas);
    }
}

function dofunimg() {
    for (var pixel of funimg.values()) {

    }
}