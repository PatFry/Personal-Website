const projectCard = document.querySelectorAll('.project-card');

function notify(){
    console.log('hello');
    // card.setAttribute('width', '5px');
};

projectCard.forEach(card => {
    card.addEventListener('click', notify);
});