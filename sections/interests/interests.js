export default {
  id: 'interests',
  title: 'Interests & Hobbies',
  render(container) {
    container.innerHTML = `
      <div class="interests-content">
        <div class="interests-grid">
          
          <div class="interest-card">
            <div class="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <h3>Autonomous Systems</h3>
            <p>Fascinated by UAV swarm robotics, automated collision avoidance path-planning, and deploying deep learning on low-power embedded microcontrollers for drone navigation.</p>
          </div>

          <div class="interest-card">
            <div class="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3>RC Modeling & Flight</h3>
            <p>Active builder and pilot of radio-controlled gliders, custom fixed-wing model aircraft, and FPV quadcopters. Testing out control loop responses in manual pilot modes.</p>
          </div>

          <div class="interest-card">
            <div class="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3>Computational Fluid Dynamics</h3>
            <p>Exploring complex aerodynamic flows around non-standard lifting configurations, using simulation suites like OpenFOAM and XFLR5 to analyze pressure distributions.</p>
          </div>

          <div class="interest-card">
            <div class="interest-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <h3>Aviation Photography</h3>
            <p>Capturing structural details of historical aircraft at air museums and tracking high-speed maneuvers at air shows, focusing on aviation design and angles.</p>
          </div>

        </div>
      </div>
    `;
  }
};
