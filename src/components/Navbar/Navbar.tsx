import styled from 'styled-components';
import Logo from '../reusable/Logo';
import Navlink from './Navlink';

function Navbar() {
  return (
    <StyledNavWrapper>
      <Nav>
        <Logo type='original' />
        <LinksContainer>
          <Navlink to={'#community'}>Ком'юніті</Navlink>
          <Navlink to={'#projects'}>Проєкти</Navlink>
          <Navlink to={'#about'}>Про нас</Navlink>
        </LinksContainer>
      </Nav>
    </StyledNavWrapper>
  );
}

const StyledNavWrapper = styled.nav`
  backdrop-filter: blur(30px);
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  color: #fff;
  border-bottom: 0.15rem solid #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const LinksContainer = styled.div`
  display: flex;
  gap:2.5rem;
`;

export default Navbar;
