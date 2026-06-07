/* ===== HAMBURGER MENU ===== */
const overlay  = document.getElementById('overlayMenu');
const menuBtn  = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeMenu');
const panel    = document.querySelector('.overlay-panel');

function openMenu() {
    overlay.classList.add('open');
    menuBtn.classList.add('is-active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    overlay.classList.remove('open');
    menuBtn.classList.remove('is-active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

overlay.addEventListener('click', (e) => {
    if (!panel.contains(e.target)) closeMenu();
});

// Close menu on overlay-link click (navigate to section)
document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});


/* ===== HERO CAROUSEL ===== */
const slides = document.querySelectorAll('.carousel-img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

const autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);


/* ===== PHOTO SWIPER (EXPERIENCE) — init after DOM & shuffle ===== */
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('swiper-random');
    if (!wrapper) return;

    // Fisher–Yates shuffle
    const items = Array.from(wrapper.children);
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach(item => wrapper.appendChild(item));

    // RAF loop: reads the actual pixel position of every slide on each frame
    // via getBoundingClientRect() and applies a Gaussian scale curve.
    // Using transform:scale (not width/height) → container height is fixed,
    // nothing below the carousel bounces.
    function startScaleLoop(swiper) {
        const el = swiper.el;
        (function loop() {
            const sr   = el.getBoundingClientRect();
            const cx   = sr.left + sr.width / 2;
            const half = sr.width / 2 || 1;

            swiper.slides.forEach(slide => {
                const r = slide.getBoundingClientRect();
                // normalised distance from center: 0 = center, 1 = at swiper edge
                const p = Math.abs(r.left + r.width / 2 - cx) / half;
                // Gaussian bell: sharp peak at center, fast falloff on sides
                // coefficient 9 → adjacent slide (~40% of halfW) gets scale ≈0.66
                const t = Math.exp(-p * p * 9);
                slide.style.transform = `scale(${(0.38 + 1.17 * t).toFixed(3)})`;
                slide.style.opacity   = (0.22 + 0.78 * t).toFixed(3);
                slide.style.filter    = `brightness(${(0.35 + 0.65 * t).toFixed(2)}) saturate(${(0.40 + 0.60 * t).toFixed(2)})`;
            });

            requestAnimationFrame(loop);
        })();
    }

    new Swiper('.my-carousel', {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 14,
        loop: true,
        grabCursor: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 0,                    // no pause → constant flow
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 3200,                     // slow, cinematic movement
        on: {
            init: startScaleLoop,        // starts the RAF loop once Swiper is ready
        },
    });
});


/* ===== PROJECTS CAROUSEL ===== */
const projects = [
    {
        title: 'TransLowNet',
        img: 'img_John/TransLowNEt.png',
        description: 'AI framework designed to identify violent and abnormal events in public transportation surveillance, supporting early awareness, improved safety, and informed decision-making to help protect passengers and save lives.',
        links: [
            { text: 'Video',       url: 'https://www.youtube.com/watch?v=Lf5jlRM7C8A' },
            { text: 'Official Web', url: 'https://www.ipn.mx/gacetapolitecnica/ver-detalle.html?g=195' },
            { text: 'Demo',        url: 'https://github.com/JonathanFlores2503/TransLowNet_V2.git' },
        ],
    },
    {
        title: 'SOMN-IA',
        img: 'img_John/Somn_IA.png',
        description: 'AI-based vision system designed to detect driver drowsiness and distraction, supporting accident prevention and helping protect lives by improving road safety in real driving conditions.',
        links: [
            { text: 'Video',                url: 'https://www.youtube.com/watch?v=035Qq5egiS8' },
            { text: 'Paper',               url: 'https://www.mdpi.com/2079-9292/11/16/2558' },
            { text: 'Patent MX/a/2022/015919', url: 'https://vidoc.impi.gob.mx/busquedarapida' },
        ],
    },
    {
        title: 'PJ-System',
        img: 'img_John/img_6.jpg',
        description: 'Embedded security system designed to prevent motorcycle theft and enhance rider safety by automatically disabling critical vehicle functions in unauthorized situations.',
        links: [
            { text: 'Video',    url: 'https://youtu.be/_nhffUBDrV0' },
            { text: 'Reportage', url: 'https://www.facebook.com/share/v/1D7zPTeu6G/' },
            { text: 'News',     url: 'https://www.excelsior.com.mx/nacional/disena-el-ipn-un-sistema-antirrobo-de-motocicletas/1394040' },
        ],
    },
];

let currentIndex = 0;
const carousel = document.getElementById('projectCarousel');

function renderCarousel() {
    carousel.innerHTML = '';

    const leftIndex  = (currentIndex - 1 + projects.length) % projects.length;
    const rightIndex = (currentIndex + 1) % projects.length;

    [leftIndex, currentIndex, rightIndex].forEach((i) => {
        const p = projects[i];
        const card = document.createElement('div');
        card.className = 'project-card' + (i === currentIndex ? ' active' : '');

        card.innerHTML = `
            <img class="project-image" src="${p.img}" alt="${p.title}" loading="lazy">
            <div class="project-content">
                <h2>${p.title}</h2>
                <p>${p.description}</p>
                <div class="project-links">
                    ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.text}</a>`).join('')}
                </div>
            </div>`;

        carousel.appendChild(card);
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderCarousel();
});

renderCarousel();


/* ===== LOGOS INFINITE SCROLL ===== */
const track         = document.getElementById('logosTrack');
const originalLogos = Array.from(track.children);

(function fillTrack() {
    const targetWidth = track.parentElement.offsetWidth * 2;
    let iterations    = 0;

    while (track.scrollWidth < targetWidth && iterations < 8) {
        originalLogos.forEach(logo => track.appendChild(logo.cloneNode(true)));
        iterations++;
    }
})();

let logosX = 0;
const logosSpeed = 0.45;

(function animateLogos() {
    logosX -= logosSpeed;
    if (Math.abs(logosX) >= track.scrollWidth / 2) logosX = 0;
    track.style.transform = `translateX(${logosX}px)`;
    requestAnimationFrame(animateLogos);
})();


/* ===== SCROLL WAVE REVEAL ===== */
const waveObserver = new IntersectionObserver(
    (entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll('.wave-section').forEach(section => {
    waveObserver.observe(section);
});
