import styled from 'styled-components';

function LogoText({ type }: { type: string }) {
  return (
    <StyledH1 $type={type}>
      Per<span style={{ color: '#6a64ea' }}>6</span>
    </StyledH1>
  );
}

const StyledH1 = styled.h1<{ $type: string }>`
  font-family:'Poppins', sans-serif;
  font-weight:700;
  font-size: ${({ $type }) => ($type === 'big' ? '9rem' : '3rem')};
  color: white;
`;

export default LogoText;
