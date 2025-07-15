import { ReactNode } from "react";
import styled from "styled-components";

function DynamicButton({
  children,
  type,
  callback,
}: {
  children: any;
  type?: string;
  callback: () => void;
}) {
  return (
    <>
      {type === "main" ? (
        <StyledButton onClick={callback}>
          <TextContainer>
            {Array.isArray(children) ? (
              children.map((node: string | ReactNode, i: number) => {
                return <Text key={node?.toString() || i}>{node}</Text>;
              })
            ) : (
              <Text>{children}</Text>
            )}
          </TextContainer>
          <Background />
        </StyledButton>
      ) : (
        <StyledSimpleButton onClick={callback}>
          {Array.isArray(children) ? (
            children.map((node: string | ReactNode, i: number) => {
              return <Text key={node?.toString() || i}>{node}</Text>;
            })
          ) : (
            <Text>{children}</Text>
          )}
        </StyledSimpleButton>
      )}
    </>
  );
}

const StyledButton = styled.button`
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes spin {
    from {
      --angle: 0deg;
    }
    to {
      --angle: 360deg;
    }
  }

  position: relative;
  border-radius: 0.3rem;
  padding: 0.15rem;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  overflow: hidden;
  transition: var(--transition, all 0.3s ease); /* додано запасне значення */
  font-size: 1.2rem;

  &:hover > div {
    color: var(--accent-color);
  }
`;

const TextContainer = styled.div`
  z-index: 2;
  position: relative;
  padding: 0.75rem 1.5rem;
  background-color: var(--main-bg-color);
  border-radius: 0.3rem;
  color: inherit;
`;

const Background = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  background-image: conic-gradient(
    from var(--angle),
    var(--main-bg-color),
    var(--accent-color),
    var(--main-bg-color)
  );
  z-index: 1;
  animation: spin 2s linear infinite;
`;

const StyledSimpleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border: var(--white-border);
  border-radius: 0.3rem;
  color: var(--white-color-text);
  transition: var(--transition);

  font-size: 1.2rem;

  @media screen and (max-width: 30rem) {
    font-size: 3rem;
    padding: 1.5rem 5vw;
    
    .svg {
      padding: 0;
      height: 3rem;
      width: 3rem;
    }
  }


  & .svg {
    transition: var(--transition);
  }

  &:hover {
    border: var(--accent-border);
  }

  &:hover > span {
    color: var(--accent-color);
  }

  &:hover .svg {
    stroke: var(--accent-color);
  }
`;

const Text = styled.span`
  display:flex;
  align-item:center;
  transition: var(--transition);
`;

export default DynamicButton;
