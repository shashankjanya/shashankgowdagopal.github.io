export default {
  id: 'thesis',
  title: 'Thesis Work',
  render(container) {
    container.innerHTML = `
      <div class="thesis-content">
        <div class="thesis-text">
          <h3 class="thesis-heading">Design, Analysis and Control of a Tandem-Wing UAV</h3>
          <p class="thesis-abstract">
            Focused on maximizing aerodynamic efficiency and endurance, this research investigates the flight dynamics and control design of a tandem-wing configuration. Unlike conventional aircraft, the tandem-wing design presents unique pitching moment characteristics and aerodynamic couplings that require specialized control systems.
          </p>
          <div class="thesis-highlights">
            <div class="highlight-item">
              <span class="highlight-num">01</span>
              <div>
                <strong>6-DOF Mathematical Modeling</strong>
                <p>Derived a non-linear flight dynamics model of the tandem aircraft in Simulink, incorporating aerodynamic coefficient maps.</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-num">02</span>
              <div>
                <strong>Attitude Hold Controller</strong>
                <p>Designed a cascaded PID attitude control loop to stabilize pitching oscillations and maintain level flight under wind gust perturbations.</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-num">03</span>
              <div>
                <strong>Aerodynamic Optimization</strong>
                <p>Performed structural sizing, wing lift-drag analysis, and simulated actuator responses to verify stable control surface trim states.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="thesis-visual">
          <div class="carousel" id="thesis-carousel">
            <div class="carousel-track">
              <div class="carousel-slide">
                <div class="carousel-fallback">
                  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
                    <!-- Aerodynamics / Wing diagram -->
                    <path d="M30 80 C 50 40, 150 40, 170 80 C 150 90, 50 90, 30 80 Z" stroke-width="1.5"/>
                    <path d="M30 80 L 170 80" stroke-width="0.5" stroke-dasharray="3 3"/>
                    <path d="M100 20 L 100 100" stroke-width="0.5" stroke-dasharray="1 1"/>
                    <text x="105" y="30" fill="currentColor" font-size="7" font-family="'Inter', sans-serif">LIFT (L)</text>
                    <text x="105" y="98" fill="currentColor" font-size="7" font-family="'Inter', sans-serif">WEIGHT (W)</text>
                    <path d="M85 80 A 15 15 0 0 1 100 65" stroke-width="1" stroke="currentColor"/>
                    <text x="75" y="72" fill="currentColor" font-size="8" font-family="monospace">α</text>
                  </svg>
                  <span>Simulink 6-DOF Aerodynamic Model</span>
                </div>
                <img src="sections/thesis/images/simulink_model.png" alt="Simulink Model" class="carousel-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
              </div>
              <div class="carousel-slide">
                <div class="carousel-fallback">
                  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
                    <!-- Tandem Wing UAV CAD -->
                    <line x1="20" y1="60" x2="180" y2="60" stroke-width="2"/>
                    <!-- Front wing -->
                    <path d="M50 60 L 35 15 L 65 15 Z" fill="none" stroke-width="1.5"/>
                    <path d="M50 60 L 35 105 L 65 105 Z" fill="none" stroke-width="1.5"/>
                    <!-- Rear wing -->
                    <path d="M140 60 L 120 5 L 155 5 Z" fill="none" stroke-width="1.5"/>
                    <path d="M140 60 L 120 115 L 155 115 Z" fill="none" stroke-width="1.5"/>
                    <!-- Fuselage circle -->
                    <circle cx="95" cy="60" r="10" fill="none" stroke-width="1.5"/>
                  </svg>
                  <span>Tandem Wing CAD Layout</span>
                </div>
                <img src="sections/thesis/images/cad.png" alt="CAD Design" class="carousel-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
              </div>
              <div class="carousel-slide">
                <div class="carousel-fallback">
                  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
                    <!-- Chart plot -->
                    <path d="M25 15 L 25 105 L 185 105" stroke-width="1.5"/>
                    <path d="M25 95 Q 65 15, 105 75 T 175 45" stroke-width="2" style="stroke: var(--accent)"/>
                    <line x1="25" y1="45" x2="185" y2="45" stroke-width="0.5" stroke-dasharray="2 2"/>
                    <text x="120" y="38" fill="currentColor" font-size="7" font-family="'Inter', sans-serif">Target Setpoint</text>
                    <text x="80" y="90" fill="currentColor" font-size="7" font-family="'Inter', sans-serif">Pitch Response (θ)</text>
                  </svg>
                  <span>Attitude Hold Step Response</span>
                </div>
                <img src="sections/thesis/images/simulation.png" alt="Simulation Results" class="carousel-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
              </div>
            </div>
            <button class="carousel-nav prev">&#10094;</button>
            <button class="carousel-nav next">&#10095;</button>
            <div class="carousel-indicators"></div>
          </div>
        </div>
      </div>
    `;
  }
};
