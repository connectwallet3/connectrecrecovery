import styled from "styled-components";

export const WidthCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContactBox = styled.div`
  background: #fff;
  box-shadow: 0px 10px 5px 0px rgba(214, 84, 211, 0.13);
  -webkit-box-shadow: 0px 10px 5px 0px rgba(214, 84, 212, 0.13);
  -moz-box-shadow: 0px 10px 5px 0px rgba(214, 84, 211, 0.13);
  width: 70%;
  padding: 20px;
  border-radius: 20px;

  @media screen and (max-width: 884px) {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans", sans-serif;

    .input-group {
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 54px;
      background-color: #05060f0a;
      border-radius: 0.5rem;
      padding: 0 1rem;
      border: 2px solid transparent;
      font-size: 1rem;
      transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
        color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
        background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
    }

    label {
      display: block;
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
      font-weight: 400;
      color: #05060f99;
      transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
    }

    input:hover,
    input:focus,
    input-group:hover input {
      outline: none;
      border-color: #05060f;
    }

    input-group:hover label,
    input:focus {
      color: #05060fc2;
    }

    textarea {
      width: 100%;
      background-color: #05060f0a;
      border-radius: 0.5rem;
      padding: 15px;
      border: 2px solid transparent;
      font-size: 1rem;
      transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
        color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
        background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
    }
  }
`;

export const NormalBox = styled.div`
  background: #fff;
  color: #1b152e;
  margin-top: 50px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a{
    color: #1b152e;
  }
`;
