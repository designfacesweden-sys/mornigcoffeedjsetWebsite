
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');

    if (mobileMenuToggle && navContainer) {
        mobileMenuToggle.addEventListener('click', function() {
            navContainer.classList.toggle('active');
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            // Prevent body scroll when menu is open
            if (navContainer.classList.contains('active')) {
                document.body.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                document.body.style.height = '100%';
            } else {
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.height = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navContainer) {
                navContainer.classList.remove('active');
            }
            navLinks.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navContainer && mobileMenuToggle) {
            const isClickInsideNav = navContainer.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navContainer.classList.contains('active')) {
                navContainer.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.height = '';
            }
        }
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

    // YouTube Video Autoplay
    const youtubeVideo = document.getElementById('live-dj-video');
    if (youtubeVideo) {
        // Force reload with autoplay after a short delay
        setTimeout(() => {
            const src = youtubeVideo.src;
            youtubeVideo.src = src + '&autoplay=1';
        }, 500);
    }

    // Hero Play Widget - Video Control
    const heroPlayWidget = document.querySelector('.hero-play-widget');
    const heroVideo = document.querySelector('.hero-video');
    const playIcon = document.querySelector('.play-icon');
    const playText = document.querySelector('.play-text');

    if (heroPlayWidget && heroVideo) {
        heroPlayWidget.addEventListener('click', function() {
            if (heroVideo.paused) {
                heroVideo.play();
                playText.textContent = 'Pause Demo';
                // Update icon to pause
                playIcon.innerHTML = '<circle cx="12" cy="12" r="10" fill="white"/><rect x="9" y="7" width="2" height="10" fill="currentColor"/><rect x="13" y="7" width="2" height="10" fill="currentColor"/>';
            } else {
                heroVideo.pause();
                playText.textContent = 'Play Demo';
                // Update icon back to play
                playIcon.innerHTML = '<circle cx="12" cy="12" r="10" fill="white"/><path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>';
            }
        });

        // Update button text when video ends
        heroVideo.addEventListener('ended', function() {
            playText.textContent = 'Play Demo';
            playIcon.innerHTML = '<circle cx="12" cy="12" r="10" fill="white"/><path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>';
        });
    }

});
