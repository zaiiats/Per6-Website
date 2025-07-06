import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/* ────────── обгортка на весь екран ────────── */
const FullscreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ────────── iframe з обмеженням 1:1 ────────── */
const FullscreenGame = styled.iframe<{ $square: boolean }>`
  border: none;

  ${({ $square }) =>
    $square
      ? `
    aspect-ratio: 1/1;
    width: 100%;
    max-height: 100%;
  `
      : `
    width: 100%;
    height: 100%;
  `}
`;

const BTW: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    const check = () => {
      if (!wrapperRef.current) return;
      const { offsetWidth, offsetHeight } = wrapperRef.current;
      setIsTall(offsetHeight > offsetWidth);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <FullscreenWrapper ref={wrapperRef}>
      <FullscreenGame
        src='https://btwprojectgame.netlify.app/menu'
        $square={isTall}
      />
    </FullscreenWrapper>
  );
};

export default BTW;
