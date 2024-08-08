

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


 document.addEventListener('DOMContentLoaded', function() {
    const toggleArrow = document.getElementById('toggleArrow');
    const hoursTable = document.getElementById('hoursTable');

    // Hide all rows initially except for today's
    const today = new Date().getDay(); // Get current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const rows = hoursTable.getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        if (i !== 0 && i !== today) { // Skip the header row and rows not for today
            rows[i].style.display = 'none';
        }
    }

    // Toggle visibility of table rows when arrow is clicked
    toggleArrow.addEventListener('click', function() {
        for (let i = 1; i < rows.length; i++) { // Start from index 1 to skip header row
            rows[i].style.display = rows[i].style.display === 'none' ? 'table-row' : 'none';
        }
        toggleArrow.textContent = toggleArrow.textContent === '▼' ? '▲' : '▼'; // Toggle arrow icon
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