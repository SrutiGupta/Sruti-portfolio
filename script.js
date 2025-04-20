// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Get all sections
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to current section link
            const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, message });

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Header color change on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    // For scroll-active class
    if (window.scrollY > 500) {
        document.body.classList.add('scroll-active');
    } else {
        document.body.classList.remove('scroll-active');
    }

    // For header background change
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add parallax effect to hero image
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-bg-image');
    const scrollPosition = window.scrollY;

    if (heroImage && scrollPosition < window.innerHeight) {
        // Move the background image slightly as user scrolls
        heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
});

// Scroll animation for elements
function checkScroll() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .animate-item, .animate-form-item');

    elements.forEach(element => {
        // Calculate position of element relative to viewport
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If element is in viewport (with offset)
        if (elementPosition < windowHeight - 100) {
            element.classList.add('appear');
        }
    });
}

// Check for elements in view on page load
document.addEventListener('DOMContentLoaded', checkScroll);

// Check for elements in view on scroll
window.addEventListener('scroll', checkScroll);
