import styled from 'styled-components';
import { useScroll } from '../../providers/ScrollProvider';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type NavlinkProps = {
  children: ReactNode;
  to: number;
  page: string;
  onClick?: (e: React.MouseEvent) => void;
};

function Navlink({ children, to, page, onClick }: NavlinkProps) {
  const { setCurrentPage } = useScroll();
  const navigate = useNavigate();

  const handleNavlinkClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    navigate(page);
    setCurrentPage(0);
    setCurrentPage(to);
  };


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
