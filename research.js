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

function closeMobileMenu() {
    overlay.classList.remove('open');
    menuBtn.classList.remove('is-active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMobileMenu);

overlay.addEventListener('click', (e) => {
    if (!panel.contains(e.target)) closeMobileMenu();
});

document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
});


/* ===== PAPER SEARCH ===== */
function searchPapers() {
    const query = document.getElementById('paperSearch').value.toLowerCase().trim();
    document.querySelectorAll('.paper-card').forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(query) ? 'flex' : 'none';
    });
}


/* ===== PAPER FILTER BY CATEGORY ===== */
function filterPapers(category, e) {
    document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
    if (e && e.target) e.target.classList.add('active');

    document.querySelectorAll('.paper-card').forEach(card => {
        card.style.display =
            (category === 'all' || card.classList.contains(category)) ? 'flex' : 'none';
    });

    // Clear search when filter changes
    const search = document.getElementById('paperSearch');
    if (search) search.value = '';
}


/* ===== BIBTEX DATA ===== */
const bibtexEntries = {
    1: `@inproceedings{flores2025detection,
  title     = {Detection and Classification of Abnormal Human Actions for Video Surveillance on Edge Devices},
  author    = {Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano-Miyatake, Mariko and Takahashi, Hiroki},
  booktitle = {2025 IEEE International Conference},
  year      = {2025},
  organization = {IEEE}
}`,

    2: `@article{flores2025online,
  title     = {An Online Modular Framework for Anomaly Detection and Multiclass Classification in Video Surveillance},
  author    = {Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano-Miyatake, Mariko and Takahashi, Hiroki},
  journal   = {Applied Sciences},
  volume    = {15},
  number    = {17},
  pages     = {9249},
  year      = {2025},
  publisher = {MDPI}
}`,

    3: `@inproceedings{flores2024ownership,
  title        = {Ownership Authentication and Integrity Verification of Digital Images Using Generative Models and Custom Signature},
  author       = {Flores-Monroy, Jonathan and Cedillo-Hernandez, Manuel and Nakano-Miyatake, Mariko and Perez-Meana, Hector},
  booktitle    = {2024 47th International Conference on Telecommunications and Signal Processing (TSP)},
  pages        = {101--106},
  year         = {2024},
  organization = {IEEE}
}`,

    4: `@incollection{flores2024optimal,
  title     = {Optimal Feature Extractor for Video Anomaly Detection in Public Transportation Applications},
  author    = {Flores-Monroy, Jonathan and Benitez-Garcia, Gibran and Nakano, Mariko and Takahashi, Hiroki},
  booktitle = {New Trends in Intelligent Software Methodologies, Tools and Techniques},
  pages     = {249--262},
  year      = {2024},
  publisher = {IOS Press}
}`,

    5: `@article{flores2023deteccion,
  title     = {Detecci{\\\'o}n de somnolencia y distracci{\\\'o}n en conductores y su implementaci{\\\'o}n en dispositivos m{\\\'o}viles},
  author    = {Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hern{\\'a}ndez, Enrique and P{\\'e}rez-Meana, H{\\'e}ctor},
  journal   = {Informaci{\\'o}n tecnol{\\'o}gica},
  volume    = {34},
  number    = {4},
  pages     = {1--12},
  year      = {2023},
  publisher = {SciELO Chile}
}`,

    6: `@inproceedings{sanchez2023face,
  title        = {Face Expression Recognition using Recurrent Neural Networks},
  author       = {Sanchez-Ruiz, Marcos and Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hernandez, Enrique and Perez-Meana, Hector},
  booktitle    = {2023 46th International Conference on Telecommunications and Signal Processing (TSP)},
  pages        = {148--153},
  year         = {2023},
  organization = {IEEE}
}`,

    7: `@article{sanchez2022deteccion,
  title   = {Detecci{\\'o}n de estados de {\\'a}nimo en ambientes no restringidos},
  author  = {S{\\'a}nchez-Ruiz, Marcos and Flores-Monroy, Jonathan and Escamilla-Hern{\\'a}ndez, Enrique and Nakano-Miyatake, Mariko and Perez-Meana, Hector and others},
  journal = {P{\\"a}di Bolet{\\'\\i}n Cient{\\'\\i}fico de Ciencias B{\\'a}sicas e Ingenier{\\'\\i}as del ICBI},
  volume  = {10},
  pages   = {110--115},
  year    = {2022}
}`,

    8: `@article{flores2022somn_ia,
  title     = {SOMN\\_IA: Portable and universal device for real-time detection of driver's drowsiness and distraction levels},
  author    = {Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel and Perez-Meana, Hector},
  journal   = {Electronics},
  volume    = {11},
  number    = {16},
  pages     = {2558},
  year      = {2022},
  publisher = {MDPI}
}`,

    9: `@inproceedings{flores2022cnn,
  title        = {A CNN-based driver's drowsiness and distraction detection system},
  author       = {Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Perez-Meana, Hector and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel},
  booktitle    = {Mexican Conference on Pattern Recognition},
  pages        = {83--93},
  year         = {2022},
  organization = {Springer}
}`,

    10: `@incollection{flores2022implementation,
  title     = {Implementation of a CNN-Based Driver Drowsiness and Distraction Detector in Mobile Devices},
  author    = {Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Perez-Meana, Hector and Escamilla-Hernandez, Enrique and Sanchez-Perez, Gabriel},
  booktitle = {New Trends in Intelligent Software Methodologies, Tools and Techniques},
  pages     = {272--285},
  year      = {2022},
  publisher = {IOS Press}
}`,

    11: `@inproceedings{flores2021visual,
  title        = {Visual-based real time driver drowsiness detection system using CNN},
  author       = {Flores-Monroy, Jonathan and Nakano-Miyatake, Mariko and Sanchez-Perez, Gabriel and Perez-Meana, Hector},
  booktitle    = {2021 18th International Conference on Electrical Engineering, Computing Science and Automatic Control (CCE)},
  pages        = {1--5},
  year         = {2021},
  organization = {IEEE}
}`,
};


/* ===== COPY BIBTEX ===== */
function copyBib(id) {
    const entry = bibtexEntries[id];
    if (!entry) return;

    navigator.clipboard.writeText(entry)
        .then(() => alert('BibTeX copied to clipboard. Thank you for citing!'))
        .catch(() => {
            // Fallback for browsers without clipboard API
            const ta = document.createElement('textarea');
            ta.value = entry;
            ta.style.position = 'fixed';
            ta.style.opacity  = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            alert('BibTeX copied to clipboard. Thank you for citing!');
        });
}
