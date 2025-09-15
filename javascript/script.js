// Select all patient review slides
let slide = document.querySelectorAll(".patientReview");

// Select all doctor/team cards
let card = document.querySelectorAll(".card");

// Select the connect button from the contact form
let connectBtn = document.getElementById("connectBtn");

let count = 0; // Counter for tracking slide position

// Position each patientReview slide horizontally next to each other
slide.forEach(function(slides, index){
    slides.style.left = `${index * 100}%`
})

// Function to shift slides based on current count
function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count * 100}%)`
    })
}

// Automatically slide every 3 seconds
setInterval(function(){
    count++;
    if(count == slide.length){
        count = 0; // Reset to first slide if at the end
    }
    myFun();
}, 3000);

// -----------------------------
// Modal for doctor/team details
// -----------------------------

let modal = document.getElementById("doctorModal");   // The modal container
let modalBody = document.getElementById("modalBody"); // Modal content area
let closeBtn = document.querySelector(".close");      // Modal close button

// Add click event to each card to open modal with details
card.forEach(function(cards){
    cards.addEventListener("click", function(){
        let title = cards.querySelector("strong").innerText; // Get card title
        let desc = cards.querySelectorAll("p")[1].innerText; // Get description
        let imgSrc = cards.querySelector("img").src;         // Get image source

        // Fill modal content dynamically
        modalBody.innerHTML = `
            <h2>${title}</h2>
            <img src="${imgSrc}" style="width:100%; max-height:300px; object-fit:cover; border-radius: 8px; margin: 15px 0;">
            <p style="line-height: 1.6; margin: 15px 0;">${desc}</p>
            <p style="line-height: 1.6; margin: 15px 0; font-style: italic;">Want to get more info about ${title}? Kindly contact us via email to get more details...</p>
        `;
        modal.style.display = "block"; // Show modal
    });
});

// Close modal when clicking the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(e) {
    if(e.target == modal) modal.style.display = "none";
}

// -----------------------------
// Mobile menu toggle
// -----------------------------

let hamburger = document.getElementById("bar");          // Hamburger icon
let mobileMenu = document.getElementById("mobile-menu"); // Mobile menu container

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function(){
        console.log("Hamburger clicked"); // Debug log
        mobileMenu.classList.toggle("active"); // Toggle mobile menu visibility
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove("active");
    });
});

// -----------------------------
// Smooth scrolling for nav links
// -----------------------------

document.querySelectorAll('nav a[href^="#"], .mobile-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute('href');  // Get target section ID
        const target = document.querySelector(targetId); // Select target section
        if (target) {
            const offsetTop = target.offsetTop - 80; // Adjust for fixed nav height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    });
});

// -----------------------------
// Contact form validation
// -----------------------------

connectBtn.addEventListener("click", function(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");

    // Check if any field is empty
    if(name.value === "" || email.value === "" || pass.value === ""){
        alert("Please fill in all details");
    } else {
        // Success message
        alert("Welcome, " + name.value + "! Your submission has been recorded.");
        
        // Clear form after successful submission
        name.value = "";
        email.value = "";
        pass.value = "";
    }
});
