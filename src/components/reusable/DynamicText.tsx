import styled from 'styled-components';

interface DynamicTextProps {
  children: string[] | string;
  className?: string;
}

function DynamicText({ children, className }: DynamicTextProps) {
  return <P className={className}>{children}</P>;
}

const P = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  word-spacing: 0.3rem;
`;

export default DynamicText;
