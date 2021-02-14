import styled from 'styled-components';

const StyledMoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  font-size: 16px;
  list-style-type: none;
  & > li {
    padding: 10px 0;
    width: 250px;
    border-bottom: 1px solid palevioletred;
    & > a {
      color: #717171;
      text-decoration: none;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover,
      &:focus {
        color: palevioletred;
        font-weight: bold;
      }
      &:active {
        color: #212121;
      }
    }
  }
`;

export default StyledMoviesList;
