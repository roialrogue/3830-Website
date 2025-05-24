// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach((element) => {
        const revealPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (revealPosition < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Flip-Card
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
});

const options = {
    debug: 'info',
    modules: {
        toolbar: true,
    },
    placeholder: '[email content]',
    theme: 'snow'
};
    

const emailForm = document.querySelector("#emailForm")
emailForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(emailForm)
    emailList = [];
    for(v of formData){
        emailList.push(v)        
    }

    const subject = emailList[0][1]
    const body = emailList[1][1]
    
    console.log("subnject: " + subject + "\nbody: " + body) //test if values from form are properly received
    window.open("mailto:thechosenhades@gmail.com?subject=" + subject + "&body=" + body)
})
