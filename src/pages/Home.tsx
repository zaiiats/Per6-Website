import styled from 'styled-components';
import PageContainer from '../components/reusable/PageContainer';
import Sidebar from '../components/reusable/Sidebar';
import { useScroll } from '../providers/ScrollProvider';

function Home() {
  const { currentPage, setCurrentPage, sections } = useScroll();

  return (
    <>
      <StyledDiv>
        {sections.map(({ component, name }, index) => (
          <PageSection key={index} $index={index} $activePage={currentPage}>
            <PageContainer pageName={name}>{component}</PageContainer>
          </PageSection>
        ))}
      </StyledDiv>
      <Sidebar
        maxPage={sections.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

interface IPageSectionProps {
  $index: number;
  $activePage: number;
}

const PageSection = styled.div<IPageSectionProps>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transition: transform 0.6s ease-in-out;
  transform: ${({ $index, $activePage }) =>
    `translateY(${($index - $activePage) * 100}vh)`};
`;

const StyledDiv = styled.div`
  width: 100vw;
`;

export default Home;
