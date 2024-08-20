

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
   if(!menu.classList.contains("active")){
      return;
   }
  if(e.target.closest(".menu-item-has-children")){
      const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
    hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
    toggleMenu();
})
closeMenu.addEventListener("click",() =>{
    toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
   toggleMenu();
})
function toggleMenu(){
   menu.classList.toggle("active");
   document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
   if(this.innerWidth >991){
      if(menu.classList.contains("active")){
         toggleMenu();
      }

   }
}

$(document).ready(function() {
  setTimeout(function() {
      $('.sticky-social').fadeIn();
  }, 1500); // 1500 milliseconds = 1.5 seconds
});


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


function redirectToForm() {
    window.location.href = 'appointment.html'; // Redirects to appointment.html
}


/*Appointment
const scriptURL = 'https://script.google.com/macros/s/AKfycbwh73miO3F4XIAvSYg_qNzP7lOXRUC69_qrCt5YrAyaY5gWW6wruJhQ_T3gA-2aiVrtag/exec';
    const form = document.forms['google-sheet'];

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Fetch API call to submit form data
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                alert("Thanks for Contacting us..! We Will Contact You Soon...");
                form.reset(); // Reset the form
            })
            .catch(error => console.error('Error!', error.message));
    });*/

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyTevVhqeMBblkYY9dZoaC-0RL70Atv4jbST1EO5OVqygtqwJnH7IKHNhp4pIH_91Wp2A/exec';
        const form = document.forms['google-sheet'];
        const spinnerContainer = document.getElementById('spinner-container');
        const spinnerMessage = document.querySelector('.spinner-message');
        
        form.addEventListener('submit', e => {
            e.preventDefault();
        
            spinnerMessage.textContent = 'Submitting your request...'; // Update message
            spinnerContainer.style.display = 'flex'; // Show spinner and message
        
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    spinnerMessage.textContent = 'Thank you! We will get back to you soon.'; // Success message
                    setTimeout(() => {
                        spinnerContainer.style.display = 'none'; // Hide spinner and message
                    }, 2000); // Show message for 2 seconds before hiding
                    form.reset(); // Reset the form
                })
                .catch(error => {
                    spinnerMessage.textContent = 'Oops! Something went wrong. Please try again.'; // Error message
                    setTimeout(() => {
                        spinnerContainer.style.display = 'none'; // Hide spinner and message
                    }, 2000); // Show message for 2 seconds before hiding
        });
    });