// 🌍 Universe Explorer Advanced JavaScript


// Dark Mode

const darkModeBtn = document.getElementById("darkModeBtn");

if(darkModeBtn){

darkModeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}




// Explore Button

const exploreBtn = document.getElementById("exploreBtn");

if(exploreBtn){

exploreBtn.addEventListener("click",()=>{

window.location.href="earth.html";

});

}




// Voice Search

const voiceBtn = document.getElementById("voiceBtn");


if(voiceBtn && "webkitSpeechRecognition" in window){


voiceBtn.addEventListener("click",()=>{


let recognition = new webkitSpeechRecognition();


recognition.lang="en-US";


recognition.start();



recognition.onresult=function(event){


let text = event.results[0][0].transcript;


document.getElementById("searchBox").value=text;


};



});


}




// Random Planet

const randomPlanetBtn =
document.getElementById("randomPlanetBtn");


if(randomPlanetBtn){


randomPlanetBtn.addEventListener("click",()=>{


let planets=[

"Mercury",

"Venus",

"Earth",

"Mars",

"Jupiter",

"Saturn",

"Uranus",

"Neptune"

];


let random =
planets[Math.floor(Math.random()*planets.length)];


alert("🪐 Your Random Planet: "+random);


});


}




// Random Country

const randomCountryBtn =
document.getElementById("randomCountryBtn");


if(randomCountryBtn){


randomCountryBtn.addEventListener("click",()=>{


let countries=[

"India 🇮🇳",

"Japan 🇯🇵",

"USA 🇺🇸",

"Brazil 🇧🇷",

"France 🇫🇷",

"Australia 🇦🇺"

];


let random =
countries[Math.floor(Math.random()*countries.length)];


alert("🌍 Random Country: "+random);


});


}




// Search System

const searchBox =
document.getElementById("searchBox");


if(searchBox){


searchBox.addEventListener("keyup",()=>{


let value =
searchBox.value.toLowerCase();



let cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


let text =
card.innerText.toLowerCase();



if(text.includes(value)){


card.style.display="block";


}

else{


card.style.display="none";


}



});


});


}




// Quiz Button

const quizBtn =
document.getElementById("quizBtn");


if(quizBtn){


quizBtn.addEventListener("click",()=>{


let answer =
prompt("🌍 Which planet is known as the Red Planet?");



if(answer && answer.toLowerCase()=="mars"){


alert("✅ Correct! Mars is the Red Planet.");


}

else{


alert("❌ Try again! The answer is Mars.");


}



});


}



// Welcome Message

console.log(
"🌍 Universe Explorer Loaded Successfully 🚀"
);
