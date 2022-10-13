/** @jsx jsx */
import { ParallaxLayer } from '@react-spring/parallax';
import { jsx } from 'theme-ui';
import Content from '../content';

interface QuoteSectionProps {
  text: string;
  cite?: string;
  author: string;
  offset: number;
  factor?: number;
}

const QuoteSection = ({
  text,
  cite,
  author,
  offset,
  factor = 2,
}: QuoteSectionProps) => {
  return (
    <section sx={{ textAlign: 'center' }}>
      <ParallaxLayer speed={0} offset={offset} factor={factor}>
        <blockquote cite={cite}>{text}</blockquote>
        <p>~ {author}</p>
      </ParallaxLayer>
    </section>
  );
};

export default QuoteSection;
