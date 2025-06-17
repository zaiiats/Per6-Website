/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';

const StyledBTW = styled.div`
  margin-top: 3.5rem;
  display: grid;
  width: 100%;
  grid-template-columns: 18.75rem 1fr 18.75rem;
  grid-template-rows: 1fr 4rem;
  height: calc(100vh - 3.5rem);
  gap: 0.25rem;
`;

const GameWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Game = styled.div<{ $square: boolean }>`
  ${({ $square }) =>
    $square
      ? `
    aspect-ratio: 1 / 1;
    width: 100%;
    height: auto;
    max-height: 100%;
  `
      : `
    width: 100%;
    height: 100%;
  `}
`;


const BottomBanner = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  background-color: #666;
`;

const LeftBanner = styled.div`
  grid-row: 1;
  grid-column: 1;
  background-color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightBanner = styled.div`
  grid-row: 1;
  grid-column: 3;
  background-color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function BTW() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isTall, setIsTall] = useState(false);

  useLayoutEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);


  useLayoutEffect(() => {
    const checkSize = () => {
      if (wrapperRef.current) {
        const { offsetWidth, offsetHeight } = wrapperRef.current;
        setIsTall(offsetHeight > offsetWidth);
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <StyledBTW>
      <LeftBanner>
        <ins
          className='adsbygoogle'
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client='ca-pub-7927608104979846'
          data-ad-slot='3477553840'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </LeftBanner>

      <GameWrapper ref={wrapperRef}>
        <Game $square={isTall} />
      </GameWrapper>

      <RightBanner>
        <ins
          className='adsbygoogle'
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client='ca-pub-7927608104979846'
          data-ad-slot='9851390500'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </RightBanner>

      <BottomBanner>
        <ins
          className='adsbygoogle'
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client='ca-pub-7927608104979846'
          data-ad-slot='7134546062'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </BottomBanner>
    </StyledBTW>
  );
}

export default BTW;
