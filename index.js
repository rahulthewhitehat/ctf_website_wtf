document.addEventListener("DOMContentLoaded", () => {
    
    // --- Preloader Logic (Upgraded!) ---
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    function hidePreloader() {
        if (preloader) {
            preloader.classList.add("fade-out");
        }
        if (mainContent) {
            mainContent.style.opacity = "1";
        }
    }

    // Hide the preloader after a minimum time (e.g., 2 seconds) to show off your animation
    const minLoaderTime = 2000;
    const pageLoadStartTime = Date.now();

    // This is our safety net! It will hide the loader after 5 seconds, no matter what.
    const safetyTimeout = setTimeout(() => {
        const elapsedTime = Date.now() - pageLoadStartTime;
        console.warn("Safety timeout triggered. Forcing preloader to hide.");
        hidePreloader();
    }, 5000); // 5-second max wait

    window.addEventListener("load", () => {
        const elapsedTime = Date.now() - pageLoadStartTime;
        const remainingTime = Math.max(0, minLoaderTime - elapsedTime);

        setTimeout(() => {
            clearTimeout(safetyTimeout); // The page loaded fine, so we cancel the safety net.
            hidePreloader();
        }, remainingTime);
    });

    // --- Custom Countdown Timer ---
    // (Your existing countdown code is great, no changes needed here!)
    const eventDate = new Date("2025-10-18T09:00:00").getTime();
    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        if (daysEl) { // Add checks to prevent errors if elements aren't found
            daysEl.innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
        }

        if (distance < 0) {
            clearInterval(countdownFunction);
            const countdownEl = document.getElementById("countdown");
            if (countdownEl) {
                countdownEl.innerHTML = "<div style='font-size: 2rem; color: #fc030d;'>The Event Is Live!</div>";
            }
        }
    }, 1000);

    // --- Scroll Reveal Animation Logic ---
    // (Your existing observer code is perfect!)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});