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
    id: 'proj-pid',
    label: 'Project 01',
    title: 'Custom PID Flight Controller',
    desc: 'Developed a custom attitude and rate flight controller from scratch. Cascaded PID control in C++ with Kalman-filter sensor fusion to suppress accelerometer and gyroscope noise.',
    tags: ['C++', 'MATLAB', 'Embedded', 'Sensor Fusion'],
    images: [
      { src: 'sections/projects/images/pid_controller_design.png', alt: 'PID Design', label: 'Control Loop Diagram' },
      { src: 'sections/projects/images/pid_hardware.png',          alt: 'PID Hardware', label: 'Hardware Stack' },
    ],
  },
  {
    id: 'proj-aerothon',
    label: 'Project 02',
    title: 'AeroTHON — Autonomous Payload Delivery',
    desc: 'Designed and built a competition quadcopter, winning Best Manual Flight Award. Custom payload-release mechanism verified via thrust/power sizing equations.',
    tags: ['SolidWorks', 'Avionics', 'UAV Sizing', 'SITL'],
    images: [
      { src: 'sections/projects/images/aerothon_cad.png',   alt: 'AeroTHON CAD',   label: 'Payload Mechanism CAD' },
      { src: 'sections/projects/images/aerothon_flight.png', alt: 'AeroTHON Flight', label: 'Competition Flight' },
    ],
  },
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
