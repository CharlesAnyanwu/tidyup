/* ============================================
   TIDY UP VALET TRASH SERVICE
   Enhanced JavaScript
   ============================================ */

(function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const menuBtn = document.querySelector('.header__menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const currentYearEl = document.getElementById('current-year');
    const animatedElements = document.querySelectorAll('[data-animate]');

    // Update current year in footer
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Header scroll effect
    let lastScrollY = window.scrollY;
    let ticking = false;

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        lastScrollY = window.scrollY;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    // Mobile menu toggle
    function toggleMobileMenu() {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('is-active');
        mobileMenu.setAttribute('aria-hidden', isExpanded);
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    }

    function closeMobileMenu() {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }

    mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
            closeMobileMenu();
            menuBtn.focus();
        }
    });

    // Smooth scroll for anchor links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    history.pushState(null, null, href);
                }
            }
        });
    });

    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        animatedElements.forEach(function(el) {
            el.classList.add('is-visible');
        });
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact__form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // If Netlify forms is handling this, let it proceed
            if (contactForm.hasAttribute('data-netlify')) {
                // Add loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<span>Sending...</span>';
                }
                return;
            }

            e.preventDefault();

            // Basic validation
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // In a real scenario, you'd send this to a server
            console.log('Form submitted:', { name, email, message });
            showFormMessage('Thank you for your message. We will be in touch soon.', 'success');
            contactForm.reset();
        });
    }

    function showFormMessage(message, type) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageEl = document.createElement('div');
        messageEl.className = 'form-message form-message--' + type;
        messageEl.textContent = message;
        messageEl.style.cssText = 'padding: 1rem; border-radius: 8px; margin-bottom: 1rem; font-weight: 500;';

        if (type === 'error') {
            messageEl.style.background = 'rgba(220, 38, 38, 0.1)';
            messageEl.style.color = '#DC2626';
        } else {
            messageEl.style.background = 'rgba(29, 133, 71, 0.1)';
            messageEl.style.color = '#1D8547';
        }

        contactForm.insertBefore(messageEl, contactForm.firstChild);

        // Auto-remove after 5 seconds
        setTimeout(function() {
            messageEl.remove();
        }, 5000);
    }

    // Add hover effect for buttons with icons
    const buttonsWithIcons = document.querySelectorAll('.btn');
    buttonsWithIcons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            const icon = btn.querySelector('.btn__icon');
            if (icon) {
                icon.style.transform = 'translateX(4px)';
            }
        });

        btn.addEventListener('mouseleave', function() {
            const icon = btn.querySelector('.btn__icon');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });

    // Console message for developers
    console.log(
        '%c TIDY UP ',
        'background: #1D8547; color: white; font-size: 14px; padding: 8px 16px; border-radius: 4px; font-weight: bold;'
    );
    console.log(
        '%c Valet Trash Service ',
        'color: #1D8547; font-size: 12px; padding: 4px 0;'
    );
    console.log('Website crafted with care. Contact: info@tidyup.com');

})();
