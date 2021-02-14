import styled from 'styled-components';

const StyledHeader = styled.header`
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  font-size: 18px;
  border-bottom: 1px solid rgb(238, 60, 125);
  box-shadow: 0 2px 16px rgba(238, 60, 125, 0.6);
  & > a {
    color: #717171;
    &:hover,
    &:focus {
      color: palevioletred;
    }
    &:active {
      color: #212121;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export default StyledHeader;
