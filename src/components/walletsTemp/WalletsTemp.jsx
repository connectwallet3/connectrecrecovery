import React from 'react';
import { Box } from '../../pages/connect/styled';
import { Link } from 'react-router-dom';

function WalletsTemp({ wallets }) {
  return (
    <>
      {wallets.map((wallet, index) => {
        return (
          <Link to={`/link-wallet/${wallet.id}`} key={index}>
            <Box key={index} data-aos="flip-left">
              <img src={wallet.image} alt="" />
              <p>{wallet.name}</p>
            </Box>
          </Link>
        );
      })}
    </>
  );
}


export default WalletsTemp;
