import React, { FC } from 'react';

import { angleOffset, defaultColors, transitionAngle } from '../constants';
import './defaultCircle.css';

type Props = {
  angle: number;
};

const DefaultCircle: FC<Props> = ({ angle }) => {
  const defaultCircleGradient = `
    conic-gradient(from ${angle - angleOffset}deg, 
    ${defaultColors.light}, ${defaultColors.dark} ${360 - transitionAngle}deg, ${defaultColors.light} 360deg
  `;

  return (
    <div
      className="clef-default-circle"
      style={{ background: defaultCircleGradient, transform: `rotate(-${angle}deg)` }}
    />
  );
};

export { DefaultCircle };
