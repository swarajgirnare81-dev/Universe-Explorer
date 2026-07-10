/* ==========================================
   UNIVERSE EXPLORER
   SCRIPT.JS
   PART 1
========================================== */

// Welcome Message

window.onload = function () {

    console.log("🌍 Welcome to Universe Explorer!");

};

// Explore Button

const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", function () {

        document.getElementById("earth").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// Search Box

const searchBox = document.querySelector(".hero input");

searchBox.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});

/* ==========================================
   UNIVERSE EXPLORER
   SCRIPT.JS
   PART 2
========================================== */

// Card Animation

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="translateY(0px) scale(1)";

    });

});

// Scroll to Top when Logo is Clicked

const title=document.querySelector(".hero h1");

if(title){

title.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// Console Message

console.log("Universe Explorer Loaded Successfully 🚀");

/* ==========================================
   UNIVERSE EXPLORER
   SCRIPT.JS
   PART 3
========================================== */

// Welcome Alert

setTimeout(function () {
    console.log("🌍 Welcome to Universe Explorer!");
}, 1000);

// Random Country Button

const randomCountryBtn = document.getElementById("randomCountryBtn");

if (randomCountryBtn) {

    const countries = [
        "India 🇮🇳",
        "Japan 🇯🇵",
        "Brazil 🇧🇷",
        "Canada 🇨🇦",
        "Australia 🇦🇺",
        "France 🇫🇷",
        "Germany 🇩🇪",
        "Egypt 🇪🇬"
    ];

    randomCountryBtn.addEventListener("click", function () {

        const random =
            countries[Math.floor(Math.random() * countries.length)];

        alert("🌍 Random Country:\n\n" + random);

    });

}

// Random Planet Button

const randomPlanetBtn = document.getElementById("randomPlanetBtn");

if (randomPlanetBtn) {

    const planets = [
        "Mercury ☿",
        "Venus ♀",
        "Earth 🌍",
        "Mars 🔴",
        "Jupiter 🪐",
        "Saturn 💍",
        "Uranus",
        "Neptune"
    ];

    randomPlanetBtn.addEventListener("click", function () {

        const random =
            planets[Math.floor(Math.random() * planets.length)];

        alert("🪐 Random Planet:\n\n" + random);

    });

}

console.log("🚀 Universe Explorer Script Loaded");
