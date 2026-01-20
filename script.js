// script.js - Funcionalidades para Paseando con Genarin

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initNavigation();
    initAventuras();
    initTabs();
    initForm();
    initScrollAnimations();
});

// Navegación suave y activa
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');

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

// Formulario de Patrocinio
function initForm() {
    const form = document.getElementById('patrocinio-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            submitForm();
        }
    });

    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateForm() {
    let isValid = true;
    const form = document.getElementById('patrocinio-form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Limpiar errores previos
    clearFieldError(field);

    // Validaciones específicas
    switch (fieldName) {
        case 'nombre':
        case 'empresa':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Este campo debe tener al menos 2 caracteres';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor ingresa un email válido';
            }
            break;
        case 'propuesta':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'La propuesta debe tener al menos 10 caracteres';
            }
            break;
    }

    // Mostrar error si no es válido
    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.style.borderColor = 'var(--accent-red)';
    field.style.boxShadow = '0 0 0 3px rgba(206, 17, 38, 0.1)';

    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function clearFieldError(field) {
    field.style.borderColor = 'var(--border-color)';
    field.style.boxShadow = 'none';

    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function submitForm() {
    const form = document.getElementById('patrocinio-form');
    const submitButton = form.querySelector('.submit-button');

    // Mostrar loading state
    submitButton.classList.add('loading');
    submitButton.textContent = 'Enviando...';

    // Simular envío (en producción esto sería una llamada a API)
    setTimeout(() => {
        submitButton.classList.remove('loading');
        submitButton.textContent = 'Enviar Propuesta';

        // Mostrar mensaje de éxito
        showNotification('¡Gracias por tu interés! Me pondré en contacto contigo pronto.', 'success');

        // Limpiar formulario
        form.reset();
    }, 2000);
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
    const interactiveElements = document.querySelectorAll('button, a, .departamento');
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