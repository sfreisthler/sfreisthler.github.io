// src/pages/ModularSynthPage/ModularSynthPage.js
import React, { useRef, useEffect } from 'react';
import './ModularSynthPage.css';
import { ReactComponent as SynthSvg } from '../../assets/images/modular-synth.svg';
import Section from '../../components/Section/Section';
import PageHeader from '../../components/PageHeader/PageHeader';

const PART_ID   = 'behringer-cp1a';
const TARGET_ID = 'behringer-cp1a-section';

function ModularSynthPage() {
  // Plain JS – no generics here, so ESLint won't complain.
  // If you still want editor/type hints, you can add:
  // /** @type {React.RefObject<SVGSVGElement>} */
  const svgRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const part = svgEl.getElementById(PART_ID);
    if (!part) return;

    part.style.cursor = 'pointer';

    const onClick = () => {
      const target = document.getElementById(TARGET_ID);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    part.addEventListener('click', onClick);

    return () => {
      part.removeEventListener('click', onClick);
    };
  }, [svgRef]);

  return (
    <div>
      <PageHeader title="DIY Modular Synth Build" backLink="/" />

      <SynthSvg
        ref={svgRef}
        className="modular-synth-image"
        aria-label="Modular Synth"
      />

      <Section id="overview" title="Overview">
        <p>…overview text…</p>
      </Section>

      <Section id={TARGET_ID} title="Behringer CP1-A">
        <p>Here’s the power module I’m using…</p>
      </Section>

      {/* …other sections… */}
    </div>
  );
}

export default ModularSynthPage;