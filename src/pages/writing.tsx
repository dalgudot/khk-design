import styled from 'styled-components';
import firebase from 'firebase/app';
import { useEffect, useRef, useState } from 'react';
import { useRipple } from 'react-use-ripple';
import StaggerDots from '../components/framer-motion/stagger-dots';

const Writing = () => {
  // const [loading, setLoading] = useState(false);

  return (
    // <>{loading ? <StaggerDots /> : <WritingSpace setLoading={setLoading} />}</>
    <WritingSpace />
  );
};
export default Writing;

// component
const WritingSpace = () => {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1);
  const date = String(today.getDate());
  const when = `${year}${month}${date}`;

  const firebaseDatabaseRef: any = firebase.database().ref(`Draft/Draft`);
  const setFirebase: Function = () => {
    // firebaseDatabaseRef.push().set(contents);
    firebaseDatabaseRef.set(contents);
  };

  const textRef = useRef(null);
  const [contents, setContents] = useState('');

  const btnRef = useRef(null);
  useRipple(btnRef);

  useEffect(() => {
    firebase
      .database()
      .ref(`Draft/Draft`)
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        data && setContents(data);
        console.log('[Success]Firebase Realtime Database');
      })
      .catch(() => {
        console.error('[Error]Firebase Realtime Database');
      });
  }, []);

  return (
    <Container>
      <button ref={btnRef} onClick={() => setFirebase()}>
        저장하기
      </button>
      <MultiLineTextField
        ref={textRef}
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        autoFocus={true}
        name="My Writing Space"
        placeholder="My Writing Space"
        rows={10000}
        cols={4000}
      />
    </Container>
  );
};

// style
const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;

  button {
    position: fixed;
    top: 120px;
    right: 20%;
    font-size: 24px;
    color: ${({ theme }) => theme.gray1};
    border: solid ${({ theme }) => theme.gray1} 1px;
    border-radius: 20px;
    background-color: transparent;
    padding: 16px 28px;
  }
`;

const MultiLineTextField = styled.textarea`
  padding: 72px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 16px;
  margin-top: 120px;
  caret-color: ${({ theme }) => theme.gray1};
  color: ${({ theme }) => theme.gray1};
  font-weight: 300;
  line-height: 1.9;

  :invalid {
    border: 1px solid #494949;
  }

  :valid {
    border: 1px solid #494949;
  }
`;
