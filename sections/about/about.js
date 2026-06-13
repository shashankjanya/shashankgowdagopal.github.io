export default {
  id: 'about',
  title: 'About Me',
  render(container) {
    container.innerHTML = `
      <div class="about-content">
        <div class="about-text">
          <p>
            I am an Aerospace Engineering student specializing in UAV control and flight dynamics. 
            My passion lies at the intersection of aerodynamic design, control theory, and embedded systems software. 
            I focus on bridging the gap between flight simulation models and real-world hardware deployments.
          </p>
          <p>
            Over the course of my academic career, I have worked on custom flight controller architectures, attitude control loop tuning, and autonomous payload deployment mechanisms. I enjoy taking flight control concepts from theory and simulation (Simulink/MATLAB) and deploying them to physical UAV hardware (PX4/C++).
          </p>
          
          <div class="skills-section-inside">
            
            <h3 class="subsection-title">Technical Expertise</h3>
            <div class="skills-grid-inside">
              <div class="skill-col">
                <h4>Languages</h4>
                <ul class="skill-list-inside">
                  <li>Python</li>
                  <li>MATLAB</li>
                </ul>
              </div>
             <div class="skill-col">
                <h4>Tools & Systems</h4>
                <ul class="skill-list-inside">
                  <li>Simulink</li>
                  <li>PX4 Autopilot Stack</li>
                  <li>Git / GitHub Version Control</li>
                  <li>SolidWorks</li>
                </ul>
              </div>
              <div class="skill-col">
                <h4>Engineering Domains</h4>
                <ul class="skill-list-inside">
                  <li>Flight Dynamics Modeling</li>
                  <li>Flight Controller Tuning</li>
                  <li>Piloting Fixed Wing & Rotary Wing UAVs</li>
                  <li>UAV Flight Log Analysis</li>
                  <li>UAV Sizing & Performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-img-container">
          <div class="about-img-wrapper">
            <div class="about-img-fallback">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" width="80" height="80">
                <circle cx="50" cy="35" r="15" stroke-width="2"/>
                <path d="M25 80c0-12 10-18 25-18s25 6 25 18" stroke-width="2"/>
                <circle cx="50" cy="50" r="45" stroke-width="1" stroke-dasharray="3 3"/>
              </svg>
              <span>Aerospace Engineer</span>
            </div>
            <img src="sections/about/pic.jpg" alt="Profile Picture" class="about-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
          </div>
        </div>
      </div>
    `;
  }
};
