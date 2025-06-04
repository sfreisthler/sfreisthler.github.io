import './ModularSynthPage.css';
import modularSynthSvg from '../../assets/images/modular-synth.svg';


function ModularSynthPage() {
	return (
		<img
			src={modularSynthSvg}
			alt="Modular Synth"
			className="modular-synth-image"
		/>
	);
}

export default ModularSynthPage;