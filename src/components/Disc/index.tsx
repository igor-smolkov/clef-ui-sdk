import React, { FC } from 'react';

import './disc.css'

type Props = {
  borderColor?: string;
}

const Disc: FC<Props> = ({ borderColor = '' }) => {
  return <div className="disc" style={{ borderColor }} />
};

export { Disc, Props };
