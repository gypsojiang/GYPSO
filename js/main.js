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
        aboutContent: `Many people know me by my artistic name Gypso, a girl in love with cinema and art, with a unique story intertwined with my childhood and culture. I grew up surrounded by the love and patience of my grandparents, which has given me a special calmness to face any project with serenity. Since I was little, when I arrived in Spain, an unknown country for me, movies became my best companions. Through the screen, I discovered a world full of emotions, cultures, and landscapes that made me feel safer and more inspired to explore other realities. Directors like Wong Kar-Wai and Ozu were my guides in this cinematic journey.

Today, I am studying at a film school, taking small steps towards my dream of telling stories that connect people and make us reflect. My Chinese roots, which contrast so much with European culture in aspects such as painting, architecture, and ways of thinking, have enriched my artistic perspective. I love exploring these differences and finding common points that bring us closer.

Respect and independence are values that define me both in my daily life and in my work. But it's not all seriousness: I like to face each project with a spark of fun and creativity, letting my manual skills capture unique moments.

My goal is to use my passion and skills to give voice to those who need it most. I know that art and cinema have the power to do so.`,
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
        aboutContent: `¡Hola! Mucha gente me conocen por mi nombre artístico Gypso, una chica enamorada del cine y del arte, con una historia única que se entrelaza con mi infancia y mi cultura. Crecí rodeada del cariño y la paciencia de mis abuelos, lo que me ha dado una calma especial para enfrentar cualquier proyecto con serenidad. Desde pequeña, cuando llegué a España, un país desconocido para mí, las películas se convirtieron en mis mejores compañeras. A través de la pantalla, descubrí un mundo lleno de emociones, las culturas y paisajes que me hicieron sentir más segura e inspirada para conocer otras realidades. Directores como Wong Kar-Wai y Ozu fueron mis guías en este viaje cinematográfico.

Hoy en día, estoy estudiando en una escuela de cine, dando pasos pequeños hacia mi sueño de contar historias que conecten a las personas y nos hagan reflexionar. Mis raíces chinas, que contrastan tanto con la cultura europea en aspectos como la pintura, la arquitectura y la forma de pensar, han enriquecido mi perspectiva artística. Me encanta explorar esas diferencias y buscar puntos en común que nos acerquen.

El respeto y la independencia, valores que me definen tanto en mi vida diaria como en mi trabajo. Pero no todo es seriedad: me gusta enfrentar cada proyecto con una chispa de diversión y creatividad, dejando que mis habilidades manuales capturen momentos únicos.

Mi objetivo es utilizar mi pasión y habilidades para dar voz a quienes más lo necesitan. Sé que el arte y el cine tienen el poder de hacerlo.`,
        
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
        aboutContent: `大家好！很多人通过我的艺名Gypso认识我，一个热爱电影和艺术的女孩，我的故事与我的童年和文化交织在一起。我在外公外婆的关爱和耐心下长大，这给了我一种特殊的平静，让我能够以平和的心态面对任何项目。从小时候来到西班牙这个陌生的国家开始，电影就成了我最好的伙伴。通过银幕，我发现了一个充满情感、文化和风景的世界，这让我感到更安全，也更有动力去探索其他现实。王家卫和小津安二郎等导演是我电影之旅的引路人。

如今，我正在电影学院学习，朝着讲述能连接人心、引发思考的故事的梦想迈出小步。我的中国根源，在绘画、建筑和思维方式等方面与欧洲文化形成鲜明对比，这丰富了我的艺术视角。我喜欢探索这些差异，寻找能让我们更亲近的共同点。

尊重和独立是我在日常生活和工作中都秉持的价值观。但并非一切都是严肃的：我喜欢带着趣味和创造力的火花面对每个项目，让我的手艺捕捉独特的瞬间。

我的目标是用我的热情和技能为最需要发声的人发声。我相信艺术和电影有这样的力量。`,contact: "联系方式",
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
