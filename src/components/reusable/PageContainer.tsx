import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

import bgHero from '../../assets/bg-hero.png';
import bgProjects from '../../assets/bg-projects.png';
import bgCommunity from '../../assets/bg-community.png';

const backgroundImages: Record<string, string> = {
  Hero: bgHero,
  Projects: bgProjects,
  Community: bgCommunity,
};

interface PageContainerProps {
  children: ReactNode;
  pageName: string; 
}

export default function PageContainer({
  children,
  pageName,
}: PageContainerProps) {
  const backgroundImage = backgroundImages[pageName] || 'none';

  return (
    <StyledPageContainer $bgImage={backgroundImage}>
      <Content>{children}</Content>
      <Overlay $type={pageName} />
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.section<{ $bgImage: string }>`
  flex: 1;
  height: 100dvh;
  width: 100%;
  position: relative;
  display: flex;
  padding: 3.5rem 5vw 0;

  ${({ $bgImage }) =>
    $bgImage === 'none'
      ? css`
          background: none;
        `
      : css`
          background-image: url('${$bgImage}');
          background-size: cover;
          background-position: center;
        `}
`;

const Content = styled.section`
  margin: 0 auto;
  max-width: 100rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Overlay = styled.div<{ $type: string }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  ${({ $type }) => {
    if ($type === 'About') {
      return css`
        background-image: repeating-linear-gradient(
          50deg,
          #080815 0,
          #080815 30px,
          #06060e 30px,
          #06060e 60px,
          #030307 60px,
          #030307 90px
        );
      `;
    } else if ($type === 'Hero') {
      return css`
        background-color: var(--page1-background);
      `;
    } else {
      return css`
        background-color: var(--page2-background);
      `;
    }
  }}
`;
