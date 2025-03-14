import styled from "styled-components"

function Button({text}:{text:string}) {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color:transparent;
  border-radius:0.3rem;
  border:0.15rem solid #fff;
  padding: 0.75rem 1.5rem;
  color:inherit
`

export default Button
