const reviewBtn = document.getElementById("reviewBtn");

const googleReviewUrl = "https://g.page/r/ChIJr8zq4YqfhkcRj8h0m9t1u9E/review";


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
