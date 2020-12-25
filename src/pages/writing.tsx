import styled from 'styled-components';
import { useEffect } from 'react';

const Writing = () => {
  return (
    <Container>
      <button>저장하기</button>
      <MultiLineTextField
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
  max-width: 720px;
  margin: 0 auto;

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
