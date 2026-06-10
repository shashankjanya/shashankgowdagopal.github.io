export default {
  id: 'projects',
  title: 'Selected Projects',
  render(container) {
    container.innerHTML = `
      <div class="projects-grid">
        
        <!-- Project 1: PID Controller -->
        <div class="project-card">
          <div class="carousel" id="project-pid-carousel">
            <div class="carousel-track">
              <div class="carousel-slide">
                <div class="carousel-fallback">
                  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
                    <!-- Control Loop Block Diagram -->
                    <rect x="15" y="45" width="30" height="25" rx="3" stroke-width="1.5"/>
                    <text x="23" y="60" fill="currentColor" font-size="8" font-family="monospace">Error</text>
                    <path d="M45 57 L 65 57" stroke-width="1.5"/>
                    <rect x="65" y="30" width="40" height="55" rx="3" stroke-width="1.5"/>
                    <text x="70" y="50" fill="currentColor" font-size="8" font-family="monospace">Cascaded</text>
                    <text x="75" y="62" fill="currentColor" font-size="8" font-family="monospace">PID</text>
                    <path d="M105 57 L 125 57" stroke-width="1.5"/>
                    <rect x="125" y="45" width="45" height="25" rx="3" stroke-width="1.5"/>
                    <text x="130" y="60" fill="currentColor" font-size="8" font-family="monospace">Actuators</text>
                    <!-- Feedback Loop -->
                    <path d="M147 70 L 147 95 L 30 95 L 30 70" stroke-width="1" stroke-dasharray="2 2"/>
                    <text x="65" y="90" fill="currentColor" font-size="7" font-family="monospace">Kalman Filter Feedback</text>
                  </svg>
                  <span>Control Loop Diagram</span>
                </div>
                <img src="sections/projects/images/pid_controller_design.png" alt="PID Design" class="carousel-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
              </div>
              <div class="carousel-slide">
                <div class="carousel-fallback">
                  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
                    <!-- Electronics board -->
                    <rect x="30" y="20" width="140" height="80" rx="6" stroke-width="1.5"/>
                    <rect x="40" y="30" width="35" height="35" rx="2" stroke-width="1"/>
                    <text x="45" y="50" fill="currentColor" font-size="6" font-family="monospace">MCU</text>
                    <rect x="90" y="30" width="25" height="20" rx="1" stroke-width="1"/>
                    <text x="94" y="42" fill="currentColor" font-size="5" font-family="monospace">IMU</text>
                    <circle cx="150" cy="40" r="8" stroke-width="1"/>
                    <!-- Traces -->
                    <path d="M75 40 L 90 40 M75 48 L 90 48" stroke-width="0.5"/>
                    <path d="M102 50 L 102 70 L 130 70" stroke-width="0.5"/>
                    <rect x="130" y="65" width="30" height="25" rx="2" stroke-width="1"/>
                    <text x="135" y="80" fill="currentColor" font-size="5" font-family="monospace">ESC Driver</text>
                  </svg>
                  <span>Hardware Stack & IMU Integration</span>
                </div>
                <img src="sections/projects/images/pid_hardware.png" alt="PID Hardware" class="carousel-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
              </div>
            </div>
            <button class="carousel-nav prev">&#10094;</button>
            <button class="carousel-nav next">&#10095;</button>
            <div class="carousel-indicators"></div>
          </div>
          <div class="project-content">
            <h3 class="project-title">Custom PID Flight Controller</h3>
            <p class="project-desc">
              Developed a custom attitude and rate flight controller from scratch. Implemented a cascaded PID control scheme in C++ and integrated a sensor fusion algorithm (Kalman Filter) to filter high-frequency noise from accelerometer and gyroscope inputs.
            </p>
            <ul class="project-tech-list">
              <li>C++</li>
              <li>MATLAB</li>
              <li>Embedded Systems</li>
              <li>Sensor Fusion</li>
            </ul>
          </div>
        </div>

        <!-- Project 2: AeroTHON Payload Delivery -->
        <div class="project-card">
          <div class="carousel" id="project-aerothon-carousel">
            <div class="carousel-track">
              <div class="carousel-slide">
                <div class="carousel-fallback">
                  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
                    <!-- Quadcopter top-down -->
                    <circle cx="100" cy="60" r="16" stroke-width="1.5"/>
                    <line x1="60" y1="20" x2="140" y2="100" stroke-width="2"/>
                    <line x1="60" y1="100" x2="140" y2="20" stroke-width="2"/>
                    <!-- Propellers -->
                    <ellipse cx="60" cy="20" rx="12" ry="3" stroke-width="1"/>
                    <ellipse cx="140" cy="20" rx="12" ry="3" stroke-width="1"/>
                    <ellipse cx="60" cy="100" rx="12" ry="3" stroke-width="1"/>
                    <ellipse cx="140" cy="100" rx="12" ry="3" stroke-width="1"/>
                    <!-- Payload hook -->
                    <rect x="94" y="54" width="12" height="12" rx="2" fill="none" stroke-width="1" stroke-dasharray="2 2"/>
                    <text x="91" y="74" fill="currentColor" font-size="5" font-family="'Inter', sans-serif">Payload Box</text>
                  </svg>
                  <span>Payload Mechanism CAD</span>
                </div>
                <img src="sections/projects/images/aerothon_cad.png" alt="AeroTHON CAD" class="carousel-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
              </div>
              <div class="carousel-slide">
                <div class="carousel-fallback">
                  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor">
                    <!-- Trophy/Success graphic -->
                    <path d="M80 30 L 120 30 L 115 75 C 115 85, 85 85, 85 75 Z" stroke-width="1.5"/>
                    <path d="M100 82 L 100 95 M85 95 L 115 95" stroke-width="1.5"/>
                    <path d="M80 40 H 72 C 67 40, 67 50, 72 50 H 80 M120 40 H 128 C 133 40, 133 50, 128 50 H 120" stroke-width="1"/>
                    <text x="80" y="112" fill="var(--accent)" font-size="7" font-family="'Inter', sans-serif">Best Manual Flight Award</text>
                  </svg>
                  <span>Competition & Flight Testing</span>
                </div>
                <img src="sections/projects/images/aerothon_flight.png" alt="AeroTHON Flight" class="carousel-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
              </div>
            </div>
            <button class="carousel-nav prev">&#10094;</button>
            <button class="carousel-nav next">&#10095;</button>
            <div class="carousel-indicators"></div>
          </div>
          <div class="project-content">
            <h3 class="project-title">AeroTHON Autonomous Payload Delivery</h3>
            <p class="project-desc">
              Designed and manufactured an autonomous quadcopter for AeroTHON competition, winning the "Best Manual Flight Award". Integrated an electronic payload release system coupled with custom sizing equations to verify battery-to-thrust power efficiency during loading cycles.
            </p>
            <ul class="project-tech-list">
              <li>SolidWorks</li>
              <li>Avionics</li>
              <li>UAV Sizing</li>
              <li>SITL Simulation</li>
            </ul>
          </div>
        </div>

      </div>
    `;
  }
};
