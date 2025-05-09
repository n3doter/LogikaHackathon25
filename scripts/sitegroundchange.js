document.addEventListener('DOMContentLoaded', () => {
    let toggleBtn = document.getElementById('toggle-backgrounds');
    let options = document.querySelector('.background-options');
    let buttons = document.querySelectorAll('.background-options button');

    let backgrounds = {
        cave: 'images/cave.png',
        forest: 'images/fantasyForest.png',
        castle: 'images/castle.png'
    };

    toggleBtn.addEventListener('click', () => {
        options.classList.toggle('hidden');
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let bgType = button.getAttribute('data-bg');
            let url = backgrounds[bgType];
            document.body.style.background = `url('${url}') center/cover no-repeat`;
        });
    });
});
