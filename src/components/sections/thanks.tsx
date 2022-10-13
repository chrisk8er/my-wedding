/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import React from 'react';

// Icons
import MandiriIcon from '../../assets/bank-icons/mandiri-icon.png';
import BcaIcon from '../../assets/bank-icons/bca-icon.png';

import KrestianMerryPhoto from '../../assets/photos/thanks-krestian-merry.jpg';

import Content from '../content';
import { VisibilitySensor } from '../visibility-sensor';
import { FigureCanvas } from '../figure-canvas';

interface ThanksSectionProps {
  offset: number;
  factor?: number;
}

export const ThanksSection = ({ offset, factor = 2 }: ThanksSectionProps) => {
  return (
    <section>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Container>
          <h2 sx={{ textAlign: 'center' }}>Terima Kasih</h2>

          <p
            sx={{
              textAlign: 'center',
              width: ['100%', '50%', '50%', '50%'],
              margin: '0 auto',
            }}
          >
            Terukir kesan yang dalam dihati kami apabila saudara, kerabat
            berkenan hadir untuk mengiringi, serta memberikan do’a restu kepada
            kami dalam menapaki lembaran baru perjalanan hidup.
          </p>
          <div sx={{ margin: `0 auto`, width: [`100%`, `50%`, `50%`, `50%`] }}>
            <VisibilitySensor once>
              {({ isVisible }: { isVisible: boolean }) => (
                <FigureCanvas src={KrestianMerryPhoto} play={isVisible} />
              )}
            </VisibilitySensor>
          </div>
        </Container>
      </Content>
    </section>
  );
};
