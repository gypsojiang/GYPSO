// ===== Custom Cursor =====
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    // ===== Language Initialization =====
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(currentLang);

    const activeBtn = document.querySelector(`.lang-btn[data-lang="${currentLang}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Language button listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            currentLang = lang;
            updateContent(lang);

            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // ===== Landing Page Transition =====
    const landingPage = document.querySelector('.landing-page');
    const mainContent = document.querySelector('.main-content');
    const girlIllustration = document.querySelector('.girl-illustration');

    if (landingPage && mainContent) {
        landingPage.style.opacity = '1';
        mainContent.classList.add('hidden');
    }

    if (girlIllustration) {
        girlIllustration.addEventListener('click', () => {
            landingPage.style.opacity = '0';
            setTimeout(() => {
                landingPage.style.visibility = 'hidden';
                mainContent.classList.remove('hidden');
                mainContent.classList.add('visible');
            }, 500);
        });
    }

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== Contact Form =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // ===== Gallery Events =====
    const illustrationItem = document.querySelector('.illustration-item');
    const petalsGallery = document.querySelector('.petals-gallery');
    const closeGalleryBtn = document.querySelector('.close-gallery');

    if (illustrationItem && petalsGallery) {
        illustrationItem.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            petalsGallery.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (closeGalleryBtn) {
            closeGalleryBtn.addEventListener('click', () => {
                petalsGallery.style.display = 'none';
                document.body.style.overflow = '';
            });
        }

        petalsGallery.addEventListener('click', function (e) {
            if (e.target === petalsGallery) {
                petalsGallery.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // ===== Background Scroll Effect =====
    const editingPage = document.querySelector('.editing-page');
    const scrollEffect = () => {
        if (editingPage) {
            if (window.scrollY > 50) {
                editingPage.classList.add('scrolled');
            } else {
                editingPage.classList.remove('scrolled');
            }
        }

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            const scrollPosition = window.scrollY;
            const maxScroll = 200;
            const scrollRatio = Math.min(scrollPosition / maxScroll, 1);
            const backgroundOffset = -100 * scrollRatio;
            mainContent.style.backgroundPosition = `center ${backgroundOffset}px`;
        }
    };
    window.addEventListener('scroll', scrollEffect);
});

// ===== Image Load Debug (Safe for all pages) =====
window.onload = function () {
    const illustration = document.getElementById('mainIllustration');
    if (illustration) {
        console.log('Illustration element found');
        const computedStyle = window.getComputedStyle(illustration);
        console.log('Background image:', computedStyle.backgroundImage);
        console.log('Width:', computedStyle.width);
        console.log('Height:', computedStyle.height);
        console.log('Display:', computedStyle.display);
        console.log('Visibility:', computedStyle.visibility);
        console.log('Opacity:', computedStyle.opacity);
    } else {
        console.log('Illustration element not found');
    }
};
