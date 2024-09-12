const nav = document.querySelector("header");
window.addEventListener("scroll", function () {
  this.scrollY > 20
    ? nav.classList.add("activenav")
    : nav.classList.remove("activenav");
});


const navLinks = document.querySelectorAll('#navlinks');

    // Menambahkan event listener untuk setiap link navbar
navLinks.forEach(link => {
link.addEventListener('click', function() {
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});