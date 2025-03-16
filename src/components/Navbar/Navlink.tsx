import styled from "styled-components"
import { useScroll } from "../../providers/ScrollProvider";

function Navlink({children, to}:{children:any, to:number}) {
  const { setCurrentPage } = useScroll();

  return (
    <StyledButton onClick={()=>setCurrentPage(to)}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-weight:500;
  color: var(--white-color-text);
  background-color: transparent;
  transition: var(--transition);
  padding:0.5rem;

  &:hover {
    color: var(--accent-color);
  }
`;

export default Navlink
