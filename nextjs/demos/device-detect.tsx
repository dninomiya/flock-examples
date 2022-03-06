import React from 'react';
import { isMobile, browserName, osName } from 'react-device-detect';

const DeviceDetect = () => {
  return (
    <div>
      <p>あなたのOSは {osName} です。</p>
      <p>あなたのブラウザは {browserName} です。</p>
      <p>あなたの端末は {isMobile ? 'モバイル' : 'PC'} です。</p>
    </div>
  );
};

export default DeviceDetect;
