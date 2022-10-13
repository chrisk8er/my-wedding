/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Lottie from 'lottie-react';
import { ParallaxLayer } from '@react-spring/parallax';

import { VisibilitySensor } from './visibility-sensor';
import { WatercolorBg } from './watercolor-bg';

interface BackgroundProps {
  offset: number;
  factor?: number;
}

export const Background = ({ offset, factor = 1 }: BackgroundProps) => {
  return (
    <ParallaxLayer speed={0} offset={offset} factor={factor}>
      <div
        sx={{
          display: 'block',
          position: `relative`,
          width: `100vw`,
          height: `100vh`,
        }}
      >
        <div
          sx={{
            position: 'absolute',
            left: '-25rem',
            bottom: '-20rem',
            rotate: '268deg',
          }}
        >
          <WatercolorBg />
        </div>
      </div>
      <div
        sx={{
          display: 'block',
          position: `relative`,
          width: `100vw`,
          height: `150vh`,
        }}
      >
        <div
          sx={{
            position: 'absolute',
            right: '-26rem',
            top: '-3rem',
            rotate: '89deg',
          }}
        >
          <WatercolorBg />
        </div>

        <div
          sx={{
            position: 'absolute',
            left: '-27rem',
            bottom: '-16rem',
            rotate: '251deg',
          }}
        >
          <WatercolorBg />
        </div>

        <div
          sx={{
            position: 'absolute',
            right: '-25rem',
            bottom: '-35rem',
            rotate: '92deg',
          }}
        >
          <WatercolorBg />
        </div>
      </div>

      <div
        sx={{
          display: 'block',
          position: `relative`,
          width: `100vw`,
          height: `150vh`,
        }}
      >
        <div
          sx={{
            position: 'absolute',
            left: '-27rem',
            top: '5rem',
            rotate: '251deg',
          }}
        >
          <WatercolorBg />
        </div>
        <div
          sx={{
            position: 'absolute',
            right: '-27rem',
            bottom: '-16rem',
            rotate: '251deg',
          }}
        >
          <WatercolorBg />
        </div>
      </div>

      <div
        sx={{
          display: 'block',
          position: `relative`,
          width: `100vw`,
          height: `150vh`,
        }}
      >
        <div
          sx={{
            position: 'absolute',
            left: '-27rem',
            top: '-16rem',
            rotate: '251deg',
          }}
        >
          <WatercolorBg />
        </div>
        <div
          sx={{
            position: 'absolute',
            right: '-27rem',
            bottom: '-16rem',
            rotate: '251deg',
          }}
        >
          <WatercolorBg />
        </div>
      </div>
      {/* <div
        sx={{
          display: 'block',
          position: `relative`,
          width: `100vw`,
          height: `150vh`,
        }}
      >
        <div
          sx={{
            position: 'absolute',
            left: '0rem',
            bottom: '0rem',
            rotate: '251deg',
          }}
        >
          <WatercolorBg />
        </div>
      </div> */}
    </ParallaxLayer>
  );
};
