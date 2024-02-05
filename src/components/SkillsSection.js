import React from 'react';
import './SkillsSection.css';
import nodejs from '../static/images/nodejs-logo.png';
import linux from '../static/images/linux-logo.png';
import openai from '../static/images/openai-logo.png';
import postgres from '../static/images/postgres-logo.png';
import java from '../static/images/java-logo.png';
import python from '../static/images/python-logo.png';
import c from '../static/images/c-language.png';
import aws from '../static/images/aws-logo.png';
import LogoCard from './LogoCard';

const SkillsSection = () => {

    const logosData = [
        { logoSrc: nodejs, captionText: 'NodeJS' },
        { logoSrc: linux, captionText: 'Linux' },
        { logoSrc: openai, captionText: 'OpenAI' },
        { logoSrc: postgres, captionText: 'PostgreSQL'},
        { logoSrc: java, captionText: 'Java'},
        { logoSrc: python, captionText: 'Python'},
        { logoSrc: c, captionText: 'C'},
        { logoSrc: aws, captionText: 'AWS'},
      ];

  return (
    <div className="logo-grid">
      {logosData.map((logosData, index) => (
        <LogoCard key={index} logoSrc={logosData.logoSrc} captionText={logosData.captionText} />
      ))}
    </div>
  );
};

export default SkillsSection;