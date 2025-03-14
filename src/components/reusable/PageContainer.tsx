import styled from "styled-components"

function PageContainer({children}:{children:any}) {
  return (
    <StyledPageContainer>
      <Page>
        {children}
      </Page>
    </StyledPageContainer>
  )
}

const StyledPageContainer = styled.section`
  flex: 1;
  height: 100dvh;
  display: flex;
`;

const Page = styled.section`
  margin: 0 auto;
  max-width: 100rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PageContainer
