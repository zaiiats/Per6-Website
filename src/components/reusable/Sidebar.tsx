import styled from 'styled-components';

function Sidebar({
  maxPage,
  currentPage,
  setCurrentPage,
}: {
  maxPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  return (
    <StyledDiv>
      {Array.from({ length: maxPage }, (_, i) => (
        <Dot
          key={i}
          $isActive={i === currentPage}
          onClick={() => setCurrentPage(i)}
        />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 3.5rem;

  @media screen and (max-width: 1120px) {
    display:none;
  }
`;

const Dot = styled.div<{ $isActive: boolean }>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--accent-color)' : 'transparent'};
  cursor: pointer;
  transition: var(--transition);
  border: var(--white-border);
  &:hover {
    background-color: var(--accent-color);
  }
`;

export default Sidebar;
