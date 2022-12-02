import React, { forwardRef, useCallback, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cn from 'classnames';

import { SongColor } from '../../shared/types';

import { Note } from '../svg';
import { DefaultCircle } from './DefaultCircle';
import { GradientCircle } from './GradientCircle';
import './disc.css';

type Props = {
  colors?: SongColor[];
  isAnimate?: boolean;
  borderColor?: string;
  onRendered?: () => void;
};

const Disc = forwardRef<HTMLDivElement, Props>(
  ({ colors = undefined, isAnimate = false, borderColor = '', onRendered }, ref) => {
    const [isRendering, setIsRendering] = useState(true);

    const angle = colors ? (colors.reduce((acc, color) => acc + color) / colors.length) * 360 : 0;

    const handleRendered = async () => {
      setIsRendering(false);
      onRendered?.();
    };

    const gradientCircleFallbackRender = useCallback(() => <DefaultCircle angle={angle} />, [angle]);

    return (
      <div className={cn('clef-disc', { 'clef-disc_animate': isAnimate })}>
        <div ref={ref} className="clef-disc__ref-container">
          <div className="clef-disc__draw-container" style={{ transform: `rotate(${angle}deg)` }}>
            <ErrorBoundary fallbackRender={gradientCircleFallbackRender}>
              {(isRendering || colors === undefined) && <DefaultCircle angle={angle} />}
              {colors !== undefined && <GradientCircle colors={colors} onRendered={handleRendered} />}
            </ErrorBoundary>
            <div className="clef-disc__note">
              <Note />
            </div>
          </div>
        </div>
        {borderColor !== '' && <div className="clef-disc__border" style={{ borderColor }} />}
      </div>
    );
  }
);

export { Disc, Props };
