import styled from 'styled-components';

export const FeedbackOptionsUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style-type: none;
  padding: 0;
`;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  text-transform: capitalize;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`;
