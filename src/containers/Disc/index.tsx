import React, { FC, useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';

import { isErrorWithMessage, SongColor } from '../../shared/types';
import { Disc as DiscComponent } from '../../components';
import { getColorsByAssetID } from '../../shared/utils';

type Props = {
  assetID: string;
  isAnimate?: boolean;
  borderColor?: string;
  onImageReady?: (image: string) => void;
};

const Disc: FC<Props> = ({ assetID, isAnimate = false, borderColor = '', onImageReady = undefined }) => {
  const [colors, setColors] = useState<SongColor[]>();
  const discContainerRef = useRef<HTMLDivElement>(null);

  const handleRendered = async () => {
    if (discContainerRef.current === null || onImageReady === undefined) return;
    try {
      const canvas = await html2canvas(discContainerRef.current, { backgroundColor: 'rgba(0, 0, 0, 0)' });
      const image = canvas.toDataURL('image/png', 0.9);
      onImageReady(image);
    } catch (error) {
      if (isErrorWithMessage(error)) {
        // eslint-disable-next-line no-console
        console.log(`Error: ${error.message}`);
      } else {
        // eslint-disable-next-line no-console
        console.log(`Unknown render image error: ${JSON.stringify(error)}`);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getColorsByAssetID(assetID);
        setColors(data);
      } catch (err) {
        if (isErrorWithMessage(err)) {
          // eslint-disable-next-line no-console
          console.log(`Error: ${err.message}`);
        } else {
          // eslint-disable-next-line no-console
          console.log(`Unknown error: ${JSON.stringify(err)}`);
        }
      }
    };

    fetchData();
  }, [assetID]);

  return (
    <DiscComponent
      ref={discContainerRef}
      colors={colors}
      isAnimate={isAnimate}
      borderColor={borderColor}
      onRendered={handleRendered}
    />
  );
};

export { Disc, Props };
