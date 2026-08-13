const reviewBtn = document.getElementById("reviewBtn");

// URL ufficiale per lasciare una recensione Google
const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJr8zq4YqfhkcRj8h0m9t1u9E";

// Evento click sul pulsante
reviewBtn.addEventListener("click", function () {

    if ("vibrate" in navigator) {
        navigator.vibrate(50);
    }

    reviewBtn.classList.add("loading");
    reviewBtn.innerHTML = "⏳ Apertura di Google...";

    setTimeout(function () {
        window.location.href = googleReviewUrl;
    }, 700);
});
