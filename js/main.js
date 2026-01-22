// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handlers
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    const emailCaptureForms = document.querySelectorAll('.email-capture form');
    emailCaptureForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Add your email capture logic here
            alert('Thank you for subscribing! We will keep you updated on upcoming events.');
            this.reset();
        });
    });

    // Floating Event Card Close Button
    const eventCardClose = document.querySelector('.event-card-close');
    const floatingEventCard = document.querySelector('.floating-event-card');
    
    if (eventCardClose && floatingEventCard) {
        eventCardClose.addEventListener('click', function() {
            floatingEventCard.style.animation = 'slideOutDown 0.3s ease-out forwards';
            setTimeout(() => {
                floatingEventCard.style.display = 'none';
            }, 300);
        });
    }
});
