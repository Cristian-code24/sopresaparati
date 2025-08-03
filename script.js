// ===== CONFIGURACIÓN INICIAL =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funciones cuando la página carga
    initRomanticQuotes();
    initTimeCounter();
    initScrollAnimations();
    initTypewriter();
    initImageModal();
    
    console.log('💕 Página romántica cargada con amor 💕');
});

// ===== FRASES ROMÁNTICAS QUE CAMBIAN AUTOMÁTICAMENTE =====
// AQUÍ PUEDES CAMBIAR LAS FRASES ROMÁNTICAS
const romanticQuotes = [
    "Eres la melodía más hermosa que ha tocado mi corazón 🎵",
    "En tus ojos encontré mi hogar para siempre ✨",
    "Cada día contigo es como vivir en un cuento de hadas 🌟",
    "Tu amor es la magia que transformó mi mundo 💫",
    "Eres mi estrella más brillante en el cielo nocturno ⭐",
    "Contigo, cada momento es una obra de arte 🎨",
    "Tu sonrisa es el sol que ilumina mis días más oscuros ☀️",
    "Eres la respuesta a todas las oraciones que nunca hice 🙏"
];

let currentQuoteIndex = 0;

function initRomanticQuotes() {
    const quoteElement = document.getElementById('romantic-quote');
    
    // Función para cambiar la frase
    function changeQuote() {
        if (quoteElement) {
            quoteElement.style.opacity = '0';
            
            setTimeout(() => {
                quoteElement.textContent = romanticQuotes[currentQuoteIndex];
                quoteElement.style.opacity = '1';
                currentQuoteIndex = (currentQuoteIndex + 1) % romanticQuotes.length;
            }, 500);
        }
    }
    
    // Mostrar la primera frase inmediatamente
    if (quoteElement) {
        quoteElement.textContent = romanticQuotes[0];
        quoteElement.style.opacity = '1';
        currentQuoteIndex = 1;
    }
    
    // Cambiar frase cada 4 segundos
    setInterval(changeQuote, 4000);
}

// ===== RELOJ DE TIEMPO JUNTOS =====
function initTimeCounter() {
    // AQUÍ PUEDES CAMBIAR LA FECHA DE INICIO DE LA RELACIÓN
    const startDate = new Date('2025-07-02T00:00:00'); // 2 de julio de 2025
    
    function updateTime() {
        const now = new Date();
        const timeDifference = now - startDate;
        
        // Calcular tiempo transcurrido
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Actualizar elementos del DOM
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
        if (secondsElement) secondsElement.textContent = seconds;
    }
    
    // Actualizar cada segundo
    updateTime();
    setInterval(updateTime, 1000);
}

// ===== CARRUSEL DE IMÁGENES =====
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Ocultar todas las diapositivas
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Mostrar la diapositiva actual
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

function changeSlide(direction) {
    const newSlide = currentSlide + direction;
    
    if (newSlide >= slides.length) {
        showSlide(0);
    } else if (newSlide < 0) {
        showSlide(slides.length - 1);
    } else {
        showSlide(newSlide);
    }
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-avanzar el carrusel cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

// ===== BOTONES SORPRESA =====
function showSurprise(surpriseNumber) {
    const surpriseMessage = document.getElementById(`surprise-${surpriseNumber}`);
    
    if (surpriseMessage) {
        // Ocultar otros mensajes
        document.querySelectorAll('.surprise-message').forEach(message => {
            message.classList.remove('show');
        });
        
        // Mostrar el mensaje seleccionado
        setTimeout(() => {
            surpriseMessage.classList.add('show');
            createHeartAnimation();
        }, 100);
    }
}

// ===== ANIMACIÓN DE CORAZONES =====
function createHeartAnimation() {
    const hearts = ['💖', '💕', '💘', '💝', '🌟', '✨'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-animation';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            // Posición aleatoria
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(heart);
            
            // Eliminar el corazón después de la animación
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 2000);
        }, i * 100);
    }
}

// ===== EFECTO MÁQUINA DE ESCRIBIR PARA LA CARTA =====
function initTypewriter() {
    // AQUÍ PUEDES CAMBIAR EL TEXTO DE LA CARTA
    const letterText = `Mi amor, desde el instante en que llegaste a mi vida, todo cambió por completo.

Eres la luz que ilumina mis días grises, la melodía que calma mis tormentas internas y la razón por la que creo en los milagros.

Cada mañana que despierto y recuerdo que estás conmigo, siento que el universo conspiró para hacerme la persona más afortunada del mundo.

Tu risa es mi canción favorita, tus ojos mi refugio más seguro y tu amor el regalo más valioso que la vida me ha dado.

Prometo amarte no solo en los días felices, sino también en las tormentas. Prometo ser tu apoyo cuando el mundo sea pesado y celebrar contigo cada una de tus victorias.

Eres mi presente perfecto y mi futuro soñado. Eres mi todo.

Te amo más allá de las palabras, más allá del tiempo y más allá de todo lo que pueda existir. ✨`;
    
    const typewriterElement = document.getElementById('typewriter-text');
    let charIndex = 0;
    
    function typeCharacter() {
        if (charIndex < letterText.length && typewriterElement) {
            typewriterElement.textContent = letterText.substring(0, charIndex + 1);
            charIndex++;
            
            // Velocidad variable para hacer más natural
            const delay = letterText[charIndex - 1] === '.' ? 500 : 
                         letterText[charIndex - 1] === ',' ? 200 : 50;
            
            setTimeout(typeCharacter, delay);
        } else {
            // Agregar cursor parpadeante al final
            if (typewriterElement) {
                typewriterElement.innerHTML += '<span class="cursor">|</span>';
            }
        }
    }
    
    // Iniciar el efecto cuando el elemento sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && charIndex === 0) {
                setTimeout(() => {
                    typeCharacter();
                }, 1000);
            }
        });
    });
    
    if (typewriterElement) {
        observer.observe(typewriterElement);
    }
}

// ===== ANIMACIONES AL HACER SCROLL =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar todos los elementos con animación
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}

// ===== MODAL PARA AMPLIAR IMÁGENES =====
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close-modal');
    
    // Hacer clic en las imágenes del carrusel
    document.querySelectorAll('.carousel-image').forEach(image => {
        image.addEventListener('click', function() {
            if (modal && modalImage && modalCaption) {
                modal.classList.add('show');
                modalImage.src = this.src;
                modalCaption.textContent = this.alt;
                document.body.style.overflow = 'hidden'; // Prevenir scroll
            }
        });
    });
    
    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener('click', closeImageModal);
    }
    
    // Cerrar al hacer clic fuera de la imagen
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
}

// ===== NAVEGACIÓN SUAVE =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== EFECTOS ADICIONALES =====

// Crear estrellas fugaces ocasionales
function createShootingStar() {
    const star = document.createElement('div');
    star.style.position = 'fixed';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.backgroundColor = '#fff';
    star.style.borderRadius = '50%';
    star.style.top = Math.random() * 50 + '%';
    star.style.left = '-10px';
    star.style.zIndex = '-1';
    star.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff69b4';
    
    document.body.appendChild(star);
    
    // Animar la estrella fugaz
    star.animate([
        { left: '-10px', opacity: 0 },
        { left: '50%', opacity: 1 },
        { left: '110%', opacity: 0 }
    ], {
        duration: 2000,
        easing: 'linear'
    }).onfinish = () => {
        if (star.parentNode) {
            star.parentNode.removeChild(star);
        }
    };
}

// Crear estrella fugaz cada 10-30 segundos
setInterval(() => {
    if (Math.random() < 0.3) { // 30% de probabilidad
        createShootingStar();
    }
}, 10000);

// ===== EFECTOS DE AUDIO (OPCIONAL) =====
// Si quieres agregar sonidos, puedes descomentar estas funciones

/*
function playLoveSound() {
    // Crear un audio simple usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // Do
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.2); // Mi
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.4); // Sol
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.6);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.6);
}
*/

// ===== MENSAJES DE CONSOLA ROMÁNTICOS =====
console.log(`
💕 ═══════════════════════════════════════ 💕
   Esta página fue hecha con mucho amor
   para la persona más especial del mundo
💕 ═══════════════════════════════════════ 💕
`);

// ===== FUNCIONES DE PERSONALIZACIÓN =====
// Estas funciones te permiten cambiar colores dinámicamente

function changeColorTheme(primaryColor, secondaryColor, accentColor) {
    document.documentElement.style.setProperty('--primary-pink', primaryColor);
    document.documentElement.style.setProperty('--secondary-pink', secondaryColor);
    document.documentElement.style.setProperty('--gold', accentColor);
}

// Ejemplo de uso: changeColorTheme('#ff1493', '#ff69b4', '#ffd700');

// ===== DETECCIÓN DE DISPOSITIVO MÓVIL =====
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar efectos según el dispositivo
if (isMobile()) {
    // Reducir la frecuencia de animaciones en móviles para mejor rendimiento
    console.log('📱 Dispositivo móvil detectado - Optimizando animaciones');
}

// ===== GUARDAR CONFIGURACIONES =====
// Función para recordar preferencias del usuario (sin localStorage)
let userPreferences = {
    soundEnabled: true,
    reducedAnimations: false,
    favoriteQuote: 0
};

function updatePreference(key, value) {
    userPreferences[key] = value;
    console.log(`Preferencia actualizada: ${key} = ${value}`);
}

// ===== MODO NOCHE/DÍA (OPCIONAL) =====
function toggleDayNightMode() {
    const body = document.body;
    body.classList.toggle('day-mode');
    
    if (body.classList.contains('day-mode')) {
        // Colores para modo día
        changeColorTheme('#e91e63', '#f06292', '#ff9800');
    } else {
        // Colores para modo noche (original)
        changeColorTheme('#ff69b4', '#ff1493', '#ffd700');
    }
}

// ===== FUNCIONES DE UTILIDAD =====
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function createFloatingElement(emoji, duration = 3000) {
    const element = document.createElement('div');
    element.textContent = emoji;
    element.style.position = 'fixed';
    element.style.fontSize = '2rem';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '1000';
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(element);
    
    element.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    };
}

// ===== EASTER EGGS =====
// Doble clic en el título para sorpresa especial
document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.addEventListener('dblclick', function() {
            // Lluvia de corazones especial
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createFloatingElement(getRandomElement(['💖', '💕', '💘', '💝', '🌟', '✨']));
                }, i * 100);
            }
            
            // Mensaje especial en consola
            console.log('💕 ¡Has descubierto un easter egg! Tu amor es tan especial como esta sorpresa 💕');
        });
    }
});

// Konami Code para sorpresa ultra especial
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Activar modo súper romántico
        activateSuperRomanticMode();
        konamiCode = [];
    }
});

function activateSuperRomanticMode() {
    // Cambiar temporalmente los colores a un modo súper romántico
    changeColorTheme('#ff0080', '#ff69b4', '#ffff00');
    
    // Crear una explosión masiva de corazones
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createFloatingElement(getRandomElement(['💖', '💕', '💘', '💝', '🌟', '✨', '💞', '💓' , '💞', ]));
        }, i * 50);
    }
    
    // Mostrar mensaje especial
    const specialMessage = document.createElement('div');
    specialMessage.style.position = 'fixed';
    specialMessage.style.top = '50%';
    specialMessage.style.left = '50%';
    specialMessage.style.transform = 'translate(-50%, -50%)';
    specialMessage.style.fontSize = '3rem';
    specialMessage.style.color = '#ff0080';
    specialMessage.style.textAlign = 'center';
    specialMessage.style.zIndex = '10000';
    specialMessage.style.textShadow = '0 0 20px #ff69b4';
    specialMessage.style.fontFamily = 'Great Vibes, cursive';
    specialMessage.innerHTML = '¡MODO SÚPER ROMÁNTICO ACTIVADO! 💕✨';
    
    document.body.appendChild(specialMessage);
    
    setTimeout(() => {
        specialMessage.remove();
        // Volver a colores normales después de 10 segundos
        setTimeout(() => {
            changeColorTheme('#ff69b4', '#ff1493', '#ffd700');
        }, 10000);
    }, 3000);
    
    console.log('🎉 ¡MODO SÚPER ROMÁNTICO ACTIVADO! ¡Eres increíble! 🎉');
}

function optimizeForPerformance() {
    const performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure' && entry.duration > 16) {
                console.log('⚡ Optimizando rendimiento...');
                // Reducir animaciones si es necesario
                userPreferences.reducedAnimations = true;
            }
        }
    });
    
    if (window.PerformanceObserver) {
        performanceObserver.observe({ entryTypes: ['measure'] });
    }
}

// ===== FUNCIONES DE ACCESIBILIDAD =====
// Respetar preferencias de movimiento reducido
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    userPreferences.reducedAnimations = true;
    console.log('♿ Modo de movimiento reducido activado por preferencias del sistema');
}

// ===== ESTADÍSTICAS DE USO =====
let interactionStats = {
    quotesViewed: 0,
    surprisesOpened: 0,
    imagesViewed: 0,
    timeSpent: 0
};

// Contador de tiempo en la página
let startTime = Date.now();
setInterval(() => {
    interactionStats.timeSpent = Math.floor((Date.now() - startTime) / 1000);
}, 1000);

// ===== MENSAJES MOTIVACIONALES =====
const motivationalMessages = [
    "Tu amor es la fuerza más poderosa del universo 💫",
    "Cada segundo que pasas aquí, alguien te ama más 💕",
    "Eres la razón por la que alguien cree en los milagros ✨",
    "Tu sonrisa puede cambiar el mundo de alguien 🌟",
    "El amor que compartes hace el mundo más hermoso 🌈"
];

// Mostrar mensaje motivacional cada 2 minutos
setInterval(() => {
    if (Math.random() < 0.3) {
        console.log(getRandomElement(motivationalMessages));
    }
}, 120000);

// ===== FUNCIÓN DE DESPEDIDA =====
window.addEventListener('beforeunload', function() {
    console.log(`
    💕 ¡Gracias por visitar esta página especial! 💕
    
    Estadísticas de tu visita:
    ⏰ Tiempo aquí: ${Math.floor(interactionStats.timeSpent / 60)} minutos
    👀 Frases vistas: ${interactionStats.quotesViewed}
    🎁 Sorpresas abiertas: ${interactionStats.surprisesOpened}
    🖼️ Imágenes vistas: ${interactionStats.imagesViewed}
    
    ¡Esperamos que hayas sentido todo el amor! 💖
    `);
});

// ===== INICIALIZACIÓN FINAL =====
// Verificar que todos los elementos estén cargados correctamente
function checkPageIntegrity() {
    const requiredElements = [
        'romantic-quote',
        'days', 'hours', 'minutes', 'seconds',
        'typewriter-text'
    ];
    
    let missingElements = [];
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            missingElements.push(id);
        }
    });
    
    if (missingElements.length > 0) {
        console.warn('⚠️ Algunos elementos no se encontraron:', missingElements);
    } else {
        console.log('✅ Todos los elementos cargados correctamente');
    }
}

// Ejecutar verificación después de que todo esté cargado
setTimeout(checkPageIntegrity, 1000);

// ===== PERSONALIZACIÓN AVANZADA =====
// Funciones para que puedas personalizar fácilmente

// CAMBIAR VELOCIDAD DE ANIMACIONES
function setAnimationSpeed(speed) {
    // speed: 'slow' = 0.5x, 'normal' = 1x, 'fast' = 2x
    const speedValues = {
        'slow': 0.5,
        'normal': 1,
        'fast': 2
    };
    
    const multiplier = speedValues[speed] || 1;
    document.documentElement.style.setProperty('--animation-speed', multiplier);
}

// CAMBIAR MENSAJE DE LA CARTA DINÁMICAMENTE
function updateLetterText(newText) {
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        typewriterElement.textContent = '';
        // Reiniciar el efecto de máquina de escribir con el nuevo texto
        // (Implementación simplificada)
        let charIndex = 0;
        function typeNewText() {
            if (charIndex < newText.length) {
                typewriterElement.textContent += newText[charIndex];
                charIndex++;
                setTimeout(typeNewText, 50);
            }
        }
        typeNewText();
    }
}

// AGREGAR NUEVA FRASE ROMÁNTICA
function addRomanticQuote(newQuote) {
    romanticQuotes.push(newQuote);
    console.log(`💕 Nueva frase agregada: "${newQuote}"`);
}
