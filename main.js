img = "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "STATUS: DETECTING OBJECTS";
}

function preload() {
   img = loadImage("dog_cat.jpg");
}

function modelLoaded() {
    console.log("The Model has Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("DOG", 45, 75);
    nofill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);

    fill("#ff0000");
    text("CAT", 320, 120);
    nofill();
    stroke("#ff0000");
    rect(300, 90, 270, 320);
}




