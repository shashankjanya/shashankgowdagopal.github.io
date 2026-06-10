import about from './sections/about/about.js';
import thesis from './sections/thesis/thesis.js';
import projects from './sections/projects/projects.js';
import interests from './sections/interests/interests.js';
import contact from './sections/contact/contact.js';

// Helper for section numbers
function getSectionNumber(id) {
    const numbers = {
        about: '01.',
        thesis: '02.',
        projects: '03.',
        interests: '04.',
        contact: '05.'
    };
    return numbers[id] || '';
}

// Carousel Class Implementation
class Carousel {
    constructor(element) {
        this.element = element;
        this.track = element.querySelector('.carousel-track');
        this.slides = Array.from(this.track.children);
        this.nextButton = element.querySelector('.next');
        this.prevButton = element.querySelector('.prev');
        this.dotsContainer = element.querySelector('.carousel-indicators');

        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.autoPlayInterval = null;

        if (this.slideCount <= 1) {
            if (this.nextButton) this.nextButton.style.display = 'none';
            if (this.prevButton) this.prevButton.style.display = 'none';
            return;
        }

        this.initIndicators();
        this.addEventListeners();
        this.startAutoPlay();
    }

    initIndicators() {
        if (!this.dotsContainer) return;
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-indicator');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.stopAutoPlay();
            });
            this.dotsContainer.appendChild(dot);
        });
        this.dots = Array.from(this.dotsContainer.children);
    }

    updateIndicators() {
        if (!this.dots) return;
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    goToSlide(index) {
        if (index < 0) index = this.slideCount - 1;
        if (index >= this.slideCount) index = 0;

        this.currentIndex = index;
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.updateIndicators();
    }

    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.goToSlide(this.currentIndex - 1);
    }

    startAutoPlay() {
        // Stagger autoplay delay slightly to prevent synchronized motion
        const delay = 4000 + Math.random() * 2000;
        this.autoPlayInterval = setInterval(() => this.nextSlide(), delay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    addEventListeners() {
        if (this.nextButton) {
            this.nextButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.nextSlide();
                this.stopAutoPlay();
            });
        }

        if (this.prevButton) {
            this.prevButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.prevSlide();
                this.stopAutoPlay();
            });
        }

        this.element.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.element.addEventListener('mouseleave', () => this.startAutoPlay());

        // Open Lightbox on image clicks
        this.slides.forEach(slide => {
            const img = slide.querySelector('.carousel-img');
            if (img) {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', () => {
                    openLightbox(img.src, img.alt);
                });
            }
        });
    }
}

// Lightbox variables & controls
let lightbox, lightboxImg;
function setupLightbox() {
    lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <img src="" alt="" class="lightbox-img">
    `;
    document.body.appendChild(lightbox);

    lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
}

function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Orchestrator initialization
function initializePortfolio() {
    // 1. Render Section Modules
    const sections = [about, thesis, projects, interests, contact];
    sections.forEach(sec => {
        const container = document.getElementById(sec.id);
        if (container) {
            const num = getSectionNumber(sec.id);
            container.innerHTML = `
                <h2 class="section-title">
                    <span class="number">${num}</span>
                    ${sec.title}
                </h2>
                <div class="section-body"></div>
            `;
            const body = container.querySelector('.section-body');
            sec.render(body);
            if (sec.init) sec.init();
        }
    });

    // 2. Instantiate Lightbox
    setupLightbox();

    // 3. Instantiate Carousels
    document.querySelectorAll('.carousel').forEach(carousel => {
        new Carousel(carousel);
    });

    // 4. Register Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 5. Navbar shadow / shrinking scroll handler
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.15)';
            navbar.style.padding = '0.8rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.25rem 0';
        }
    });
}

// Bulletproof document load check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}
