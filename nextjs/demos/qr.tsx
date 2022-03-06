import React from 'react';
import QRCode from 'react-qr-code';

const Qr = () => {
  return (
    <div>
      <QRCode value={location?.href} />
    </div>
  );
};

export default Qr;
