import styled from 'styled-components';

const StyledDetailsLinks = styled.div`
  padding: 30px;
  border: 1px solid #717171;
  border-left: none;
  border-right: none;
  & h3 {
    padding: 20px 0;
  }
  & ul {
    list-style-position: inside;
  }
  & a {
    display: inline-block;
    color: #717171;
    margin-bottom: 20px;
    &:hover,
    &:focus {
      color: palevioletred;
    }
    &:active {
      color: #212121;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export default StyledDetailsLinks;
