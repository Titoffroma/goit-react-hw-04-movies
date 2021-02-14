import { NavLink } from "react-router-dom";
import StyledHeader from "./HeaderStyled";

const Header = () => {
  return (
    <StyledHeader className="Header">
      <NavLink to="/home" activeClassName="ActiveLink">
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="ActiveLink">
        Movies
      </NavLink>
    </StyledHeader>
  );
};

export { Header };
