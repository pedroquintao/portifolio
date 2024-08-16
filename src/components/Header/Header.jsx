import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header``;

function Header() {
  return (
    <StyledHeader>
      <NavLink to={"/"} title="Início">Início</NavLink>
      <NavLink to={"/projects"} title="Projetos">Projetos</NavLink>
      <NavLink to={"/about"} title="Sobre">Sobre</NavLink>
      <NavLink to={"/contact"} title="Contato">Contato</NavLink>
    </StyledHeader>
  );
}

export default Header;
