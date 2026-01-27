// script.js - Funcionalidades para Paseando con Genarin

// Traducciones
const translations = {
    es: {
        heroTitle: "Descubre Colombia y el Mundo a Través de Mis Ojos",
        heroSubtitle: "Viajes únicos, historias inspiradoras y aventuras inolvidables",
        subscribeButton: "Suscribirte al Canal",
        adventuresTitle: "Aventuras Destacadas",
        adventuresDescription: "Descubre mis viajes más emocionantes por Colombia y el mundo",
        videosTitle: "Colombia & El Mundo",
        biographyTitle: "Mi Historia",
        biographyText1: "Soy Genarin, un apasionado viajero colombiano que decidió transformar su amor por los viajes en una forma de vida.",
        biographyText2: "Desde niño, soñaba con explorar cada rincón de mi país y, eventualmente, el mundo entero.",
        biographyText3: "Mi viaje comenzó en las montañas de Antioquia, donde aprendí a apreciar la diversidad natural de Colombia.",
        biographyText4: "Cada departamento que visito me enseña algo nuevo sobre nuestra cultura, historia y gente maravillosa.",
        biographyText5: "Mi motivación es simple: compartir la belleza de Colombia y del mundo con quienes siguen mis aventuras.",
        biographyText6: "Creo que los viajes nos hacen mejores personas, más empáticos y conscientes del mundo que nos rodea.",
        biographyQuote: "\"Viajar no es solo ver lugares nuevos, es ver el mundo con ojos nuevos\"",
        sharonTitle: "Mi Compañera de Aventuras: Sharon",
        sharonText1: "Sharon es mi fiel compañera de viajes, una hermosa perrita que me acompaña en todas mis aventuras.",
        sharonText2: "Su energía y curiosidad infinita hacen que cada viaje sea aún más especial.",
        sharonText3: "Juntas hemos recorrido ríos, montañas y playas, creando recuerdos inolvidables que compartimos con todos nuestros seguidores.",
        suggestionsTitle: "Mensaje que quiere enviar para el próximo vídeo",
        suggestionsDescription: "Lo tendremos en cuenta para el próximo vídeo, te nombraremos y te mandaremos saludos",
        suggestionsText: "Si tienes una sugerencia, un lugar que te gustaría que visite, o simplemente quieres aparecer en uno de mis próximos vídeos, ¡házmelo saber! Me encantaría incluir tus ideas en mis aventuras por Colombia y el mundo.",
        whatsappButton: "Enviar Mensaje por WhatsApp",
        footerMessage: "Gracias a toda la familia por ser parte de este viaje",
        footerText: "Con cada like, comentario y suscripción, me motivan a seguir explorando y compartiendo las maravillas de nuestro mundo.",
        footerSocial: "Sígueme en:",
        copyright: "© 2026 Paseando con Genarin. Todos los derechos reservados.",
        navHome: "Inicio",
        navAdventures: "Aventuras",
        navVideos: "Videos",
        navBiography: "Biografía",
        navSuggestions: "Sugerencias"
    },
    en: {
        heroTitle: "Discover Colombia and the World Through My Eyes",
        heroSubtitle: "Unique travels, inspiring stories and unforgettable adventures",
        subscribeButton: "Subscribe to the Channel",
        adventuresTitle: "Featured Adventures",
        adventuresDescription: "Discover my most exciting trips through Colombia and the world",
        videosTitle: "Colombia & The World",
        biographyTitle: "My Story",
        biographyText1: "I am Genarin, a passionate Colombian traveler who decided to transform my love for travel into a way of life.",
        biographyText2: "Since childhood, I dreamed of exploring every corner of my country and eventually the entire world.",
        biographyText3: "My journey began in the mountains of Antioquia, where I learned to appreciate Colombia's natural diversity.",
        biographyText4: "Each department I visit teaches me something new about our culture, history and wonderful people.",
        biographyText5: "My motivation is simple: to share the beauty of Colombia and the world with those who follow my adventures.",
        biographyText6: "I believe that travel makes us better people, more empathetic and aware of the world around us.",
        biographyQuote: "\"Traveling is not just seeing new places, it is seeing the world with new eyes\"",
        sharonTitle: "My Travel Companion: Sharon",
        sharonText1: "Sharon is my faithful travel companion, a beautiful dog who accompanies me on all my adventures.",
        sharonText2: "Her infinite energy and curiosity make every trip even more special.",
        sharonText3: "Together we have traveled rivers, mountains and beaches, creating unforgettable memories that we share with all our followers.",
        suggestionsTitle: "Message for the next video",
        suggestionsDescription: "We'll take it into account for the next video, we'll mention you and send greetings",
        suggestionsText: "If you have a suggestion, a place you'd like me to visit, or you just want to appear in one of my next videos, let me know! I'd love to include your ideas in my adventures through Colombia and the world.",
        whatsappButton: "Send WhatsApp Message",
        footerMessage: "Thank you to the whole family for being part of this journey",
        footerText: "With every like, comment and subscription, you motivate me to keep exploring and sharing the wonders of our world.",
        footerSocial: "Follow me on:",
        copyright: "© 2026 Paseando con Genarin. All rights reserved.",
        navHome: "Home",
        navAdventures: "Adventures",
        navVideos: "Videos",
        navBiography: "Biography",
        navSuggestions: "Suggestions"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initNavigation();
    initAventuras();
    initTabs();
    initWhatsApp();
    initScrollAnimations();
    initThumbnailFallback();
    initLanguageSelector();
});

// Navegación suave y activa
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú móvil al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll para navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Offset para header fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight navegación activa en scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Aventuras Destacadas - Funcionalidad mejorada
function initAventuras() {
    const aventuraCards = document.querySelectorAll('.aventura-card');

    aventuraCards.forEach(card => {
        // Efectos hover mejorados
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Click tracking para analytics
        const aventuraLink = card.querySelector('.aventura-link');
        if (aventuraLink) {
            aventuraLink.addEventListener('click', function(e) {
                const title = this.closest('.aventura-content').querySelector('.aventura-title').textContent;
                console.log(`Click en aventura: ${title}`);
                // Aquí se podría enviar a Google Analytics
            });
        }

        // Lazy loading de imágenes
        const img = card.querySelector('img');
        if (img && img.dataset.src) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            imageObserver.observe(img);
        }
    });

    // Botón "Ver más" con animación
    const verMasButton = document.querySelector('.ver-mas-button');
    if (verMasButton) {
        verMasButton.addEventListener('click', function() {
            showNotification('¡Redirigiendo al canal de YouTube!', 'success');
            // El enlace ya maneja la redirección
        });
    }
}

// Sistema de Pestañas (Tabs)
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Agregar clase active al botón y contenido seleccionado
            this.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Modal Functionality (removido - ya no se usa para el mapa)

// WhatsApp Integration
function initWhatsApp() {
    const whatsappButton = document.querySelector('.whatsapp-button');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            // El enlace ya está configurado con el mensaje predefinido
            showNotification('Abriendo WhatsApp...', 'success');

            // Tracking opcional
            console.log('WhatsApp click - Sugerencia para próximo video');
        });
    }
}

// Animaciones de Scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animatedElements = document.querySelectorAll('.video-card, .biografia-description, .patrocinio-info');

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Sistema de Notificaciones
function showNotification(message, type = 'info') {
    // Remover notificaciones existentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Estilos para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? 'var(--primary-color)' : 'var(--accent-blue)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: 'var(--shadow)',
        zIndex: '3000',
        maxWidth: '400px',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Responsive Map Handling
function handleMapResponsiveness() {
    const map = document.getElementById('colombia-map');
    const container = document.querySelector('.mapa-container');

    function adjustMapSize() {
        const containerWidth = container.offsetWidth;
        const aspectRatio = 1000 / 800; // Altura / Ancho del SVG original

        map.style.width = '100%';
        map.style.height = `${containerWidth * aspectRatio}px`;
    }

    window.addEventListener('resize', adjustMapSize);
    adjustMapSize(); // Inicial
}

// Inicializar responsividad del mapa
window.addEventListener('load', handleMapResponsiveness);

// Lazy Loading para Videos (opcional pero recomendado)
function initLazyLoading() {
    const videoCards = document.querySelectorAll('.video-card iframe');

    const lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                const src = iframe.getAttribute('data-src');

                if (src) {
                    iframe.src = src;
                    iframe.removeAttribute('data-src');
                    lazyLoadObserver.unobserve(iframe);
                }
            }
        });
    }, {
        rootMargin: '50px 0px'
    });

    videoCards.forEach(iframe => {
        const src = iframe.src;
        iframe.setAttribute('data-src', src);
        iframe.src = ''; // Remover src para lazy loading
        lazyLoadObserver.observe(iframe);
    });
}

// Inicializar lazy loading si es necesario
// initLazyLoading(); // Descomentado si se quiere implementar lazy loading

// Accessibility Improvements
function initAccessibility() {
    // Agregar roles ARIA
    const modal = document.getElementById('video-modal');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');

    // Focus management para modal
    const originalFocus = document.activeElement;

    // Cuando se abre el modal
    document.addEventListener('modalOpened', function() {
        const closeBtn = document.querySelector('.close-modal');
        closeBtn.focus();
    });

    // Cuando se cierra el modal
    document.addEventListener('modalClosed', function() {
        originalFocus.focus();
    });

    // Keyboard navigation para tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const currentIndex = Array.from(tabButtons).indexOf(this);
                const nextIndex = e.key === 'ArrowRight'
                    ? (currentIndex + 1) % tabButtons.length
                    : (currentIndex - 1 + tabButtons.length) % tabButtons.length;

                tabButtons[nextIndex].click();
                tabButtons[nextIndex].focus();
            }
        });
    });
}

// Mejorar carga de miniaturas de YouTube
function initThumbnailFallback() {
    const thumbnails = document.querySelectorAll('.aventura-image img');

    thumbnails.forEach(img => {
        img.addEventListener('error', function() {
            // Si maxresdefault falla, intentar hqdefault
            if (this.src.includes('maxresdefault.jpg')) {
                const videoId = this.src.split('/vi/')[1].split('/')[0];
                this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }
            // Si hqdefault también falla, intentar mqdefault
            else if (this.src.includes('hqdefault.jpg')) {
                const videoId = this.src.split('/vi/')[1].split('/')[0];
                this.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
            }
        });

        // Agregar timeout para detectar imágenes que no cargan
        setTimeout(() => {
            if (!img.complete || img.naturalHeight === 0) {
                const videoId = img.src.split('/vi/')[1]?.split('/')[0];
                if (videoId) {
                    img.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
                }
            }
        }, 3000);
    });
}

// Selector de Idioma
function initLanguageSelector() {
    const languageButtons = document.querySelectorAll('.language-button');

    // Obtener idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    setActiveLanguage(savedLanguage);
    applyTranslations(savedLanguage);

    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');

            // Remover clase active de todos los botones
            languageButtons.forEach(btn => btn.classList.remove('active'));

            // Agregar clase active al botón seleccionado
            this.classList.add('active');

            // Guardar preferencia
            localStorage.setItem('selectedLanguage', selectedLang);

            // Cambiar idioma del documento y aplicar traducciones
            document.documentElement.lang = selectedLang;
            applyTranslations(selectedLang);

            // Mostrar notificación
            showNotification(
                selectedLang === 'es' ? 'Idioma cambiado a Español' : 'Language changed to English',
                'success'
            );

            console.log(`Idioma cambiado a: ${selectedLang}`);
        });
    });

    function setActiveLanguage(lang) {
        languageButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        document.documentElement.lang = lang;
    }

    function applyTranslations(lang) {
        const trans = translations[lang];

        // Hero section
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const subscribeButton = document.querySelector('.cta-button');

        if (heroTitle) heroTitle.textContent = trans.heroTitle;
        if (heroSubtitle) heroSubtitle.textContent = trans.heroSubtitle;
        if (subscribeButton) subscribeButton.textContent = trans.subscribeButton;

        // Adventures section
        const adventuresTitle = document.querySelector('#aventuras .section-title');
        const adventuresDesc = document.querySelector('#aventuras .section-description');

        if (adventuresTitle) adventuresTitle.textContent = trans.adventuresTitle;
        if (adventuresDesc) adventuresDesc.textContent = trans.adventuresDescription;

        // Videos section
        const videosTitle = document.querySelector('#videos .section-title');
        if (videosTitle) videosTitle.textContent = trans.videosTitle;

        // Biography section
        const bioTitle = document.querySelector('#biografia .section-title');
        const bioTexts = document.querySelectorAll('.biografia-description');
        const bioQuote = document.querySelector('.biografia-quote');

        if (bioTitle) bioTitle.textContent = trans.biographyTitle;
        if (bioTexts.length >= 6) {
            bioTexts[0].textContent = trans.biographyText1;
            bioTexts[1].textContent = trans.biographyText2;
            bioTexts[2].textContent = trans.biographyText3;
            bioTexts[3].textContent = trans.biographyText4;
            bioTexts[4].textContent = trans.biographyText5;
            bioTexts[5].textContent = trans.biographyText6;
        }
        if (bioQuote) bioQuote.textContent = trans.biographyQuote;

        // Sharon section
        const sharonTitle = document.querySelector('.sharon-title');
        const sharonTexts = document.querySelectorAll('.sharon-description');

        if (sharonTitle) sharonTitle.textContent = trans.sharonTitle;
        if (sharonTexts.length >= 3) {
            sharonTexts[0].textContent = trans.sharonText1;
            sharonTexts[1].textContent = trans.sharonText2;
            sharonTexts[2].textContent = trans.sharonText3;
        }

        // Suggestions section
        const suggestionsTitle = document.querySelector('#colaboremos .section-title');
        const suggestionsDesc = document.querySelector('#colaboremos .section-description');
        const suggestionsText = document.querySelector('.colaboremos-text');
        const whatsappButton = document.querySelector('.whatsapp-button');

        if (suggestionsTitle) suggestionsTitle.textContent = trans.suggestionsTitle;
        if (suggestionsDesc) suggestionsDesc.textContent = trans.suggestionsDescription;
        if (suggestionsText) suggestionsText.textContent = trans.suggestionsText;
        if (whatsappButton) whatsappButton.textContent = trans.whatsappButton;

        // Footer
        const footerMessage = document.querySelector('.footer-message h3');
        const footerText = document.querySelector('.footer-message p');
        const footerSocial = document.querySelector('.footer-social h4');
        const copyright = document.querySelector('.footer-bottom p');

        if (footerMessage) footerMessage.textContent = trans.footerMessage;
        if (footerText) footerText.textContent = trans.footerText;
        if (footerSocial) footerSocial.textContent = trans.footerSocial;
        if (copyright) copyright.textContent = trans.copyright;

        // Navigation
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            switch(href) {
                case '#hero':
                    link.textContent = trans.navHome;
                    break;
                case '#aventuras':
                    link.textContent = trans.navAdventures;
                    break;
                case '#videos':
                    link.textContent = trans.navVideos;
                    break;
                case '#biografia':
                    link.textContent = trans.navBiography;
                    break;
                case '#colaboremos':
                    link.textContent = trans.navSuggestions;
                    break;
            }
        });
    }
}

// Inicializar mejoras de accesibilidad
initAccessibility();

// Performance Monitoring (opcional)
function initPerformanceMonitoring() {
    // Monitorear tiempo de carga
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Página cargada en ${loadTime.toFixed(2)} ms`);
    });

    // Monitorear interacciones
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Aquí se podría enviar analytics
            console.log(`Elemento interactuado: ${this.tagName} - ${this.className || this.id}`);
        });
    });
}

// Inicializar monitoreo de performance en desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    initPerformanceMonitoring();
}