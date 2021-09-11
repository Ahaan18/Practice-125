z = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function something(){
recognition.start();
}
recognition.onresult = function(result){
    console.log(result);
    document.getElementById("speech_output").innerHTML = result.results[0][0].transcript;
    document.getElementById("confidence").innerHTML = result.results[0][0].confidence.toFixed(3);
    speak();
    z = result.results[0][0].transcript;
}
function speak(){
    var synth = window.speechSynthesis;
    var y = document.getElementById("speech_output").innerHTML;
    var a = new SpeechSynthesisUtterance(y);
    synth.speak(a);
}