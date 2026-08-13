const reviewBtn = document.getElementById("reviewBtn");

const googleReviewUrl =
    "https://search.google.com/local/writereview?placeid=ChIJr8zq4YqfhkcRj8h0m9t1u9E";

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
