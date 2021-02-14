import styled from "styled-components";

const StyledSearchBar = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  font-size: 16px;
  & > input {
    padding: 10px;
    border: 1px solid #717171;
    border-radius: 10px 0 0 0;
    border-bottom-width: 2px;
    border-right: none;
    color: #717171;
    &:hover,
    &:focus {
      outline: none;
      border-bottom-color: palevioletred;
      color: palevioletred;
      & + button {
        border-bottom-color: palevioletred;
      }
    }
  }
  & > button {
    border-radius: 0 10px 0 0;
    padding: 10px;
    border: 1px solid #717171;
    border-left: none;
    border-bottom-width: 2px;
    &:hover,
    &:focus {
      color: white;
      background: palevioletred;
    }
    &: active {
      background: red;
    }
  }
`;

export default StyledSearchBar;
