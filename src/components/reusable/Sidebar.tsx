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
`;

const Dot = styled.div<{ $isActive: boolean }>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 0.15rem solid #fff;
  &:hover {
    background-color: gray;
  }
`;

export default Sidebar;
