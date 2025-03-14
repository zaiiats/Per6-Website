import styled from "styled-components"

function Navlink({children, to}:{children:any, to:string}) {
  return (
    <StyledLink href={to}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a`
  color:#fff
`

export default Navlink
