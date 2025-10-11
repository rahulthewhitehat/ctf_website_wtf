document.addEventListener("DOMContentLoaded", () => {
    
    // --- Preloader Logic ---
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
    
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.classList.add("fade-out");
            mainContent.style.opacity = "1";
        }, 2000); // Show loader for 2 seconds
    });

    // --- Custom Countdown Timer ---
    const eventDate = new Date("2025-10-18T09:00:00").getTime();

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "<div style='font-size: 2rem; color: #fc030d;'>The Event Is Live!</div>";
        }
    }, 1000);

    // --- Scroll Reveal Animation Logic ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});