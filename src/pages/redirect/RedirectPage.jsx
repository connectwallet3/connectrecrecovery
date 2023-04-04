import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutPage } from '../../layout/LayoutPage';
import { Error } from './styled';

function RedirectPage() {
  return (
    <LayoutPage>
      <Error>
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_q2pevjuc.json"
          background="transparent"
          speed="1"
          style={{ width: '400px', height: '400px' }}
          loop
          autoplay
        ></lottie-player>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </Error>
    </LayoutPage>
  );
}

export default RedirectPage;
