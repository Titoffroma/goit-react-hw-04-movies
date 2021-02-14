import styled from "styled-components";

const StyledReviews = styled.ul`
  padding: 30px;
  font-size: 16px;
  list-style-type: none;
  & > li {
    margin-bottom: 20px;
    & h4 {
      padding-left: 20px;
      margin-bottom: 10px;
    }
  }
`;

export default StyledReviews;
