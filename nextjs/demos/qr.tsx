import { QRCodeSVG } from 'qrcode.react';

const Qr = () => {
  return (
    <div>
      <QRCodeSVG value={location?.href} />
    </div>
  );
};

export default Qr;
