// Selettore del pulsante
const reviewBtn = document.getElementById("reviewBtn");

// URL ufficiale per lasciare una recensione Google
const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJr8zq4YqfhkcRj8h0m9t1u9E";

// Evento click sul pulsante
reviewBtn.addEventListener("click", function () {

    // Vibrazione (solo su dispositivi che la supportano)
    if ("vibrate" in navigator) {
        navigator.vibrate(50);
    }

    // Stato "loading"
    reviewBtn.classList.add("loading");
    reviewBtn.innerHTML = "⏳ Apertura di Google...";

    // Ritardo di 700ms prima del redirect
    setTimeout(function () {
        window.location.href = googleReviewUrl;
    }, 700);
});
