import styled from "styled-components";

function DynamicButton({
  children,
  type,
}: {
  children: any;
  type?: string;
}) {
  return (
    <>
      {type === 'main' ? (
        <StyledButton>
          <Text>{children}</Text>
          <Background />
        </StyledButton>
      ) : (
        <StyledSimpleButton>{children}</StyledSimpleButton>
      )}
    </>
  );
}

const StyledButton = styled.button`
  @property --angle {
    syntax: '<angle>';
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
  transition: var(--transition);

  &:hover > div {
    color: var(--accent-color);
  }
`;

const Text = styled.div`
  z-index: 2;
  position: relative;
  padding: 0.75rem 1.5rem;
  background-color: var(--main-bg-color);
  border-radius: 0.3rem;
  transition: var(--transition);
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
  background-color: var(--main-bg-color);
  padding: 0.75rem 1.5rem;
  border: var(--white-border);
  border-radius: 0.3rem;
  color: var(--white-color-text);
  transition: var(--transition);

  &:hover {
    border: var(--accent-border);
  }
`;



export default DynamicButton;
