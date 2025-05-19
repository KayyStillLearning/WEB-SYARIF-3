document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk tautan navigasi
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight || 60),
                    behavior: 'smooth'
                });

                const navLinksContainer = document.querySelector('.nav-links');
                const navToggle = document.querySelector('.nav-toggle');
                if (navLinksContainer && navToggle && window.getComputedStyle(navToggle).display !== 'none') {
                    navLinksContainer.style.display = 'none';
                }
            }
        });
    });

    // Efek fade-in untuk elemen saat di-scroll
    const elementsToFade = document.querySelectorAll('.about, .about-row, .projects-title, .projects-grid, .contact-title, .contact-row, #info .container > h2, #info .container > .contact-row, footer');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToFade.forEach(element => {
        element.classList.add('fade-out');
        observer.observe(element);
    });
});