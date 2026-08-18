const tombolwarna = document.getELementById("tombolwarns");
const pesan = document.getElementById("pesan");

const daftarwarna = ["#ffe5e5", "#e5f0ff", "#e5ffe9", "#fff6e5, "#f2e5ff"];
let index = 0;

tombolwarn.addEventListtener("click", function () {index = (index + 1) %daftarwarna.length;
document.body.style.backgroundColor = daftarWarna[index];
pesan.textContent = "Tombol sudah di klik " + (index + 1) + kali.";
});
                                                     
