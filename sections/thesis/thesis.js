// Helper to build a thesis carousel HTML for a given thesis number and slide count
function buildCarousel(thesisNum, slideCount) {
  const slides = Array.from({ length: slideCount }, (_, i) => {
    const picName = `thesis_${thesisNum}_${i + 1}`;
    return `
      <div class="carousel-slide">
        <div class="carousel-fallback">
          <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
            <rect x="20" y="15" width="160" height="90" rx="4" stroke-width="1"/>
            <line x1="20" y1="45" x2="180" y2="45" stroke-width="0.5" stroke-dasharray="4 3"/>
            <circle cx="100" cy="72" r="18" stroke-width="1"/>
            <line x1="88" y1="72" x2="112" y2="72" stroke-width="1"/>
            <line x1="100" y1="60" x2="100" y2="84" stroke-width="1"/>
          </svg>
          <span>${picName}</span>
        </div>
        <img src="sections/thesis/images/${picName}.jpg"
             alt="${picName}"
             class="carousel-img"
             onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
      </div>`;
  });

  return `
    <div class="carousel thesis-carousel" id="thesis-${thesisNum}-carousel">
      <div class="carousel-track">
        ${slides.join('')}
      </div>
      <button class="carousel-nav prev">&#10094;</button>
      <button class="carousel-nav next">&#10095;</button>
      <div class="carousel-indicators"></div>
    </div>`;
}

export default {
  id: 'thesis',
  title: 'Thesis Work',

  render(container) {
    const theses = [
      {
        num: 1,
        label: "Master's Thesis",
        title: 'Implementation and Validation of a Detailed Tail Sizing Method and Application on Future Aircraft',
        writeup: 'Short description of the first thesis goes here. Provide a brief overview of the topic, methodology, and key outcomes. This should be 2–3 sentences.',
        abstract: "Traditional aircraft conceptual design relies heavily on empirical tail estimation methods. However, these methods are restricted to conventional configurations with strong correlations to historical datasets. For future concepts utilizing liquid hydrogen (LH2) as energy carrier, drastic shifts in geometric parameters and mass distributions render these rapid sizing methods inadequate. In light of this, my Master's thesis focused on developing and implementing a high-fidelity, stability and control (S&C) driven empennage sizing methodology into the Bauhaus Luftfahrt Aircraft Design Environment (BLADE). The core engineering tasks involved modeling the critical S&C constraints for both the longitudinal and directional planes, integrating semi-empirical aerodynamic prediction models based on DATCOM formulations, and writing comprehensive test functions to verify the Python module. The framework was successfully validated against publicly available aircraft data before being applied to novel LH2 configurations. Subsequent analytical studies focused on quantifying aircraft-level performance benefits compared to empirically sized baselines, and conducting numerical sensitivity analyses to evaluate the robustness of the implemented sizing assumptions.",
        tags: ['Aircraft Stability & Control', 'Empennage Sizing', 'LH2 Aircraft', 'DATCOM', 'Python', 'GitLab'],
        slides: 0,
      },
      {
        num: 2,
        label: 'Thesis II',
        title: 'Thesis Title Placeholder Two',
        writeup: 'Short description of the second thesis goes here. Provide a brief overview of the topic, methodology, and key outcomes. This should be 2–3 sentences.',
        abstract: 'Full abstract placeholder for Thesis II. Replace this with the complete abstract text. It should summarise the research problem, approach, experiments, results, and conclusions in sufficient detail for an academic reader.',
        tags: ['Keyword A', 'Keyword B', 'Keyword C'],
        slides: 0,
      },
      {
        num: 3,
        label: 'Thesis III',
        title: 'Thesis Title Placeholder Three',
        writeup: 'Short description of the third thesis goes here. Provide a brief overview of the topic, methodology, and key outcomes. This should be 2–3 sentences.',
        abstract: 'Full abstract placeholder for Thesis III. Replace this with the complete abstract text. It should summarise the research problem, approach, experiments, results, and conclusions in sufficient detail for an academic reader.',
        tags: ['Keyword A', 'Keyword B', 'Keyword C'],
        slides: 0,
      },
    ];

    const visibleTheses = theses.slice(0, 2);
    const hiddenTheses = theses.slice(2);

    function thesisCard(t) {
      return `
        <div class="thesis-entry" id="thesis-entry-${t.num}">

          <!-- Left: text write-up -->
          <div class="thesis-entry-text">
            <span class="thesis-label">${t.label}</span>
            <h3 class="thesis-entry-title">${t.title}</h3>
            <p class="thesis-entry-writeup">${t.writeup}</p>

            <!-- Keyword tags -->
            ${t.tags && t.tags.length ? `<ul class="project-tech-list thesis-tags">${t.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>` : ''}

            <!-- Expandable abstract -->
            <button class="abstract-toggle" data-target="abstract-${t.num}">
              Read More <span class="abstract-arrow">&#9660;</span>
            </button>
            <div class="abstract-body" id="abstract-${t.num}">
              <p>${t.abstract}</p>
            </div>
          </div>

          <!-- Right: image slideshow -->
          <div class="thesis-entry-visual">
            ${buildCarousel(t.num, t.slides)}
          </div>

        </div>`;
    }

    const visibleHTML = visibleTheses.map((t, i) =>
      thesisCard(t) + (i < visibleTheses.length - 1 ? '<hr class="thesis-divider">' : '')
    ).join('');

    const hiddenHTML = hiddenTheses.length ? `
      <hr class="thesis-divider thesis-divider-hidden" id="thesis-hidden-divider">
      <div class="thesis-hidden-section" id="thesis-hidden-section">
        ${hiddenTheses.map((t, i) =>
      thesisCard(t) + (i < hiddenTheses.length - 1 ? '<hr class="thesis-divider">' : '')
    ).join('')}
      </div>
      <div class="thesis-see-more-wrap">
        <button class="thesis-see-more-btn" id="thesis-see-more-btn">
          <span class="see-more-label">See more</span>
          <span class="see-more-arrow">&#9660;</span>
        </button>
      </div>` : '';

    container.innerHTML = visibleHTML + hiddenHTML;
  },

  init() {
    // Wire up "Read More" toggles
    document.querySelectorAll('.abstract-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const body = document.getElementById(targetId);
        const arrow = btn.querySelector('.abstract-arrow');
        const isOpen = body.classList.toggle('open');
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      });
    });

    // Wire up "See more" toggle for hidden theses
    const seeMoreBtn = document.getElementById('thesis-see-more-btn');
    const hiddenSection = document.getElementById('thesis-hidden-section');
    const hiddenDivider = document.getElementById('thesis-hidden-divider');
    if (seeMoreBtn && hiddenSection) {
      seeMoreBtn.addEventListener('click', () => {
        const isOpen = hiddenSection.classList.toggle('open');
        const arrow = seeMoreBtn.querySelector('.see-more-arrow');
        const label = seeMoreBtn.querySelector('.see-more-label');
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        label.textContent = isOpen ? 'See less' : 'See more';
        if (hiddenDivider) hiddenDivider.style.display = isOpen ? '' : 'none';
      });
      // Start with divider hidden
      if (hiddenDivider) hiddenDivider.style.display = 'none';
    }
  },
};
