/** @jsx jsx */
import {
  Button,
  Container,
  Input,
  jsx,
  Label,
  Radio,
  Textarea,
} from 'theme-ui';

import Content from '../content';
import { MessageList } from '../message-list';
import { MessageForm } from '../message-form';
import React from 'react';

interface UtteranceSectionProps {
  offset: number;
  factor?: number;
}

export const UtteranceSection = ({
  offset,
  factor = 2,
}: UtteranceSectionProps) => {
  const [newData, setNewData] = React.useState<any>();

  return (
    <section>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Container>
          <div
            sx={{
              height: `100vh`,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h2 sx={{ textAlign: 'center' }}>Ucapan dan Doa</h2>
            <div
              sx={{
                display: 'grid',
                gridGap: [4, 4, 4, 5],
                gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
                height: `100%`,
              }}
            >
              {/* <MessageForm onSending={(data) => setNewData(data)} /> */}

              {!newData ? (
                <MessageList />
              ) : (
                <MessageList key={newData.data.updates.updatedRange} />
              )}
            </div>
          </div>
        </Container>
      </Content>
    </section>
  );
};
