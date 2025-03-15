import styled from 'styled-components';
import bgHero from '../../assets/bg-hero.png'; // ✅ Import image correctly

function PageContainer({ children }: { children: any }) {
  return (
    <StyledPageContainer>
      <Page>{children}</Page>
      <Div/>
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.section`
  flex: 1;
  height: 100dvh;
  position:relative;
  display: flex;
  background-image: url(${bgHero});
  background-size: cover;
  background-position: center;
`;

const Page = styled.section`
  margin: 0 auto;
  max-width: 100rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
`;

const Div = styled.div`
  height:100%;
  width: 100%;
  position:absolute;
  inset:0;
  background-color:rgba(0,0,0,0.5)
`;

export default PageContainer;
