/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* Close mobile menu after clicking */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeToggle = document.getElementById("themeToggle");

let lightMode = false;

themeToggle.addEventListener("click", () => {

    lightMode = !lightMode;

    if (lightMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#f5f7fb"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#e9edf5"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#101322"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#5d6475"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#080b16"
        );

        document.documentElement.style.setProperty(
            "--bg-secondary",
            "#0d1120"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#111627"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f5f7ff"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#9da5bd"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});


/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ===============================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        `Thank you ${name}! Your message has been received.`
    );

    contactForm.reset();

});


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .stat-card, .certificate-card, .timeline-item"
    );

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});