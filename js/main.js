// =====================================
// OOB MUN - MAIN JAVASCRIPT
// =====================================

// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {

// -----------------------------
// Intro Video
// -----------------------------

const video = document.getElementById("intro-video");
const scroll = document.querySelector(".scroll");

if (scroll) {
scroll.style.opacity = "0";
scroll.style.transition = "opacity 1s ease";
}

if (video) {

// Make sure it never loops
video.loop = false;

// When the intro ends, show "Scroll to Begin"
video.addEventListener("ended", () => {

if (scroll) {
scroll.style.opacity = "1";
}

});

}

// -----------------------------
// Navbar Background
// -----------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(!navbar) return;

if(window.scrollY > 50){

navbar.style.background = "rgba(43,16,71,0.95)";
navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

}else{

navbar.style.background = "rgba(43,16,71,.75)";
navbar.style.boxShadow = "none";

}

});

// -----------------------------
// Fade-in Animations
// -----------------------------

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold:0.2

});

document.querySelectorAll("section").forEach(section => {

section.classList.add("hidden");

observer.observe(section);

});

// -----------------------------
// Countdown Timer
// -----------------------------

const timer = document.getElementById("timer");

// CHANGE THIS LATER
const eventDate = new Date("November 15, 2026 07:30:00").getTime();

function updateTimer(){

const now = new Date().getTime();

const distance = eventDate - now;

if(distance < 0){

timer.innerHTML = "Conference Has Begun";

return;

}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);

const mins = Math.floor(
(distance % (1000 * 60 * 60)) /
(1000 * 60)
);

const secs = Math.floor(
(distance % (1000 * 60)) /
1000
);

timer.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;

}

if(timer){

updateTimer();

setInterval(updateTimer,1000);

}

});
