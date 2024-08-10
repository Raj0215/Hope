

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq h3');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            this.classList.toggle('active');
            answer.classList.toggle('active');
        });
    });
});


 

$(document).ready(function() {
    $('.social-icon').click(function(event) {
        event.preventDefault();
        alert('You clicked on a social media icon!');
    });
});

// JavaScript to toggle answers on clicking questions
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.querySelector('.toggle-arrow').textContent = '';
            } else {
                answer.style.display = 'block';
                this.querySelector('.toggle-arrow').textContent = '';
            }
        });
    });
});

z

 function redirectToForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfLyk0WVM3Y1N8ctYaiASivYcWXblJsF4J7ZB-77NKAVo3Bwg/viewform", "_blank");
}