import styled from 'styled-components';
import Logo from '../reusable/Logo';
import Navlink from './Navlink';

function Navbar() {
  return (
    <StyledNavWrapper>
      <Nav>
        <Navlink to={0} page='/'>
          <Logo size='small' type='original' />
        </Navlink>
        <LinksContainer>
          <Navlink to={1} page='/'>
            Проєкти
          </Navlink>
          <Navlink to={2} page='/'>
            Контакти
          </Navlink>
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
  color: var(--white-color-text);
  border-bottom: var(--white-border);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1.5rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export default Navbar;
