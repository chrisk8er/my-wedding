/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ParallaxLayer } from '@react-spring/parallax';

type ContentProps = {
  speed: number;
  offset: number;
  children: React.ReactNode;
  className?: string;
  factor?: number;
};

var randomColor = Math.floor(Math.random() * 16777215).toString(16);

const Content = ({
  speed,
  offset,
  children,
  className = ``,
  factor = 1,
}: ContentProps) => (
  <ParallaxLayer
    sx={{
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
      // backgroundColor: `#${randomColor}`,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
);

export default Content;
