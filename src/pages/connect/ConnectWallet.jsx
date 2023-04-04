import React, { useState } from 'react';
import WalletsTemp from '../../components/walletsTemp/WalletsTemp';
import { LayoutPage } from '../../layout/LayoutPage';
import { Connect } from './styled';
import wallets from '../../data/wallets';

function ConnectWallet() {
  const [data] = useState(wallets);
  return (
    <LayoutPage>
      <h2 style={{ textAlign: 'center' }}>Wallets</h2>
      <Connect>
        <WalletsTemp wallets={data} />
      </Connect>
    </LayoutPage>
  );
}

export default ConnectWallet;
