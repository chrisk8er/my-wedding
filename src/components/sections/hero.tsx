/** @jsx jsx */
import { Button, Container, jsx } from 'theme-ui';
import { IParallax, ParallaxLayer } from '@react-spring/parallax';

import Content from '../content';
import Cover from '../../assets/photos/cover.jpg';
import { getNameFromURL } from '../../utils/getNameFromUrl';
import React from 'react';
interface HeroSectionProps {
  offset: number;
  factor?: number;
  parallaxRef?: IParallax | null;
}

const HeroSection = ({ offset, factor = 2, parallaxRef }: HeroSectionProps) => {
  const [first, setFirst] = React.useState(parallaxRef);
  const [name, setName] = React.useState(getNameFromURL());
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const promise = audioRef.current?.play();
    if (promise !== undefined) {
      promise
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
    }
  }, [audioRef]);

  return (
    <section
      sx={{
        textAlign: 'center',
        color: 'white',
      }}
    >
      <ParallaxLayer speed={0.2} offset={offset} factor={factor}>
        <img
          src={Cover}
          alt="Krestian & Merry"
          sx={{ width: `100%`, height: `100%`, objectFit: `cover` }}
        />
      </ParallaxLayer>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Container>
          <div
            sx={{
              fontFamily: 'Delycost',
              fontSize: 'x-large',
            }}
          >
            <h1 sx={{ marginRight: '4rem' }}>Krestian</h1>
            <h3>&</h3>
            <h1 sx={{ marginLeft: '4rem' }}>Merry</h1>
          </div>
          <div sx={{ textAlign: 'center', visibility: 'hidden' }}>
            <audio ref={audioRef} controls autoPlay loop>
              <source src="https://docs.google.com/uc?export=download&id=1u1AGxXXqYZzIvHkyqo1SoY7tQcT3JNOg" />
            </audio>
          </div>
          {name && (
            <div sx={{ marginTop: '4rem' }}>
              <p>
                <small>Kepada Yth:</small>
              </p>
              <p>{name}</p>
            </div>
          )}
          <Button
            onClick={() => {
              audioRef.current?.play();
              parallaxRef?.scrollTo(1);
            }}
          >
            Buka Undangan
          </Button>
        </Container>
      </Content>
    </section>
  );
};

export default HeroSection;
