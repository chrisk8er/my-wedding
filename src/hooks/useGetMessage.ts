import React from 'react';

type Message = {
  id: number;
  name: string;
  attandence: string;
  message: string;
};

export const useGetMessage = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchingMessages();
  }, []);

  const fetchingMessages = () => {
    fetch(`https://my-wedding-api.glitch.me/api/message`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        return response.json();
      })
      .then((actualData) => {
        const finalData = actualData.values.map(
          (row: string[], index: number) => {
            const msg: Message = {
              id: index,
              name: row[0],
              attandence: row[1],
              message: row[2],
            };
            return msg;
          },
        );
        setMessages(finalData.reverse());
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setMessages([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data: messages,
    error,
    loading,
    refetch: fetchingMessages,
  };
};
