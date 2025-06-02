import React from 'react';
import './SkillsSection.css';
import nodejs from '../../assets/images/nodejs-logo.png';
import linux from '../../assets/images/linux-logo.png';
import openai from '../../assets/images/openai-logo.png';
import postgres from '../../assets/images/postgres-logo.png';
import java from '../../assets/images/java-logo.png';
import python from '../../assets/images/python-logo.png';
import c from '../../assets/images/c-language.png';
import aws from '../../assets/images/aws-logo.png';
import LogoCard from '../LogoCard/LogoCard';

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