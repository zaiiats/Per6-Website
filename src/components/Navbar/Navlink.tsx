import styled from 'styled-components';
import { useScroll } from '../../providers/ScrollProvider';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

function Navlink({
  children,
  to,
  page,
}: {
  children: ReactNode;
  to: number;
  page: string;
}) {
  const { setCurrentPage } = useScroll();
  const navigate = useNavigate()

  const handleNavlinkClick = () => {
    navigate(page)
    setCurrentPage(0);
    setCurrentPage(to);
  }


  return <StyledButton onClick={handleNavlinkClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  font-weight: 500;
  color: var(--white-color-text);
  background-color: transparent;
  transition: var(--transition);
  padding: 0.5rem;

  &:hover {
    color: var(--accent-color);
  }
`;

export default Navlink;
