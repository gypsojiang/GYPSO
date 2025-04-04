// ===== Traducciones y función updateContent =====
const translations = {
    en: {
        welcome: "Welcome to My Creative World",
        projects: "Projects",
        directing: "Directing Works",
        photography: "Photography",
        animation: "Animation",
        editing: "Video Editing",
        stories: "Personal Stories",
        about: "About Me",
        aboutContent: `Many people know me by my artistic name Gypso...`, // Recorta o ajusta tu contenido largo aquí
        contact: "Contact",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        back: "Back",
        home: "Home",
        directing_intro: "Through the lens of a director...",
        animation_intro: "Bringing imagination to life...",
        nature_description: "A poetic exploration of humanity...",
        navidad_description: "A festive celebration...",
        memory_description: "A poetic journey through memories..."
    },
    es: {
        welcome: "Bienvenidos a Mi Mundo Creativo",
        projects: "Proyectos",
        directing: "Dirección",
        photography: "Fotografía",
        animation: "Animación",
        editing: "Edición de Video",
        stories: "Historias Personales",
        about: "Sobre Mí",
        aboutContent: `¡Hola! Mucha gente me conoce como Gypso...`, // Recorta o ajusta tu contenido largo aquí
        contact: "Contacto",
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar Mensaje",
        back: "Volver",
        home: "Inicio",
        directing_intro: "A través del lente de una directora...",
        animation_intro: "Dando vida a la imaginación...",
        nature_description: "Una exploración poética...",
        navidad_description: "Una celebración festiva...",
        memory_description: "Un viaje poético..."
    },
    zh: {
        welcome: "欢迎来到我的创作世界",
        projects: "作品集",
        directing: "导演作品",
        photography: "摄影作品",
        animation: "动画作品",
        editing: "剪辑作品",
        stories: "个人故事",
        about: "关于我",
        aboutContent: `大家好！很多人通过我的艺名Gypso认识我...`, // Recorta o ajusta tu contenido largo aquí
        contact: "联系方式",
        name: "姓名",
        email: "邮箱",
        message: "留言",
        send: "发送信息",
        back: "返回",
        home: "首页",
        directing_intro: "通过导演的视角...",
        animation_intro: "通过动态和创意...",
        nature_description: "人与自然的诗意探索...",
        navidad_description: "通过动态图形设计...",
        memory_description: "通过动态设计..."
    }
};

let currentLang = 'en';

function updateContent(lang) {
    currentLang = lang;
    const content = translations[lang];
    if (!content) return;

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (content[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = content[key];
            } else {
                element.textContent = content[key];
            }
        }
    });

    const artistStatement = document.querySelector('.artist-statement');
    if (artistStatement && content.aboutContent) {
        artistStatement.textContent = content.aboutContent;
    }

    const backButton = document.querySelector('.back-button');
    if (backButton) {
        const backText = backButton.querySelector('[data-translate="back"]');
        if (backText && content.back) {
            backText.textContent = content.back;
        }
    }
}

// ===== Custom Cursor y DOM Ready =====
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

    // ===== Language Init =====
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(preferredLanguage);

    const activeBtn = document.querySelector(`.lang-btn[data-lang="${preferredLanguage}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            updateContent(lang);

            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // ===== Landing Page Animation =====
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

    // ===== Smooth Scrolling =====
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

    // ===== Gallery Interactions =====
    const illustrationItem = document.querySelector('.illustration-item');
    const petalsGallery = document.querySelector('.petals-gallery');
    const closeGalleryBtn = document.querySelector('.close-gallery');

    if (illustrationItem && petalsGallery) {
        illustrationItem.addEventListener('click', (e) => {
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

        petalsGallery.addEventListener('click', (e) => {
            if (e.target === petalsGallery) {
                petalsGallery.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // ===== Scroll Background Effect =====
    const editingPage = document.querySelector('.editing-page');
    const scrollEffect = () => {
        if (editingPage) {
            if (window.scrollY > 50) {
                editingPage.classList.add('scrolled');
            } else {
                editingPage.classList.remove('scrolled');
            }
        }

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

// ===== Debug Imagen al Cargar =====
window.onload = function () {
    const illustration = document.getElementById('mainIllustration');
    if (illustration) {
        const computedStyle = window.getComputedStyle(illustration);
        console.log('Illustration element found');
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
