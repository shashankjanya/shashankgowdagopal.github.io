// Shared helper — builds a compact carousel for a given id and image list
function buildCarousel(id, images) {
  const slides = images.map(({ src, alt, label }) => `
    <div class="carousel-slide">
      <div class="carousel-fallback">
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor">
          <rect x="10" y="10" width="140" height="80" rx="3" stroke-width="1"/>
          <line x1="10" y1="32" x2="150" y2="32" stroke-width="0.5" stroke-dasharray="4 3"/>
          <circle cx="80" cy="62" r="14" stroke-width="1"/>
          <line x1="70" y1="62" x2="90" y2="62" stroke-width="1"/>
          <line x1="80" y1="52" x2="80" y2="72" stroke-width="1"/>
        </svg>
        <span>${label}</span>
      </div>
      <img src="${src}" alt="${alt}" class="carousel-img"
           onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
    </div>`).join('');

  return `
    <div class="carousel compact-carousel" id="${id}">
      <div class="carousel-track">${slides}</div>
      <button class="carousel-nav prev">&#10094;</button>
      <button class="carousel-nav next">&#10095;</button>
      <div class="carousel-indicators"></div>
    </div>`;
}

// Project data — add/edit entries here
const projects = [
  {
    id: 'proj-sae-aero-2023',
    label: 'SAE Aero Design Challenge 2023',
    title: 'STOL UAV for Large-Volume Payloads',
    desc: 'Served as Flight Mechanics Head to design a tandem-wing, twin-prop UAV with internal payload carriage and STOL capabilities. Maximized lift by integrating novel high-lift devices and aero-propulsive coupling effects.',
    tags: ['Tandem-Wing', 'STOL', 'Aero-Propulsive Coupling'],
    images: [
      { src: 'sections/projects/pic/adcw_1.jpg', alt: 'STOL UAV CAD', label: 'UAV CAD Model' },
      // { src: 'sections/projects//images/sae_aero_flight.png', alt: 'STOL UAV Flight', label: 'Flight Testing' }
    ]
  },
  {
    id: 'proj-aerothon',
    label: 'SAE INDIA AeroTHON 2023',
    title: 'Rotary-Wing UAV for Manual and Autonomous Payload Delivery',
    desc: 'Led technical design and piloted a quadcopter for autonomous and manual payload delivery. Executed UAV sizing, CAD development, avionics integration, and controller tuning. Integrated FPV and image processing systems, resulting in the Best Manual Flight Award.',
    tags: ['CAD', 'Avionics Integration', 'Image Processing', 'Controller Tuning', 'FPV'],
    images: [
      { src: 'sections/projects/pic/aerothon_2_1.jpg', alt: 'AeroTHON CAD', label: 'Payload Mechanism CAD' },
      // { src: 'sections/projects/images/aerothon_flight.png', alt: 'AeroTHON Flight', label: 'Competition Flight' },
    ],
  },
  {
    id: 'proj-saeiss-aero-2022',
    label: 'SAEISS Aero Design Challenge 2022',
    title: 'Fixed-Wing UAV Optimized for High Payload Fraction and Rapid Assembly',
    desc: 'Designed an RC plane optimized for beginner pilots, incorporating trade-off studies between aircraft size and payload fraction. Led the fabrication process including laser cutting and 3D printing, securing All India Rank 8 as Team Leader and Pilot.',
    tags: ['Fixed-Wing', 'Payload Fraction', 'Trade-off Studies', 'Laser Cutting', '3D Printing'],
    images: [
      { src: 'sections/projects/pic/adc_1.png', alt: 'SAEISS UAV CAD', label: 'UAV CAD Model' },
      // { src: 'sections/projects/images/saeiss_aero_flight.png', alt: 'SAEISS UAV Flight', label: 'Flight Testing' }
    ]
  }
];

export default {
  id: 'projects',
  title: 'Selected Projects',

  render(container) {
    container.innerHTML = projects.map((p, i) => `
      <div class="thesis-entry project-entry">

        <!-- Left: text write-up -->
        <div class="thesis-entry-text">
          <span class="thesis-label">${p.label}</span>
          <h3 class="thesis-entry-title">${p.title}</h3>
          <p class="thesis-entry-writeup">${p.desc}</p>
          <ul class="project-tech-list">
            ${p.tags.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>

        <!-- Right: image slideshow -->
        <div class="thesis-entry-visual">
          ${buildCarousel(p.id, p.images)}
        </div>

      </div>
      ${i < projects.length - 1 ? '<hr class="thesis-divider">' : ''}
    `).join('');
  },
};
