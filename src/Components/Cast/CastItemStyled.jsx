import styled from 'styled-components';

const StyledCastItem = styled.li`
  padding: 10px;
  font-size: 12px;
  width: calc((100vw - 8 * 10px) / 9);
  height: fit-content;
  & > img {
    width: 100%;
    height: calc((100vw - 10px * 12) / 9);
    overflow: hidden;
    object-fit: cover;
    object-position: top;
    margin-bottom: 10px;
  }
  & > h3 {
    margin-bottom: 10px;
  }
`;

export default StyledCastItem;
