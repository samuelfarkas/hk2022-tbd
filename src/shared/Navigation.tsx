import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  position: absolute;
  bottom: 10px;
  box-shadow: 5px 5px 10px #00000045;
  border-radius: 5px;
  padding: 10px;
  a {
    padding: 0 10px;
  }
`

const Navigation = () => {
    return (
        <Nav>
            <Link to={'/tasks'}>Tasks</Link>
            <Link to={'/dashboard'}>Wallet</Link>
            <Link to={'/spend'}>Spend</Link>
        </Nav>
    );
};

export default Navigation;
