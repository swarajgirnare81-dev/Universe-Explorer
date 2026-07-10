let score = 0;


function checkAnswer(answer){


if(answer=="correct"){

score++;

alert("✅ Correct!");

}

else{

alert("❌ Wrong!");

}


document.getElementById("score").innerHTML =
"Score: " + score;


}
