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


let modalLinks = document.querySelectorAll('#burgerMenu a.open-modal');
modalLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        let modalId = this.getAttribute('href').substring(1); 
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }

        
        let menu = document.getElementById("burgerMenu");
        menu.classList.remove("visible");
    });
});
