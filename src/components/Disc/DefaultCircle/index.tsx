import React, { FC } from 'react';

import { defaultColors } from '../constants';
import './defaultCircle.css';

type Props = {
  angle: number;
};

const DefaultCircle: FC<Props> = ({ angle }) => {
  const defaultCircleGradient = `
    conic-gradient(from ${angle - 77}deg, 
    ${defaultColors.light}, ${defaultColors.dark} 355deg, ${defaultColors.light} 360deg
  `;

  return <div className="clef-default-circle" style={{ background: defaultCircleGradient }} />;
};

export { DefaultCircle };
