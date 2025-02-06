// ==================
// CODE JAVASCRIPT DU COUNTDOWN
// ==================

document.addEventListener("DOMContentLoaded", function () {
    const countdownDate = new Date('2027-07-14T14:14:14').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        if (timeLeft < 0) {
            clearInterval(interval);
            document.querySelectorAll(".countdown").forEach((el) => (el.textContent = "00"));
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.querySelectorAll(".countdown")[0].textContent = days.toString().padStart(2, "0");
        document.querySelectorAll(".countdown")[1].textContent = hours.toString().padStart(2, "0");
        document.querySelectorAll(".countdown")[2].textContent = minutes.toString().padStart(2, "0");
        document.querySelectorAll(".countdown")[3].textContent = seconds.toString().padStart(2, "0");
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});
