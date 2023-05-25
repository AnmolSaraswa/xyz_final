prediction_1 = "";
camera = document.getElementById("camera");
Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HqgnZQG1R/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("status").innerHTML = results[0].label;
        document.getElementById("update_emoji").innerHTML = results[0].confidence.toFixed(3);
    }
} 
