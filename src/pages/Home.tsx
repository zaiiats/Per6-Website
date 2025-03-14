import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import PageContainer from '../components/reusable/PageContainer';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Community from '../components/Community/Community';
import Sidebar from '../components/reusable/Sidebar';

function Home() {
  const sections = useMemo(
    () => [<Hero />, <Projects />, <About />, <Community />],
    []
  );

  const totalPages = sections.length;
  const [currentPage, setCurrentPage] = useState(0);
  const animationTime = 600;
  const [isSuspended, setIsSuspended] = useState(false);

  const changePage = (direction: 'up' | 'down') => {
    if (isSuspended) return;

    setCurrentPage((prev) => {
      let newPage = prev;
      if (direction === 'down' && prev < totalPages - 1) newPage = prev + 1;
      if (direction === 'up' && prev > 0) newPage = prev - 1;
      return newPage;
    });

    setIsSuspended(true);
    setTimeout(() => setIsSuspended(false), animationTime);
  };

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) changePage('down');
    else if (event.deltaY < 0) changePage('up');
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') changePage('down');
    if (event.key === 'ArrowUp') changePage('up');
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentPage, isSuspended]);

  return (
    <>
      <StyledDiv>
        {sections.map((Component, index) => (
          <PageSection key={index} $index={index} $activePage={currentPage}>
            <PageContainer>{Component}</PageContainer>
          </PageSection>
        ))}
      </StyledDiv>

      <Sidebar
        maxPage={totalPages}
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
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export default Home;
