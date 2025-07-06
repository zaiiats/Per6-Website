import styled from "styled-components"

function Heading({children}:{children:any}) {
  return <StyledH2>{children}</StyledH2>;
}

const StyledH2 = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: var(--white-color-text);
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export default Heading
