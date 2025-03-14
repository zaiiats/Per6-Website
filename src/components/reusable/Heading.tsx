import styled from "styled-components"

function Heading({text}:{text:string}) {
  return (
    <StyledH2>
      {text}
    </StyledH2>
  )
}

const StyledH2 = styled.h2`
  font-size:2rem;
  text-align:center;

`

export default Heading
