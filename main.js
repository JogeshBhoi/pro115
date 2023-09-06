function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Yhl-whYL6/', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}