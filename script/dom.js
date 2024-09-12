// THIS IS PAGE 1

const btnemail = document.getElementById('btnemail');
function email() {
    if (btnemail === "") {
        alert("Selamat anda sudah bergabung!")
    }else{
        btnemail.disabled = true
    }
}

const slide_foto = document.querySelector("slide-foto");
console.log(slide_foto)
const images = Array.from(slide_foto.children);
const slide_kanan = document.getElementById('slide_kanan');
const slide_kiri = document.getElementById('slide_kiri');
let currentIndex = 0

function slide() {
    const slideWidth = images[0].getBoundingClientRect().width
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`

    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentIndex === images.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

slide_kanan.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++
        slide()
    }
})

slide_kiri.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--
        slide()
    }
})

slide()