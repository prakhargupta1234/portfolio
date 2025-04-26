// Select navigation links and logo
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('main > section'); // Select all sections in the main

// Function to activate the selected page
const activePage = () => { 
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Remove active class from all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
};

// Function to activate a specific section based on index
const activateSection = (index) => {
    activePage();
    navLinks[index]?.classList.add('active'); // Safe with optional chaining
    sections[index]?.classList.add('active');
};

// Add click event listeners to navigation links
navLinks.forEach((link, idx) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        activateSection(idx); // Activate the corresponding section based on index
    });
});

// Add click event listener to the logo
logoLink?.addEventListener('click', (event) => {
    event.preventDefault();
    activateSection(0); // Activate the Home section (index 0)

    // Optional: Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Resume button functionality
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-details');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active'); 
        });

        btn.classList.add('active');
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        resumeDetails[idx]?.classList.add('active');
    });
});

// Portfolio navigation functionality
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-car .img-slide');
const portfoliodetails = document.querySelectorAll('.portfolio-details');

let index = 0;

const activePortfolio = () => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfoliodetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfoliodetails[index]?.classList.add('active');

    // Handle arrows
    if (index === 0) {
        arrowLeft?.classList.add('disabled');
    } else {
        arrowLeft?.classList.remove('disabled');
    }

    if (index === portfoliodetails.length - 1) {
        arrowRight?.classList.add('disabled');
    } else {
        arrowRight?.classList.remove('disabled');
    }
};

// Right arrow click event
arrowRight?.addEventListener('click', () => {
    if (index < portfoliodetails.length - 1) {
        index++;
        activePortfolio();
    }
});

// Left arrow click event
arrowLeft?.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

// Initialize portfolio on page load
activePortfolio();
