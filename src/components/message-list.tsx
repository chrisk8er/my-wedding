/** @jsx jsx */
import { jsx, get, Button } from 'theme-ui';
import React from 'react';
import ReactModal from 'react-modal';
import { useGetMessage } from '../hooks/useGetMessage';
import { MessageForm } from './message-form';

export const MessageList = () => {
  const { data, refetch } = useGetMessage();
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div
      sx={{
        overflowY: 'auto',
        paddingRight: `1rem`,
        position: 'relative',
      }}
    >
      <Button
        sx={{ width: `100%` }}
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Tulis Pesan
      </Button>
      {data.map(({ id, name, attandence, message }) => (
        <div
          sx={{
            marginTop: `2rem`,
            marginBottom: `2rem`,
            backgroundColor: 'rgba(218, 223, 233, 0.31)',
            padding: '1rem',
            borderRadius: '20px',
          }}
          key={id}
        >
          <h4 sx={{ margin: `3px 0` }}>{name}</h4>
          <p sx={{ margin: `3px 0` }}>
            <small>
              <strong>{attandence}</strong>
            </small>
          </p>
          <p sx={{ margin: `3px 0` }}>{message}</p>
        </div>
      ))}

      <ReactModal
        isOpen={showModal}
        ariaHideApp={false}
        style={{
          content: { width: '100vw', height: '100vh', top: 0, left: 0 },
        }}
      >
        <div sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <span
            sx={{ textAlign: 'end', fontSize: 'xx-large' }}
            onClick={() => setShowModal(false)}
          >
            &times;
          </span>
        </div>
        <MessageForm
          onSending={(data) => {
            setShowModal(false);
            refetch();
          }}
        />
      </ReactModal>
    </div>
  );
};
