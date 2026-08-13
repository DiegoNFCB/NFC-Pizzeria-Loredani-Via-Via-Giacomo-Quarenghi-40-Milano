const reviewBtn = document.getElementById("reviewBtn");

// IL LINK NON E' CORRETTO ASPETTO QUELLO DEL NEGOZIO 
const googleReviewUrl = "https://g.page/r/ChIJH9zq4YqfhkcRj8h0m9t1u9E/review";


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
