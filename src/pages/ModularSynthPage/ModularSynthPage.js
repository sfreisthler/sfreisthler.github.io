import './ModularSynthPage.css';
import modularSynthSvg from '../../assets/images/modular-synth.svg';
import Section from '../../components/Section/Section';
import PageHeader from '../../components/PageHeader/PageHeader';


function ModularSynthPage() {
	return (
		<div>

		<PageHeader title="DIY Modular Synth Build" backLink="/" />
		
		<img
			src={modularSynthSvg}
			alt="Modular Synth"
			className="modular-synth-image"
		/>

		<Section id="overview" title="Overview">
        <p>
          Welcome to my modular synth build! In this overview, I’ll explain why I chose
          Eurorack format, what sonic palette I’m aiming for, and how the overall layout
          came together. Over time, I’ll add more details under each subsection (Case,
          Power, Clock, etc.), but for now this is the high‐level story of the rack.
        </p>
      </Section>
	  </div>
		
		
	);
}

export default ModularSynthPage;