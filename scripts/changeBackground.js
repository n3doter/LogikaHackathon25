//Dlya zminu backgroundu
function changeBackground(location) {
    const body = document.body;

    //posullanya na fonts
    if (location === "castle") {
        body.style.backgroundImage = "url('https://raw.githubusercontent.com/n3doter/LogikaHackathon25/main/images/castle.png')";
    } else if (location === "cave") {
        body.style.backgroundImage = "url('https://raw.githubusercontent.com/n3doter/LogikaHackathon25/main/images/cave.png')";
    }
    

    //style
    body.style.backgroundSize = "cover"; 
    body.style.backgroundPosition = "center"; 
    body.style.transition = "background-image 1s ease-in-out"; 
}

//zmina na castle
document.getElementById("castleBtn").addEventListener("click", function() {
    changeBackground("castle");
});
//zmina na cave
document.getElementById("caveBtn").addEventListener("click", function() {
    changeBackground("cave");
});
