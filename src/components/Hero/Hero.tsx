import styled from "styled-components"
import LogoText from "../reusable/LogoText"
import DynamicButton from "../reusable/DynamicButton";
import { useScroll } from "../../providers/ScrollProvider";
import DynamicText from "../reusable/DynamicText";

function Hero() {
  const {setCurrentPage} = useScroll()
  return (
    <StyledDiv>
      <LogoText type='big' />
      <DynamicText>A unique gaming studio based in Ukraine</DynamicText>
      <DynamicButton type='main' callback={()=>setCurrentPage(2)}>
        Дізнатися більше
      </DynamicButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: var(--white-color-text);
  width: 60%;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

export default Hero
