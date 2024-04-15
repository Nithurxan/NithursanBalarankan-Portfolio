// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('navbar').querySelector('ul');

navToggle.addEventListener('click', () => {
    navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});
