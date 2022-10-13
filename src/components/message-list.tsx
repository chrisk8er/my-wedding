/** @jsx jsx */
import { jsx, get } from 'theme-ui';
import React from 'react';
import { useGetMessage } from '../hooks/useGetMessage';

export const MessageList = () => {
  const { data } = useGetMessage();

  return (
    <div
      sx={{
        overflowY: 'auto',
        paddingRight: `1rem`,
      }}
    >
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
    </div>
  );
};
