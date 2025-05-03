// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
   // Get elements
   const hamburger = document.querySelector('.hamburger');
   const menubar = document.querySelector('.menubar');
   const menuLinks = document.querySelectorAll('.menubar ul li a');
   
   // Toggle menu when hamburger is clicked
   hamburger.addEventListener('click', function() {
       hamburger.classList.toggle('hamburger-active');
       menubar.classList.toggle('active');
       
       // Prevent scrolling when menu is open
       if (menubar.classList.contains('active')) {
           document.body.style.overflow = 'hidden';
       } else {
           document.body.style.overflow = 'auto';
       }
   });
   
   // Close menu when a link is clicked
   menuLinks.forEach(link => {
       link.addEventListener('click', function() {
           hamburger.classList.remove('hamburger-active');
           menubar.classList.remove('active');
           document.body.style.overflow = 'auto';
       });
   });
   
   // Close menu when clicking outside
   document.addEventListener('click', function(event) {
       if (!menubar.contains(event.target) && !hamburger.contains(event.target) && menubar.classList.contains('active')) {
           hamburger.classList.remove('hamburger-active');
           menubar.classList.remove('active');
           document.body.style.overflow = 'auto';
       }
   });
   
   // Handle window resize
   window.addEventListener('resize', function() {
       if (window.innerWidth > 1050 && menubar.classList.contains('active')) {
           hamburger.classList.remove('hamburger-active');
           menubar.classList.remove('active');
           document.body.style.overflow = 'auto';
       }
   });
});

// Booking form

var membersContainer = document.getElementById('members-container');
var mealCheck = document.getElementById('meal');
var bookBtn = document.getElementById('bookingBtn');
var membersAmount = document.getElementById('members-amount');

var totalBookingPrice = 0
var mealCost = 0
var selectedAmount = membersAmount.selectedIndex;

function displayMembersPricing() {
    membersContainer.innerHTML = ' '

    selectedAmount = membersAmount.selectedIndex;
    for (let members = 1; members <= selectedAmount; members++) {
        var member = document.createElement('div')
        member.classList = 'member';
        member.innerHTML = `
                <label for="member${members}Age">Member${members}</label>
                <select name="gender" class="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="number" placeholder="Enter Member Age." id="member${members}Age" name="member${members}Age" required>
        `;

        membersContainer.appendChild(member);
    }

    bookBtn.style.backgroundColor = '#007bff'

    mealCost = 0
    if (mealCheck.checked == false) {
        mealCost =+ 0
    }
    else if (mealCheck.checked == true) {
        mealCost =+ 10
    }

    totalBookingPrice = 32*Number(selectedAmount)+mealCost
    bookBtn.textContent = `Book For ${totalBookingPrice}$`
}

function includeMeal() {
    mealCost = 0
    if (mealCheck.checked == false) {
        mealCost =+ 0
    }
    else if (mealCheck.checked == true) {
        mealCost =+ 10
    }

    totalBookingPrice = 32*Number(selectedAmount)+mealCost
    bookBtn.textContent = `Book For ${totalBookingPrice}$`
}