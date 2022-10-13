/** @jsx jsx */
import { Button, Container, jsx } from 'theme-ui';
import React from 'react';

// Icons
import MandiriIcon from '../../assets/bank-icons/mandiri-icon.png';
import BcaIcon from '../../assets/bank-icons/bca-icon.png';

import Content from '../content';
import { FigureCanvas } from '../figure-canvas';
import { VisibilitySensor } from '../visibility-sensor';
import KrestianMerryPhoto from '../../assets/photos/gift-krestian-merry.jpg';

interface GiftSectionProps {
  offset: number;
  factor?: number;
}

export const GiftSection = ({ offset, factor = 2 }: GiftSectionProps) => {
  const [merryRekening] = React.useState('1234567');
  const [krestianRekening] = React.useState('1234567');
  return (
    <section>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Container>
          <div sx={{ margin: `0 auto`, width: [`100%`, `50%`, `50%`, `50%`] }}>
            <VisibilitySensor once>
              {({ isVisible }: { isVisible: boolean }) => (
                <FigureCanvas src={KrestianMerryPhoto} play={isVisible} />
              )}
            </VisibilitySensor>
          </div>

          <p
            sx={{
              textAlign: 'center',
              width: ['100%', '50%', '50%', '50%'],
              margin: '0 auto',
              marginTop: [4, 2, 2, 2],
            }}
          >
            Doa restu anda merupakan karunia yang sangat berarti bagi kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado secara cashless.
          </p>

          <div
            sx={{
              display: 'grid',
              gridGap: [4, 4, 4, 5],
              marginTop: [4, 4, 4, 5],
              gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr'],
              textAlign: 'center',
            }}
          >
            <div>
              <img src={MandiriIcon} alt="Logo Bank Mandiri" />
              <p>
                No Rekening: <strong>{krestianRekening}</strong>
                <br />
                An. <strong>Krestian Manuel Weken</strong>
              </p>
              <Button
                mr={2}
                variant="primary"
                onClick={() => navigator.clipboard.writeText(krestianRekening)}
              >
                Salin No. Rekening
              </Button>
            </div>
            <div>
              <img src={BcaIcon} alt="Logo Bank BCA" />
              <p>
                No Rekening: <strong>{merryRekening}</strong>
                <br />
                An. <strong>Merry Caesarini Ginsu</strong>
              </p>
              <Button
                mr={2}
                variant="primary"
                onClick={() => navigator.clipboard.writeText(merryRekening)}
              >
                Salin No. Rekening
              </Button>
            </div>
          </div>
        </Container>
      </Content>
    </section>
  );
};
