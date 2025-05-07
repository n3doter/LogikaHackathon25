let openBtn = document.getElementById("openEncyclopedia");
let closeBtn = document.getElementById("closeModal");
let modal = document.getElementById("encyclopediaModal");

openBtn.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});


let openAboutBtn = document.getElementById("openAbout");
let closeAboutBtn = document.getElementById("closeAbout");
let aboutModal = document.getElementById("aboutModal");

openAboutBtn.addEventListener("click", function () {
    aboutModal.style.display = "flex";
});

closeAboutBtn.addEventListener("click", function () {
    aboutModal.style.display = "none";
});

window.addEventListener("DOMContentLoaded", () => {
    let introScreen = document.getElementById("introScreen");
    let mainMenu = document.querySelector(".fullscreen-intro");

    introScreen.addEventListener("click", () => {
        introScreen.classList.add("hidden");
        mainMenu.classList.remove("hidden");
    });
});
