import styled from 'styled-components';

function LogoText({ type }: { type: string }) {
  return (
    <StyledH1 $type={type}>
      Per<AccentText>6</AccentText>
    </StyledH1>
  );
}

const StyledH1 = styled.h1<{ $type: string }>`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: ${({ $type }) => ($type === 'big' ? '9rem' : '3rem')};
  color: var(--white-color-text);
`;

const AccentText = styled.span`
  color: var(--accent-color);
`;

export default LogoText;
