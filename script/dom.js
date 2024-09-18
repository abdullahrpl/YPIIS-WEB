

const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  this.scrollY > 50
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

const imgContainer = document.getElementById("slidefoto")
const img = document.querySelector('#image')


// GET USER
const user = document.getElementById("btn-login")
const username = localStorage.getItem('username');

if (username) {
    user.href = '#'
    document.getElementById('btn-login').textContent = username;
}
// GET USER END

// DAFTAR
const scriptURL = 'https://script.google.com/macros/s/AKfycbwNQV8OjOKVDGWKmwb_4SRNt7VIIjOadmr0w7-VLecU_eQjBFqpVa4GKcQFvBcCdiE/exec';
            
const form = document.getElementById('submitForm');

form.addEventListener('submit', e => {
  e.preventDefault(); // Mencegah form dikirim dengan cara biasa

  const email = document.getElementById('email').value;

  // Kirim data ke Google Sheets
  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'email': email }),
  })
  .then(response => {
    alert('Selamat Anda Sudah Bergabung!');
    form.reset();
  })
  .catch(error => console.error('Error!', error.message));
});
