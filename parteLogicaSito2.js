const reviewBtn = document.getElementById("reviewBtn");

// URL ufficiale per lasciare una recensione Google
const googleReviewUrl = "https://www.google.com/search?q=Pizzeria+Loredani+Milano&ludocid=17640293387154055838&lsig=AB86z5WlQ0uVnX8ZkzQxJQ";

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
