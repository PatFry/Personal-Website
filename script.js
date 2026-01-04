const projectCard = document.querySelectorAll('.project-card');


projectCard.forEach(card => {
    const color = card.querySelector('.project-card-colors');

    card.addEventListener('mouseenter', () => {
        color.classList.add('spin-fast');
        card.classList.add('big-card');
        // card.style.transform = "scale(1.5)";

        color.addEventListener('animationend', () => {
            color.classList.remove('spin-fast');

            if(card.matches(':hover')){
                color.classList.add('spin-slow');
            }

            color.removeEventListener('animationend');
        });
    });

    card.addEventListener('click', () => {
        
    });
});

projectCard.forEach(card => {
    const color = card.querySelector('.project-card-colors');
    card.addEventListener('mouseleave', () => {
        color.classList.remove('spin-fast','spin-slow');
        card.classList.remove('big-card');
    });
});