import React, { forwardRef, useCallback, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cn from 'classnames';

import { SongColor } from '../../shared/types';

import { Note } from '../svg';
import { DefaultCircle } from './DefaultCircle';
import { GradientCircle } from './GradientCircle';
import { OptimizedGradientCircle } from './OptimizedGradientCircle';
import './disc.css';

type Props = {
  colors?: SongColor[];
  isAnimate?: boolean;
  borderColor?: string;
  size?: 'small' | 'normal-responsive';
  optimized?: boolean;
  onRendered?: () => void;
};

const Disc = forwardRef<HTMLDivElement, Props>(
  (
    {
      colors = undefined,
      isAnimate = false,
      borderColor = '',
      size = 'normal-responsive',
      optimized = false,
      onRendered,
    },
    ref
  ) => {
    const [isRendering, setIsRendering] = useState(true);

    const angle = colors ? (colors.reduce((acc, color) => acc + color) / colors.length) * 360 : 0;

    const handleRendered = async () => {
      setIsRendering(false);
      onRendered?.();
    };

    const gradientCircleFallbackRender = useCallback(() => <DefaultCircle angle={angle} />, [angle]);

    return (
      <div className={cn('clef-disc', { 'clef-disc_animate': isAnimate, 'clef-disc_size_small': size === 'small' })}>
        <div ref={ref} className="clef-disc__ref-container">
          <div className="clef-disc__draw-container" style={{ transform: `rotate(${angle}deg)` }}>
            {colors === undefined ? (
              <DefaultCircle angle={angle} />
            ) : (
              <>
                {optimized ? (
                  <OptimizedGradientCircle colors={colors} angle={angle} />
                ) : (
                  <ErrorBoundary fallbackRender={gradientCircleFallbackRender}>
                    {isRendering && <DefaultCircle angle={angle} />}
                    <GradientCircle colors={colors} onRendered={handleRendered} />
                  </ErrorBoundary>
                )}
              </>
            )}
            <div className="clef-disc__note-container">
              <div className="clef-disc__note">
                <Note />
              </div>
            </div>
          </div>
        </div>
        {borderColor !== '' && <div className="clef-disc__border" style={{ borderColor }} />}
      </div>
    );
  }
);

export { Disc, Props };
