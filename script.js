const projectCard = document.querySelectorAll('.project-card');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('mouseenter', () => {
    submitButton.classList.add('big-button');
});

submitButton.addEventListener('mouseleave', () => {
    submitButton.classList.remove('big-button');
})

// projectCard.forEach(card => {
//     const color = card.querySelector('.project-card-colors');

//     card.addEventListener('mouseenter', () => {
//         color.classList.add('spin-fast');
//         card.classList.add('big-card');

//         color.addEventListener('animationend', () => {
//             color.classList.remove('spin-fast');

//             if(card.matches(':hover')){
//                 color.classList.add('spin-slow');
//             }

//             color.removeEventListener('animationend');
//         });
//     });
// });

// projectCard.forEach(card => {
//     const color = card.querySelector('.project-card-colors');
//     card.addEventListener('mouseleave', () => {
//         color.classList.remove('spin-fast','spin-slow');
//         card.classList.remove('big-card');
//     });
// });



function sendEmail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_g1rcb6q", "template_5ydv8fm", params).then(alert("Email Sent"));
    return false;

}