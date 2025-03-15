import styled from "styled-components"
import LogoText from "../reusable/LogoText"
import DynamicButton from "../reusable/DynamicButton";

function Hero() {
  return (
    <StyledDiv>
      <LogoText type='big' />
      <h3>A unique gaming studio based on Ukraine</h3>
      <DynamicButton type='main'>
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
