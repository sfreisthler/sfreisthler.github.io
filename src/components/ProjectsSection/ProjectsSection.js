import './ProjectsSection.css';
import { Link } from 'react-router-dom';

const projects = [
    {
      name: 'Modular Synth',
      description: 'A DIY Modular synth',
      route: '/modular-synth'
    }
  ];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <hr class="solid"></hr>

      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.route} className="project-item">
            <Link to={project.route} className="project-link">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
     
    </section>
  );
}