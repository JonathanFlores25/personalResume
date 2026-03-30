const overlay = document.getElementById("overlayMenu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");
const panel = document.querySelector(".overlay-panel");





// Abrir
menuBtn.addEventListener("click", () => {
    overlay.classList.add("open");
});

// Cerrar con X
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
});

// Cerrar si hago click fuera del panel
overlay.addEventListener("click", (e) => {
    if (!panel.contains(e.target)) {
        overlay.classList.remove("open");
    }
});



// ===== CAROUSEL =====
const slides = document.querySelectorAll(".carousel-img");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) img.classList.add("active");
    });
}

document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto cambio cada 4s
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);


// // ===== PERFECT INFINITE CAROUSEL WITH CENTER ZOOM =====
// const track = document.querySelector('.photo-carousel');
// let items = Array.from(document.querySelectorAll('.photo-item'));

// const speed = 0.8;
// let x = 0;

// // duplicar para loop continuo
// items.forEach(el => track.appendChild(el.cloneNode(true)));
// items = Array.from(document.querySelectorAll('.photo-item'));

// const itemWidth = items[0].offsetWidth + 40;

// // --- CENTER DETECTION THROTTLED ---
// let lastCenterCheck = 0;

// function checkCenter(timestamp) {
//     if (timestamp - lastCenterCheck < 120) return; // throttling
//     lastCenterCheck = timestamp;

//     const center = window.innerWidth / 2;

//     let closest = null;
//     let minDist = Infinity;

//     items.forEach(item => {
//         const rect = item.getBoundingClientRect();
//         const itemCenter = rect.left + rect.width / 2;
//         const dist = Math.abs(center - itemCenter);
//         if (dist < minDist) {
//             minDist = dist;
//             closest = item;
//         }
//     });

//     items.forEach(i => i.classList.remove("center"));
//     if (closest) closest.classList.add("center");
// }

// function animate(timestamp) {
//     x -= speed;
//     track.style.transform = `translate3d(${x}px,0,0)`;

//     const first = items[0];
//     const rect = first.getBoundingClientRect();

//     if (rect.right < 0) {
//         track.appendChild(first);
//         items.push(items.shift());
//         x += itemWidth;
//     }

//     checkCenter(timestamp);

//     requestAnimationFrame(animate);
// }

// animate(0);


/////////////////////////////////


document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("swiper-random");
  const slides = Array.from(wrapper.children);

  // Fisher–Yates shuffle
  for (let i = slides.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [slides[i], slides[j]] = [slides[j], slides[i]];
  }

  slides.forEach(slide => wrapper.appendChild(slide));

  // 🔥 Inicializar Swiper DESPUÉS del shuffle
  var swiper = new Swiper(".my-carousel", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    grabCursor: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      slideShadows: false
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    speed: 1500
  });
});




var swiper = new Swiper(".my-carousel", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2,
    slideShadows: false
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  speed: 1500
});




//--------------------------------------------------
// PROJECTS DATA — Add as many as you want
//--------------------------------------------------

const projects = [
    {
        title: "TransLowNet",
        img: "img_John/TransLowNEt.png",
        description: "AI framework designed to identify violent and abnormal events in public transportation surveillance, supporting early awareness, improved safety, and informed decision-making to help protect passengers and save lives.",
        links: [
            {text: "Video", url: "https://www.youtube.com/watch?v=Lf5jlRM7C8A"},
            {text: "Official Web", url: "https://www.ipn.mx/gacetapolitecnica/ver-detalle.html?g=195"},
            {text: "Demo", url: "https://github.com/JonathanFlores2503/TransLowNet_V2.git"}
        ]
    },
    {
        title: "SOMN-IA",
        img: "img_John/Somn_IA.png",
        description: "AI-based vision system designed to detect driver drowsiness and distraction, supporting accident prevention and helping protect lives by improving road safety in real driving conditions.",
        links: [
            {text: "Video", url: "https://www.youtube.com/watch?v=035Qq5egiS8"},
            {text: "Paper", url: "https://www.mdpi.com/2079-9292/11/16/2558"},
            {text: "Patent: MX/a/2022/015919", url: "https://vidoc.impi.gob.mx/busquedarapida"}
            
        ]
    },
    {
        title: "PJ-System",
        img: "img_John/img_6.jpg",
        description: "Embedded security system designed to prevent motorcycle theft and enhance rider safety by automatically disabling critical vehicle functions in unauthorized situations.",
        links: [
            {text: "Video", url: "https://youtu.be/_nhffUBDrV0"},
            {text: "Reportage", url: "https://www.facebook.com/share/v/1D7zPTeu6G/"},
            {text: "News", url: "https://www.excelsior.com.mx/nacional/disena-el-ipn-un-sistema-antirrobo-de-motocicletas/1394040"}
        ]
    },
    // {
    //     title: "Project 01",
    //     img: "img/img_4.jpg",
    //     description: "Generic description for project 01.",
    //     links: [{text: "More Info", url: "#"}]
    // },
    // {
    //     title: "Project 02",
    //     img: "img/img_5.jpg",
    //     description: "Generic description for project 02.",
    //     links: [{text: "More Info", url: "#"}]
    // },
    // {
    //     title: "Project 03",
    //     img: "img/img_6.jpg",
    //     description: "Generic description for project 03.",
    //     links: [{text: "More Info", url: "#"}]
    // }
];

//--------------------------------------------------
// CAROUSEL LOGIC
//--------------------------------------------------

let currentIndex = 0;

const carousel = document.getElementById("projectCarousel");

function renderCarousel() {
    carousel.innerHTML = "";

    // L + C + R = 3 cards visible
    const leftIndex = (currentIndex - 1 + projects.length) % projects.length;
    const rightIndex = (currentIndex + 1) % projects.length;

    const visible = [leftIndex, currentIndex, rightIndex];

    visible.forEach((i, idx) => {
        const p = projects[i];

        const card = document.createElement("div");
        card.className = "project-card";
        if (i === currentIndex) card.classList.add("active");

        card.innerHTML = `
            <img class="project-image" src="${p.img}">
            <div class="project-content">
                <h2>${p.title}</h2>
                <p>${p.description}</p>
                <div class="project-links">
                    ${p.links.map(l => `<a href="${l.url}" target="_blank">${l.text}</a>`).join("")}
                </div>
            </div>
        `;

        carousel.appendChild(card);
    });
}

document.getElementById("nextBtn").onclick = () => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderCarousel();
};

document.getElementById("prevBtn").onclick = () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderCarousel();
};

// Inicializar
renderCarousel();





const track = document.getElementById("logosTrack");
const originalLogos = Array.from(track.children);

// 1️⃣ Clonar logos hasta cubrir 2× viewport (controlado)
function fillTrackSafely() {
  const viewportWidth = track.parentElement.offsetWidth;
  let trackWidth = track.scrollWidth;

  let i = 0;
  while (trackWidth < viewportWidth * 2 && i < 10) {
    originalLogos.forEach(logo => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });
    trackWidth = track.scrollWidth;
    i++;
  }
}

fillTrackSafely();

// 2️⃣ Animación infinita real
let x = 0;
const speed = 0.5;

function animate() {
  x -= speed;

  const resetPoint = track.scrollWidth / 2;
  if (Math.abs(x) >= resetPoint) {
    x = 0;
  }

  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();


// ===== EDUCATION ROLODEX =====
(function () {
    const cylinder  = document.getElementById("rolodexCylinder");
    const scene     = document.getElementById("rolodexScene");
    const btnUp     = document.getElementById("eduUp");
    const btnDown   = document.getElementById("eduDown");
    const dotsEl    = document.getElementById("rolodexDots");

    if (!cylinder) return;

    const cards     = Array.from(cylinder.querySelectorAll(".rolodex-card"));
    const dots      = Array.from(dotsEl.querySelectorAll(".rdot"));
    const total     = cards.length;
    const STEP      = 360 / total;   // 90° for 4 cards
    const RADIUS    = 250;           // px translateZ

    let current     = 0;
    let locked      = false;
    let autoTimer   = null;

    // Place each card on the cylinder
    cards.forEach((card, i) => {
        card.style.transform = `rotateX(${i * STEP}deg) translateZ(${RADIUS}px)`;
    });

    function goTo(index) {
        current = ((index % total) + total) % total;
        cylinder.style.transform = `rotateX(${-current * STEP}deg)`;
        dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(next, 3400);
    }

    btnDown.addEventListener("click", () => { next(); resetAuto(); });
    btnUp.addEventListener("click",   () => { prev(); resetAuto(); });

    // Scroll inside scene — one step per gesture, debounced
    scene.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (locked) return;
        locked = true;
        e.deltaY > 0 ? next() : prev();
        resetAuto();
        setTimeout(() => { locked = false; }, 560);
    }, { passive: false });

    goTo(0);
    resetAuto();
})();


// ===== SCROLL WAVE REVEAL (RUNS ONCE) =====
const waveSections = document.querySelectorAll(".wave-section");

const waveObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // 👈 SOLO UNA VEZ
      }
    });
  },
  {
    threshold: 0.15
  }
);

waveSections.forEach(section => {
  waveObserver.observe(section);
});



