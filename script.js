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
