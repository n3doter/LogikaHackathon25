//Dlya zminu backgroundu
function changeBackground(location) {
    const body = document.body;

    
    if (location === "castle") {
        body.style.backgroundImage = "url('https://raw.githubusercontent.com/n3doter/LogikaHackathon25/main/images/castle.png')";
    } else if (location === "cave") {
        body.style.backgroundImage = "url('https://raw.githubusercontent.com/n3doter/LogikaHackathon25/main/images/cave.png')";
    }
    

    
    body.style.backgroundSize = "cover"; 
    body.style.backgroundPosition = "center"; 
    body.style.transition = "background-image 1s ease-in-out"; 
}


document.getElementById("castleBtn").addEventListener("click", function() {
    changeBackground("castle");
});

document.getElementById("caveBtn").addEventListener("click", function() {
    changeBackground("cave");
});
