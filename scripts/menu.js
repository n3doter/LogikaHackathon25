document.getElementById("burgerIcon").addEventListener("click", function() {
    let menu = document.getElementById("burgerMenu");
    if (menu.classList.contains("visible")) {
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
    }
});


let menuLinks = document.querySelectorAll('#burgerMenu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        let menu = document.getElementById("burgerMenu");
        menu.classList.remove("visible");
    });
});
