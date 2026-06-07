// ============================================
// CUSTOM CURSOR
// ============================================

const customCursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (customCursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        // Main cursor
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';

        // Follower cursor
        setTimeout(() => {
            cursorFollower.style.left = e.clientX - 20 + 'px';
            cursorFollower.style.top = e.clientY - 20 + 'px';
        }, 100);
    });

    // Change cursor on hover
    const hoverElements = document.querySelectorAll('a, button, input, textarea, .card, .btn, .nav-link, .publication-card, .conference-card, .skill-card, .cert-card, .contact-card');

    hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            customCursor.style.transform = 'scale(1.5)';
            customCursor.style.backgroundColor = 'rgba(99, 102, 241, 0.8)';
            cursorFollower.style.borderColor = 'rgba(99, 102, 241, 0.6)';
            cursorFollower.style.transform = 'scale(1.3)';
        });

        el.addEventListener('mouseleave', () => {
            customCursor.style.transform = 'scale(1)';
            customCursor.style.backgroundColor = 'rgb(99, 102, 241)';
            cursorFollower.style.borderColor = 'rgb(99, 102, 241)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
        cursorFollower.style.display = 'none';
    });

    document.addEventListener('mouseenter', () => {
        customCursor.style.display = 'block';
        cursorFollower.style.display = 'block';
    });
}

// ============================================
// NAVIGATION MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

function setActiveNavLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        
        if (currentLocation.includes(href) || 
            (currentLocation.endsWith('/') && href === 'index.html') ||
            (currentLocation.endsWith('index.html') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.timeline-animate, .skill-animate, .cert-animate, .pub-animate, .conf-animate, .contact-animate').forEach((el) => {
    observer.observe(el);
});

// ============================================
// FORM SUBMISSION
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        // You can replace this with your backend endpoint
        console.log('Form submitted:', data);

        // Show success message
        const submitButton = contactForm.querySelector('.form-submit');
        const originalText = submitButton.innerHTML;

        submitButton.innerHTML = '<span class="btn-text">Message Sent! ✓</span>';
        submitButton.disabled = true;
        submitButton.style.background = 'linear-gradient(135deg, #10b981, #14b8a6)';

        // Reset form
        contactForm.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
        }, 3000);
    });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// PARALLAX EFFECT (OPTIONAL)
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// LETTER ANIMATION ON HOVER
// ============================================

const logoLetters = document.querySelectorAll('.letter');

logoLetters.forEach((letter) => {
    letter.addEventListener('mouseenter', () => {
        letter.style.animation = 'letterFloat 0.6s ease forwards';
    });
});

// ============================================
// DYNAMIC FLOATING ANIMATION VARIATION
// ============================================

const bgOrbs = document.querySelectorAll('.bg-orb');

bgOrbs.forEach((orb, index) => {
    const randomDuration = 12 + Math.random() * 8; // 12-20 seconds
    const randomDelay = Math.random() * 5; // 0-5 seconds

    orb.style.animationDuration = randomDuration + 's';
    orb.style.animationDelay = randomDelay + 's';
});

// ============================================
// TYPEWRITER EFFECT (OPTIONAL)
// ============================================

function typewriterEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ============================================
// PARTICLE EFFECT ON BUTTON CLICK (OPTIONAL)
// ============================================

function createParticles(e) {
    const x = e.clientX;
    const y = e.clientY;

    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = 'rgba(99, 102, 241, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9998';

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 5;
        const velocity = 5 + Math.random() * 5;
        let px = x;
        let py = y;
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity;
        let opacity = 1;

        function animate() {
            px += vx;
            py += vy;
            vy += 0.2; // gravity
            opacity -= 0.02;

            particle.style.left = px + 'px';
            particle.style.top = py + 'px';
            particle.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        }

        animate();
    }
}

document.querySelectorAll('.btn, .social-icon').forEach((element) => {
    element.addEventListener('click', createParticles);
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '30px';
    notification.style.right = '30px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '10px';
    notification.style.backgroundColor = type === 'success' ? '#10b981' : '#ef4444';
    notification.style.color = 'white';
    notification.style.fontWeight = '600';
    notification.style.zIndex = '10000';
    notification.style.animation = 'slideInUp 0.5s ease forwards';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ============================================
// EASTER EGGS & INTERACTIONS
// ============================================

let keySequence = [];

document.addEventListener('keydown', (e) => {
    keySequence.push(e.key);

    // Keep only last 10 keys
    if (keySequence.length > 10) {
        keySequence.shift();
    }

    // Check for "PORTFOLIO" sequence (for fun!)
    if (keySequence.join('').toLowerCase().includes('portfolio')) {
        // Add special effect
        document.body.style.filter = 'hue-rotate(360deg)';
        setTimeout(() => {
            document.body.style.filter = 'hue-rotate(0deg)';
        }, 1000);
    }
});

// ============================================
// LAZY LOADING EFFECT
// ============================================

const lazyElements = document.querySelectorAll('.publication-card, .conference-card, .skill-card');

const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            lazyObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

lazyElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    lazyObserver.observe(el);
});

// ============================================
// ANALYTICS & TRACKING (OPTIONAL)
// ============================================

// Track page views
function trackPageView() {
    const pageTitle = document.title;
    console.log('Page viewed:', pageTitle);
    // Send to analytics service if needed
}

trackPageView();

// Track button clicks
document.querySelectorAll('.btn, .nav-link').forEach((el) => {
    el.addEventListener('click', () => {
        console.log('Clicked:', el.textContent);
    });
});

// ============================================
// INITIALIZATION
// ============================================

console.log('Portfolio website loaded successfully!');
console.log('Made with ❤️ by Ujjwal');
