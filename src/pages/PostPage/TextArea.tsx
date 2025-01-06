import styled from 'styled-components';

const TextArea = styled.textarea`
  margin: 20px;
  width: calc(100% - 40px);
  border-radius: 20px;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  flex-grow: 1;
  resize: none;
  padding: 20px;
  box-sizing: border-box;
`;

export default TextArea;
