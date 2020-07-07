import React from "react";
import { Link } from "react-router-dom";
import Theme from "../../theme/theme";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: ${Theme.colors.primary};
  width: 96%;
  border-radius: 30px 0 31px 0px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  margin-left: 20px;
  color: ${Theme.colors.white};
  font-size: 25px;
  margin-left: 30px;
  &:hover {
    color: ${Theme.colors.white};
  }
`;

const Menu = styled.div`
  margin-right: 5px;
  float: right;
`;

const LinkStyled = styled(Link)`
  color: #fff;
  padding: 5px;
  border: 1px solid ${Theme.colors.white};
  border-radius: 3px;
  margin-right: 6px;
  &:hover {
    color: ${Theme.colors.white};
    background: ${Theme.colors.secondary};
    border: ${Theme.colors.secondary};
  }
`;

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <Logo to="/">GitHup Search</Logo>
      <Menu>
        <LinkStyled to="/user">Search Users</LinkStyled>
        <LinkStyled to="/repo">Search Repos</LinkStyled>
      </Menu>
    </HeaderWrapper>
  );
}
export default Header;
