import React from 'react';
import styled from 'styled-components';

function Preloader() {
  return (
    <Loader>
      <lottie-player
        src="https://lottie.host/c48c56d5-80ba-412d-ad97-eda384d08640/u4blMAPPfx.json"
        background="transparent"
        speed="1"
        style={{ width: '100px', height: '100px', color: '#fff' }}
        loop
        autoplay
      ></lottie-player>
    </Loader>
  );
}

export default Preloader;

const Loader = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 428px) {
    height: 85vh;
  }
`;
