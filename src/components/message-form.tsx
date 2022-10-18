/** @jsx jsx */
import { jsx, get, Alert } from 'theme-ui';
import React from 'react';
import { Label, Input, Radio, Textarea, Button } from 'theme-ui';
import { getNameFromURL } from '../utils/getNameFromUrl';

interface MessageFormProps {
  defaultName?: string;
  onSending: (status: {}) => void;
}

export const MessageForm = ({
  defaultName = '',
  onSending,
}: MessageFormProps) => {
  const [name, setName] = React.useState(getNameFromURL());
  const [attendance, setAttendance] = React.useState('Hadir');
  const [message, setMessage] = React.useState('');
  const [isSending, setIsSending] = React.useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = {
      name,
      attendance,
      message,
    };

    setIsSending(true);

    fetch('https://my-wedding-api.glitch.me/api/message', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resData) => {
        setIsSending(false);
        alert('Pesan kamu telah terkirim! 😇');
        onSending(resData);
        setMessage('');
      })
      .catch((err) => {
        setIsSending(false);
        alert('Pesan kamu tidak terkirim! 🙁');
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      method="post"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1.5rem',
        background: `rgba(218, 223, 233, 0.31)`,
        borderRadius: `17px`,
        alignSelf: 'flex-start',
        marginTop: '2rem',
        width: '100%',
      }}
    >
      <Label>
        <Input
          disabled={getNameFromURL() ? true : false}
          placeholder="Nama anda"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Label>

      <div sx={{ display: 'flex' }}>
        <Label>
          <Radio
            name="attendance"
            value="Hadir"
            defaultChecked={true}
            onChange={(e) => e.target.checked && setAttendance(e.target.value)}
          />
          Hadir
        </Label>
        <Label>
          <Radio
            name="attendance"
            value="Tidak hadir"
            onChange={(e) => e.target.checked && setAttendance(e.target.value)}
          />
          Tidak hadir
        </Label>
      </div>

      <Textarea
        placeholder="Pesan dan doa anda..."
        rows={3}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="primary">{isSending ? 'Mengirim...' : 'Kirim'}</Button>
    </form>
  );
};
