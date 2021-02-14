import styled from "styled-components";

const StyledMoviesDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  font-size: 18px;
  border-bottom: 1px solid rgb(238, 60, 125);
  .ImageWrapper {
    
  }
  & > img {
    height: 100%;
    width: 300px;
    object-fit: contain;
    object-position: top center;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 20px;
    }
    & > .MovieDetails {
      & :not(:last-child) {
        margin-bottom: 20px;
      }
      .GenreList {
        display: flex;
        list-style-type: none;
        & :not(:last-child) {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default StyledMoviesDetails;
