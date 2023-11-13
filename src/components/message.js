import React, { useState } from 'react'
import './message.css'

const Message = ({ message }) => {
  const getMessageStyle = () => {
    switch (message.type) {
      case 'success':
        return { color: 'green' };
      case 'error':
        return { color: 'red' };
      default:
        return { color: 'white' };
    }
  };

  const [visible, setVisible] = useState(true);

  const closeMessage = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div style={{ margin: '1rem', padding: '1rem', border: '0.1rem solid', ...getMessageStyle() }}>
          {message.text}
          <button
            onClick={closeMessage}
            className='remove-btn'
            style={{marginLeft: "7.5rem"}}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Message;
