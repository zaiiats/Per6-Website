import Heading from "./Heading";
import { useScroll } from '../../providers/ScrollProvider';
import { useEffect, useState } from 'react';
import styled from "styled-components";

function DynamicPage({headingText,children,order}:{headingText:string,children:any, order:number}) {
  const { currentPage } = useScroll();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (currentPage === order) {
      setTimeout(() => {
        setAnimate(true);
      }, 800);
    }
  }, [currentPage]);

  return (
    <div>
      <StyledSection>
        <Heading>{headingText}</Heading>
        <ProjectsContainer $isAnimated={animate}>
          {children}
        </ProjectsContainer>
      </StyledSection>
    </div>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ProjectsContainer = styled.div<{ $isAnimated: boolean }>`
  overflow: hidden;
  transition: max-height 1s ease-in-out;
  max-height: ${(props) => (props.$isAnimated ? '60vh' : '0')};
  margin-top:2rem;
`;

export default DynamicPage
