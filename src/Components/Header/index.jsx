import { NavLink } from 'react-router-dom';
import StyledHeader from './HeaderStyled';

const Header = () => {
  return (
    <StyledHeader className="Header">
      <NavLink exact to="/" activeClassName="ActiveLink">
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="ActiveLink">
        Movies
      </NavLink>
    </StyledHeader>
  );
};

export { Header };
