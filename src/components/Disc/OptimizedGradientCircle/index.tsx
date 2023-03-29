import React, { FC } from 'react';

import { SongColor } from '../../../shared/types';
import { angleOffset } from '../constants';
import { getMultiColorGradient, getOneColorGradient } from '../utils';
import './optimizedGradientCircle.css';

type Props = {
  colors: SongColor[];
  angle: number;
};

const OptimizedGradientCircle: FC<Props> = ({ colors, angle }) => {
  const gradient = `conic-gradient(from ${angle - angleOffset}deg, ${
    colors.find(color => color !== colors[0]) !== undefined
      ? getMultiColorGradient(colors)
      : getOneColorGradient(colors[0])
  })`;

  return (
    <div
      className="clef-optimized-gradient-circle"
      style={{ background: gradient, transform: `rotate(-${angle}deg)` }}
    />
  );
};

export { OptimizedGradientCircle };
