import styled from 'styled-components';
import firebase from 'firebase/app';
import { useEffect, useRef, useState } from 'react';

const Writing = () => {
  const firebaseDatabaseRef: any = firebase.database().ref('draft');
  const textRef = useRef(null);
  const [contents, setContents] = useState('');

  useEffect(() => {
    firebaseDatabaseRef.once('value', (snapshot: any) => {
      const data = snapshot.val();
      console.log(data);
      data && setContents(data);
    });
  }, []);

  const firebaseSet: Function = () => {
    firebaseDatabaseRef.set(contents);
  };

  return (
    <Container>
      <button onClick={() => firebaseSet()}>저장하기</button>
      <MultiLineTextField
        ref={textRef}
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        autoFocus={true}
        name="My Writing Space"
        placeholder="My Writing Space"
        rows={4000}
        cols={4000}
      />
    </Container>
  );
};

export default Writing;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;

  p {
    font-size: 24px;
    margin-top: 96px;
    color: #dfdfdf;
  }

  button {
    position: fixed;
    top: 120px;
    right: 8%;
    font-size: 20px;
    color: #dfdfdf;
    border: solid #dfdfdf 1px;
    border-radius: 20px;
    background-color: transparent;
    padding: 16px 28px;
  }
`;

const MultiLineTextField = styled.textarea`
  padding: 24px;
  font-size: 24px;
  background-color: #212121;
  border-radius: 2px;
  margin-top: 120px;
  caret-color: #8d8d8d;
  color: #dfdfdf;

  :invalid {
    border: 2px solid #8d8d8d;
  }

  :valid {
    border: 2px solid #8d8d8d;
  }
`;
