var score = 0;


$(document).ready(function() {
    $("#wrong-button").click(randomSelector());
    $("#correct-button").click(increment);
    $("#correct-button").click(randomSelector());
});

function increment() {
    score += 1;
    $("#score")[0].innerHTML = score;
  
};