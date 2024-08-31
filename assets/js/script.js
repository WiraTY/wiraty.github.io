document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        // Mengubah warna navbar saat scroll
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Mengatur active class pada navbar links saat scroll
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50; // Offset untuk penyesuaian
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const parentLi = link.parentElement;
            parentLi.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                parentLi.classList.add('active');
            }
        });
    });
});