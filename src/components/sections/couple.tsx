/** @jsx jsx */
import { ParallaxLayer } from '@react-spring/parallax';
import Lottie from 'lottie-react';
import { Container, jsx } from 'theme-ui';

// Icon
import LoveIcon from '../../assets/love-icon.svg';

// Images
import KrestianPhoto from '../../assets/photos/krestian.jpg';
import MerryPhoto from '../../assets/photos/merry.jpg';

// Components
import Content from '../content';
import { FigureCanvas } from '../figure-canvas';
import { VisibilitySensor } from '../visibility-sensor';
import { WatercolorBg } from '../watercolor-bg';

interface CoupleSectionProps {
  offset: number;
  factor?: number;
}

const CoupleSection = ({ offset, factor = 2 }: CoupleSectionProps) => {
  return (
    <section>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Container>
          <div
            sx={{
              display: 'grid',
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: ['1fr', '1fr 1fr'],
            }}
          >
            <div>
              <VisibilitySensor once>
                {({ isVisible }: { isVisible: boolean }) => (
                  <FigureCanvas src={KrestianPhoto} play={isVisible} />
                )}
              </VisibilitySensor>
            </div>
            <div sx={{ textAlign: 'center' }}>
              <h2>Krestian Manuel Weken</h2>
              <p>Putra dari:</p>
              <p>
                <strong>Bpk. William Daniel Weken, Sp.d</strong> <br />
                & <br />
                <strong>Ibu. Martje Elsye Titjo</strong>
              </p>
            </div>
          </div>

          <div sx={{ textAlign: 'center', marginY: [4] }}>
            <img sx={{ width: [60, 80, 80, 80] }} src={LoveIcon} alt="And" />
          </div>

          <div
            sx={{
              display: 'grid',
              gridGap: [2, 2, 4, 5],
              gridTemplateColumns: ['1fr', '1fr 1fr'],
            }}
          >
            <div
              sx={{
                textAlign: 'center',
                '@media screen and (max-width: 640px)': {
                  gridRow: [2],
                },
              }}
            >
              <h2>Merry Caesarini Ginsu</h2>
              <p>Putri dari:</p>
              <p>
                <strong>Bpk. Yori Ginsu</strong> <br />
                & <br />
                <strong>Ibu. Mentji Meyke Umboh</strong>
              </p>
            </div>
            <div
              sx={{
                '@media screen and (max-width: 640px)': {
                  gridRow: [1],
                },
              }}
            >
              <VisibilitySensor once>
                {({ isVisible }: { isVisible: boolean }) => (
                  <FigureCanvas src={MerryPhoto} play={isVisible} />
                )}
              </VisibilitySensor>
            </div>
          </div>
        </Container>
      </Content>
    </section>
  );
};

export default CoupleSection;
