const reviewBtn = document.getElementById("reviewBtn");

// IL LINK NON E' CORRETTO ASPETTO QUELLO DEL NEGOZIO 
const googleReviewUrl = "https://www.google.com/search?hl=it-IT&gl=it&q=Ristorante+Pizzeria+Bar+Al+Bistro%27,+Via+delle+Ande,+16,+20151+Milano+MI&ludocid=10599930318169197119&lsig=AB86z5VbZ6CPQyMhgPZ2NLFhsaPO&utm_source=chatgpt.com#lrd=0x4786c1e712ed05db:0x931a8476aa5e4a3f,3";


reviewBtn.addEventListener("click", function () {

    if ("vibrate" in navigator) {
        navigator.vibrate(50);
    }

    reviewBtn.classList.add("loading");
    reviewBtn.innerHTML = "⏳ Apertura di Google...";

    setTimeout(function () {
        window.location.assign(googleReviewUrl);
    }, 700);
});
