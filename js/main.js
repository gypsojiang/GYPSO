// Custom cursor
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

// Page transition
const landingPage = document.querySelector('.landing-page');
const mainContent = document.querySelector('.main-content');
const girlIllustration = document.querySelector('.girl-illustration');

// Initialize with preferred or default language
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(preferredLanguage);
    
    // Set active state for the current language button
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${preferredLanguage}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Landing page transition
    if (landingPage && mainContent) {
        landingPage.style.opacity = '1';
        mainContent.classList.add('hidden');
    }
});

// Language selector event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        updateContent(lang);
        
        // Update active state
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
    });
});

// Image click handler
girlIllustration.addEventListener('click', () => {
    landingPage.style.opacity = '0';
    setTimeout(() => {
        landingPage.style.visibility = 'hidden';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
    }, 500);
});

// Language switching
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
        directing_intro: "Through the lens of a director, I explore the delicate balance between visual storytelling and emotional resonance.",
        animation_intro: "Bringing imagination to life through motion and creativity.",
        nature_description: "A poetic exploration of humanity's connection with nature, blending visual storytelling with environmental consciousness.",
        navidad_description: "A festive celebration through motion graphics, bringing holiday spirit to life.",
        memory_description: "A poetic journey through memories and emotions, expressed through motion."
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
        directing_intro: "A través del lente de una directora, exploro el delicado equilibrio entre la narración visual y la resonancia emocional.",
        animation_intro: "Dando vida a la imaginación a través del movimiento y la creatividad.",
        nature_description: "Una exploración poética de la conexión de la humanidad con la naturaleza, mezclando la narración visual con la conciencia ambiental.",
        navidad_description: "Una celebración festiva a través de gráficos en movimiento, dando vida al espíritu navideño.",
        memory_description: "Un viaje poético a través de los recuerdos y las emociones, expresado a través del movimiento."
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

我的目标是用我的热情和技能为最需要发声的人发声。我相信艺术和电影有这样的力量。`,
        contact: "联系方式",
        name: "姓名",
        email: "邮箱",
        message: "留言",
        send: "发送信息",
        back: "返回",
        home: "首页",
        directing_intro: "通过导演的视角，我探索视觉叙事与情感共鸣之间的微妙平衡。",
        animation_intro: "通过动态和创意，让想象力栩栩如生。",
        nature_description: "人与自然的诗意探索，通过视觉叙事展现环境意识。",
        navidad_description: "通过动态图形设计，展现节日的欢乐氛围。",
        memory_description: "通过动态设计，诗意地展现记忆与情感的旅程。"
    }
};

let currentLang = 'en';

function updateContent(lang) {
    currentLang = lang;
    const content = translations[lang];

    // Update all text content
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

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const key = href.substring(1);
            if (content[key]) {
                link.textContent = content[key];
            }
        }
    });

    // Update section headings
    document.querySelectorAll('section').forEach(section => {
        const id = section.id;
        const heading = section.querySelector('h2');
        if (heading && content[id]) {
            heading.textContent = content[id];
        }
    });

    // Update form elements
    if (document.querySelector('.contact-form')) {
        document.querySelector('input[type="text"]').placeholder = content.name;
        document.querySelector('input[type="email"]').placeholder = content.email;
        document.querySelector('textarea').placeholder = content.message;
        document.querySelector('button[type="submit"]').textContent = content.send;
    }

    // Update project categories
    document.querySelectorAll('.category').forEach(category => {
        const h3 = category.querySelector('h3');
        const p = category.querySelector('p');
        const type = h3.textContent.toLowerCase();
        if (content[type]) {
            p.textContent = content[type];
        }
    });

    // Update about content
    const artistStatement = document.querySelector('.artist-statement');
    if (artistStatement) {
        artistStatement.textContent = content.aboutContent;
    }

    // Update back button if exists
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        const backText = backButton.querySelector('[data-translate="back"]');
        if (backText) {
            backText.textContent = content.back;
        }
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Image loading debug
window.onload = function() {
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

// Add scroll effect for background
window.addEventListener('scroll', () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        const scrollPosition = window.scrollY;
        const maxScroll = 200; // 最大滚动距离
        const scrollRatio = Math.min(scrollPosition / maxScroll, 1);
        const backgroundOffset = -100 * scrollRatio; // 背景图片最大偏移量
        mainContent.style.backgroundPosition = `center ${backgroundOffset}px`;
    }
});

// 添加滚动效果
document.addEventListener('scroll', () => {
    const editingPage = document.querySelector('.editing-page');
    if (editingPage) {
        if (window.scrollY > 50) {
            editingPage.classList.add('scrolled');
        } else {
            editingPage.classList.remove('scrolled');
        }
    }
});

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // 获取所有需要的元素
    const illustrationItem = document.querySelector('.illustration-item');
    const petalsGallery = document.querySelector('.petals-gallery');
    const closeGalleryBtn = document.querySelector('.close-gallery');
    
    console.log('Elements found:', {
        illustrationItem: !!illustrationItem,
        petalsGallery: !!petalsGallery,
        closeGalleryBtn: !!closeGalleryBtn
    });
    
    // 添加点击事件监听器
    if (illustrationItem) {
        illustrationItem.addEventListener('click', function(e) {
            console.log('Illustration item clicked');
            e.preventDefault();
            e.stopPropagation();
            
            if (petalsGallery) {
                console.log('Showing gallery');
                petalsGallery.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            } else {
                console.error('Gallery element not found');
            }
        });
    } else {
        console.error('Illustration item not found');
    }
    
    // 关闭画廊
    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', function() {
            console.log('Close button clicked');
            if (petalsGallery) {
                petalsGallery.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    
    // 点击画廊背景关闭
    if (petalsGallery) {
        petalsGallery.addEventListener('click', function(e) {
            console.log('Gallery background clicked');
            if (e.target === petalsGallery) {
                petalsGallery.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
});
