import styled from 'styled-components';
import { isValidElement, ReactNode } from 'react';
import { css } from 'styled-components';

import bgHero from '../../assets/bg-hero.png';
import bgProjects from '../../assets/bg-projects.png';
import bgCommunity from '../../assets/bg-community.png';

const backgroundImages: Record<string, string> = {
  Hero: bgHero,
  Projects: bgProjects,
  Community: bgCommunity,
};

console.log(bgHero);

function PageContainer({ children }: { children: ReactNode }) {
  const nameOfTheComponent =
    isValidElement(children) && typeof children.type === 'function'
      ? children.type.name
      : 'Unknown';

  const backgroundImage = backgroundImages[nameOfTheComponent] || 'none';

  return (
    <StyledPageContainer $bgImage={backgroundImage}>
      <Page>{children}</Page>
      <Div $type={nameOfTheComponent} />
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.section<{ $bgImage: string }>`
  flex: 1;
  height: 100dvh;
  position: relative;
  display: flex;
  padding: 3.5rem 5vw 0;
  width: 100%;

  ${(props) =>
    props.$bgImage === 'none'
      ? css`
          background: none;
        `
      : css`
          background-image: url(${props.$bgImage});
          background-size: cover;
          background-position: center;
        `}
`;

const Page = styled.section`
  margin: 0 auto;
  max-width: 100rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Div = styled.div<{ $type: string }>`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  ${(props) => {
    if (props.$type === 'About') {
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
    } else if (props.$type === 'Hero') {
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

export default PageContainer;
