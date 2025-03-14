import styled from "styled-components"
import LogoText from "../reusable/LogoText"
import Button from "../reusable/Button";

function Hero() {
  return (
    <StyledDiv>
      <LogoText type='big' />
      <h3>A unique gaming studio based on Ukraine</h3>
      <Button text="Дізнатися більше"/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color:#fff;
  width:60%;
  flex-direction:column;
  display: flex;
  flex-direction:column;
  align-items:start;
  gap:2rem;
`

export default Hero
