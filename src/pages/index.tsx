import * as React from 'react';
import {
  IParallax,
  Parallax,
  ParallaxLayerProps,
} from '@react-spring/parallax';
import Layout from '../components/layout';
import WeddingEventSection from '../components/sections/wedding-event';
import QuoteSection from '../components/sections/quote';
import CoupleSection from '../components/sections/couple';
import { GiftSection } from '../components/sections/gift';
import HeroSection from '../components/sections/hero';
import { UtteranceSection } from '../components/sections/utterance';
import { ThanksSection } from '../components/sections/thanks';
import { Background } from '../components/background';
import { WatercolorBg } from '../components/watercolor-bg';

const Index = () => {
  const parallaxRef = React.useRef<IParallax>(null);

  return (
    <Layout>
      <Parallax ref={parallaxRef} id="home-parallax" pages={6.5}>
        <Background offset={0} factor={5.5} />

        <HeroSection offset={0} factor={1} parallaxRef={parallaxRef.current} />

        {/* <QuoteSection
        text="Berdua lebih baik dari pada seorang diri, karena mereka menerima upah yang baik dalam jerih payah mereka."
        author="Pengkhotbah 4:9"
        offset={1}
        factor={0}
      /> */}

        <CoupleSection offset={1} factor={1.5} />

        {/* <QuoteSection
        text="Sebab itu laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu
        dengan isterinya, sehingga keduanya itu menjadi satu daging."
        author="Markus 10:7-8a"
        offset={3}
        factor={0.2}
      /> */}

        <WeddingEventSection offset={2.5} factor={1} />

        {/* <QuoteSection
        text="Demikianlah mereka bukan lagi dua, melainkan satu."
        author="Markus 10:8b"
        offset={5}
        factor={0.2}
      /> */}

        <GiftSection offset={3.5} factor={1} />

        <UtteranceSection offset={4.5} factor={1} />

        <ThanksSection offset={5.5} factor={1.4} />
      </Parallax>
    </Layout>
  );
};

export default Index;
