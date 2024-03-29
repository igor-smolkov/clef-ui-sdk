import p5Types from 'p5';
import chroma from 'chroma-js';

import { SongColor } from '../../../shared/types';
import { songColors, transitionAngle } from '../constants';

export const mapColors = (p5: p5Types, value: number, min: number, max: number, colors: string[]) => {
  const gradient = chroma.scale([...colors]).mode('rgb');
  const mixture = p5.map(value, min, max, 0, 1);
  return gradient(mixture).hex();
};

export const polar = (p5: p5Types, cx: number, cy: number, angle: number, dist: number) => ({
  x: cx + p5.cos(angle) * dist,
  y: cy + p5.sin(angle) * dist
});

export const conicalGradient = (
  p5: p5Types,
  density: number,
  radius: number,
  from: number,
  to: number,
  colors: string[]
) => {
  for (let i = 0; i < density; i += 1) {
    const color = mapColors(p5, i, 0, density - 1, colors);
    const angle = p5.map(i, 0, density - 1, from, to);
    const point = polar(p5, 0, 0, angle, radius);
    p5.stroke(color);
    p5.line(0, 0, point.x, point.y);
  }
};

export const getOneColorGradient = (color: SongColor) => `
  ${songColors[color].light}, ${songColors[color].dark} ${360 - transitionAngle}deg, ${songColors[color].light} 360deg
`;

export const getMultiColorGradient = (colors: SongColor[]) => `
  ${songColors[colors[0]].light},
  ${colors.slice(1, colors.length - 2).map(color => songColors[color].middle)},
  ${songColors[colors[colors.length - 1]].dark} ${360 - transitionAngle}deg,
  ${songColors[colors[0]].light} 360deg
`;
