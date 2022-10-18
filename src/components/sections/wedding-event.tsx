/** @jsx jsx */
import { Button, Container, jsx } from 'theme-ui';

// Icons
import HandWashing from '../../assets/covid-protocol-icons/hand-washing.svg';
import UseMask from '../../assets/covid-protocol-icons/use-mask.svg';
import Distancing from '../../assets/covid-protocol-icons/distancing.svg';
import NoShakehand from '../../assets/covid-protocol-icons/no-shakehand.svg';
import AvoidingCrowd from '../../assets/covid-protocol-icons/avoiding-crowd.svg';
import UseHandsanitizer from '../../assets/covid-protocol-icons/use-handsanitizer.svg';
import Content from '../content';

interface WeddingEventSectionProps {
  offset: number;
  factor?: number;
}

const WeddingEventSection = ({
  offset,
  factor = 2,
}: WeddingEventSectionProps) => {
  return (
    <section
      sx={{
        h2: {
          textAlign: 'center',
        },
      }}
    >
      <Content speed={0.4} offset={offset} factor={factor}>
        <Container>
          <h2>Acara Pernikahan</h2>
          <div
            sx={{
              display: 'grid',
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            }}
          >
            <div sx={{ textAlign: 'center' }}>
              <h3>Pemberkatan</h3>
              <p>
                22 Oktober 2022 <br />
                Pukul <strong>13:00</strong> wita <br />
                Gereja GMIM Efrata Uwuran Dua, Amurang
              </p>
              <Button
                onClick={(e) =>
                  (location.href = 'https://goo.gl/maps/xkFKcE5CoPDJw4nu5')
                }
              >
                Buka Map
              </Button>
              <Button
                style={{ marginLeft: '1rem' }}
                onClick={() =>
                  (location.href =
                    'https://calendar.google.com/event?action=TEMPLATE&tmeid=NGRxamh1ZTEyNzdqOTVnNGRvN2liajA2bXAgY2hyaXNrOGVyQG0&tmsrc=chrisk8er%40gmail.com')
                }
              >
                Simpan Tanggal
              </Button>
            </div>
            <div sx={{ textAlign: 'center' }}>
              <h3>Resepsi</h3>
              <p>
                22 Oktober 2022 <br />
                Pukul <strong>16:00</strong> wita <br />
                Hotel Sutanraja, Amurang
              </p>
              <Button
                onClick={() =>
                  (location.href = 'https://goo.gl/maps/zjgwaHjujsvSA4tx5')
                }
              >
                Buka Map
              </Button>
              <Button
                style={{ marginLeft: '1rem' }}
                onClick={() =>
                  (location.href =
                    'https://calendar.google.com/event?action=TEMPLATE&tmeid=M2NlcGJ2ZTNhZ2JiMjJtZW9icHFnN2Y1M3YgY2hyaXNrOGVyQG0&tmsrc=chrisk8er%40gmail.com')
                }
              >
                Simpan Tanggal
              </Button>
            </div>
          </div>
          <div
            sx={{
              textAlign: 'center',
              marginTop: [4, 4, 4, 5],
            }}
          >
            <h3>Protokol Kesehatan</h3>
            <div
              sx={{
                display: 'grid',
                gridGap: [4, 4, 4, 5],
                gridTemplateColumns: [
                  `repeat(3, 1fr)`,
                  `repeat(3, 1fr)`,
                  `repeat(6, 1fr)`,
                ],
                img: {
                  width: ['60px', '60px', '60px', '80px'],
                },
              }}
            >
              <div>
                <img src={HandWashing} alt="Mencuci Tangan" />
                <h6>Mencuci Tangan</h6>
              </div>
              <div>
                <img src={UseMask} alt="Memakai Masker" />
                <h6>Memakai Masker</h6>
              </div>
              <div>
                <img src={Distancing} alt="Menjaga Jarak" />
                <h6>Menjaga Jarak</h6>
              </div>
              <div>
                <img src={NoShakehand} alt="Tidak Berjabat Tangan" />
                <h6>Tidak Berjabat Tangan</h6>
              </div>
              <div>
                <img src={AvoidingCrowd} alt="Menjauhi Kerumunan" />
                <h6>Menjauhi Kerumunan</h6>
              </div>
              <div>
                <img src={UseHandsanitizer} alt="Memakai Handsanitizer" />
                <h6>Memakai Handsanitizer</h6>
              </div>
            </div>
          </div>
        </Container>
      </Content>
    </section>
  );
};

export default WeddingEventSection;
