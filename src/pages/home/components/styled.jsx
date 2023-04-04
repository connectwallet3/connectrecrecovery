import styled from "styled-components";

export const HeroBGStyle = styled.section`
  position: relative;

  .bg {
    display: none;
    position: absolute;
    z-index: -1;
    top: 0;
    margin-top: -500px;
  }

  @media screen and (min-width: 885px) {
    width: 100%;

    .bg {
      display: block;
    }
  }
`;
export const HeroStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  text-align: center;
  height: 70vh;

  .text {
    width: 50%;
  }

  span {
    color: #8863fc;
  }
  p {
    font-weight: 500;
  }
  @media screen and (max-width: 884px) {
    display: block;
    margin-top: 0;
    text-align: left;
    h1 {
      font-size: 47px;
    }
    .text {
      width: 100%;
    }
  }
`;

// SERVICES SECTION

export const ServiceStyle = styled.section`
  background: #ffffff;
  padding: 50px 0;
  color: #000000;

  .flexstyle {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 50%;
      h2 {
        text-align: left;
        color: #8863fc;
      }
      .textBox {
        display: flex;
        align-items: center;
        margin-top: 30px;

        margin-bottom: 20px;
        .line {
          border-left: 5px solid #8863fc;
          height: 100px;
          margin-right: 10px;
        }
        p {
          text-align: start;
        }

        @media screen and (max-width: 884px) {
          padding-left: 0;
          margin-top: 20px;

          .line {
            height: 80px;
          }
        }
      }
    }
    .right {
      width: 50%;

      img{
        width: 550px;
      }
    }

    @media screen and (max-width: 884px) {
      flex-direction: column;
      .left{
        width: 100%;
      }
      .right{
        width: 100%;

        img{
        width: 360px;
      }
      }
    }
  }
`;

// About Section

export const AboutStyle = styled.section`
  background: #eef0ff;
  height: 60vh;
  width: 100%;
  color: #211c10;

  .theb {
    width: 60%;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 884px) {
    .theb {
      width: 100%;
    }

    h2 {
      text-align: left;
    }
    p {
      text-align: justify;
    }
  }
`;

// Claim Section

export const ClaimStyle = styled.section`
  background: #8863fc;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button{
    background: #1B152E;
    width: 280px;
    height: 60px;
    margin-top: 20px;
  }
`;
