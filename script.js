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
