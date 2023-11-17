import React from 'react';

export default function Loading() {
  return (
    <div style={{ marginTop: '12rem' }}>
      <div
        className="rotating-image"
        style={{
          background: 'url("https://i.imgur.com/chPcI7i.png")',
          height: '100px',
          width: '100px', // Added width for better visualization
          backgroundSize: '100px',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
}
