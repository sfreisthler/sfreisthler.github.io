import './ProjectsSection.css';
import { Link } from 'react-router-dom';
import modularSynthSvg from '../../assets/images/modular-synth.svg';


export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <hr class="solid"></hr>

      <Link to="/modular-synth">
      <img
        src={modularSynthSvg}
        alt="Modular Synth"
        className="modular-synth-image"
      />
      </Link>
     
    </section>
  );
}