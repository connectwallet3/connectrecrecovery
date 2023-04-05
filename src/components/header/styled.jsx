import styled from 'styled-components';


export const Head = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;


  img {
    width: 200px;
  }

  ul li {
    list-style: none;
  }

  .desktop {
    @media screen and (max-width: 883px) {
      display: none;
    }
  }

  .mobile {
    z-index: 100;
    label {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 30px;
      cursor: pointer;
      padding: 0;
    }

    label span {
      background: #fff;
      border-radius: 10px;
      height: 3px;
      margin: 3px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
      width: 100%;
    }

    span:nth-of-type(2) {
      width: 100%;
    }

    span:nth-of-type(3) {
      width: 100%;
    }

    input[type='checkbox'] {
      display: none;
    }

    input[type='checkbox']:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(6px, 1px);
    }

    input[type='checkbox']:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg) translate(4px, -1px);
    }

    input[type='checkbox']:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translate(6.5px, -4px) rotatez(45deg);
      display: none;
    }

    @media screen and (min-width: 884px) {
      display: none;
    }
  }
`;

export const MobileNavigation = styled.div`
  z-index: 199;
  .slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    background: #1b152e;
    height: 100vh;
    overflow: hidden;
    z-index: 200;
  }
  @-webkit-keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      visibility: hidden;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
  @keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      visibility: hidden;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: #000;
    padding: 80px 0;
    z-index: 199;

    ul {
      width: 100%;

      background: transparent;
      li {
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 15px 0;
          color: #fff;
          font-weight: 700;
          font-size: 20px;
        }
        a.active {
          color: #ff00e5;
        }
      }
    }
  }

  @media screen and (min-width: 884px) {
    display: none;
  }
`;
