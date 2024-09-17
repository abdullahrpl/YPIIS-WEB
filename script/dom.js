

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

imgContainer.addEventListener('scroll', () => {
    Image.forEach(image => {
        const rect = image.getBoundingClientRect();
        const containerRect = imgContainer.getBoundingClientRect();

        const isCentered = rect.left >= containerRect.left + containerRect.width / 4 &&
                           rect.right <= containerRect.right - containerRect.width / 4;

        if (isCentered) {
          // Image is centered: animate to full size and full opacity
          image.classList.add('scale-100', 'opacity-100');
          image.classList.remove('scale-90', 'opacity-80');
        } else {
          // Image is not centered: scale down and lower opacity
          image.classList.add('scale-90', 'opacity-80');
          image.classList.remove('scale-100', 'opacity-100');
        }
    })
})

// GET USER
const user = document.getElementById("btn-login")
const username = localStorage.getItem('username');

if (username) {
    user.href = '#'
    document.getElementById('btn-login').textContent = username;
}
// GET USER END

// RESPONSIVE NAVBAR
const navbarToggler = document.getElementById('burgerMenu');
const navbarLinks = document.querySelector('#navres');

// function resnav() {
//     navLinks.classList.add = ('shownav')
//     if 
// }
// RESPONSIVE NAVBAR END

const form = document.getElementById('submitForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const email = document.getElementById('email')
    const data = {
        email: email
    }

    fetch('https://docs.google.com/spreadsheets/d/1IG9YNpKELfYy-EEIrDu9PsthasjgY4z5PODC0S8BYlE/edit?usp=sharing', {
        method: 'POST',
        body : JSON.stringify(data)
    })

    .then(response => response.text())
    .then(data => {
        form.reset();
        alert("Berhasil");
    })
    .catch(error => {
        console.error('Error', error)
        alert("Gagal")
    })
})