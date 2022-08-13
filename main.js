var x = 0;
var y = 0; var content;
var SP = window.webkitSpeechRecognition;
var recognition = new window.webkitSpeechRecognition;
function getcommand() {
    document.getElementById("status").innerHTML = 'System is listening please speak';
    recognition.start();
}
recognition.onresult = function(event)
{
 console.log(event); 

content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
if (isNaN(content)) {
    saytext("That is not a number");
}else {
    saytext("Drawing " + content + "balls.");
for (i = 0; i<content; i++) {
x = random(900);
y = random(600);
fill("yellow");
stroke("black");
circle(x,y,50);
}
}
    }
function setup() {
    canvas = createCanvas(900,600);
    background(255);
}
function draw() {
    
}
function saytext(text) {
    const sound = new SpeechSynthesisUtterance(text);
    sound.rate = 1;
    speechSynthesis.speak(sound);
}