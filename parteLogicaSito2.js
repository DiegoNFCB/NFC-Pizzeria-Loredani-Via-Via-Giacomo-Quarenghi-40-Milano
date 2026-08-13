const reviewBtn = document.getElementById("reviewBtn");

// IL LINK NON E' CORRETTO ASPETTO QUELLO DEL NEGOZIO 
const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJyQ3sNjXAhkcRFK3_BbuL95Q&utm_source=chatgpt.com";


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
