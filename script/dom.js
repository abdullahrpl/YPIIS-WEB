// THIS IS PAGE 1

const btnemail = document.getElementById('btnemail');
function email() {
    if (btnemail === "") {
        alert("Selamat anda sudah bergabung!")
    }else{
        btnemail.disabled = true
    }
}