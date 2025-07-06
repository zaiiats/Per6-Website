/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/* ────────── константи ────────── */
const NAVBAR_H = '3.5rem';
const SIDE_W = '18.75rem'; // ширина колонки з банерами
//const ADS_CLIENT = 'ca-pub-7927608104979846';

/* ────────── layout ────────── */
const StyledBTW = styled.main`
  margin-top: ${NAVBAR_H};
  display: grid;
  width: 100%;
  height: calc(100dvh - ${NAVBAR_H});
  gap: 0.25rem;

  /* 3 колонки (G,G,банер) × 2 рядки */
  grid-template-columns: 1fr 1fr ${SIDE_W};
  grid-template-rows: 1fr 1fr;
`;

const GameWrapper = styled.section`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  width: 100%;
  height: calc(100dvh - 3.5rem);

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Game = styled.iframe<{ $square: boolean }>`
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

/* ────────── банери ────────── */
// const SideBannerShell = styled.div`
//   all: initial;
//   display: block;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;

//   > ins {
//     all: unset;
//     display: block;
//     width: 100%;
//     height: 100%;
//   }
// `;

// interface AdBannerProps {
//   slot: string;
// }
// const AdBanner: React.FC<AdBannerProps> = ({ slot }) => {
//   const insRef = useRef<HTMLModElement>(null);
//   const [ready, setReady] = useState(false);

//   /* додаємо скрипт один раз */
//   useEffect(() => {
//     if ((window as any).__adsense_loaded) return;
//     const s = document.createElement('script');
//     s.async = true;
//     s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`;
//     s.crossOrigin = 'anonymous';
//     s.onload = () => ((window as any).__adsense_loaded = true);
//     document.head.appendChild(s);
//   }, []);

//   /* пушимо конкретний <ins> лише один раз */
//   useEffect(() => {
//     if (!insRef.current || ready) return;
//     const push = () => {
//       try {
//         ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
//           {}
//         );
//         setReady(true);
//       } catch {
//         /* скрипт ще не ініціалізувався */
//       }
//     };
//     /* пробуємо одразу і, якщо треба, повторюємо */
//     push();
//     const id = setInterval(() => {
//       if (!ready) push();
//       else clearInterval(id);
//     }, 500);
//     return () => clearInterval(id);
//   }, [ready]);

//   return (
//     <SideBannerShell>
//       <ins
//         ref={insRef}
//         className='adsbygoogle'
//         style={{ display: 'block', width: '100%', height: '100%' }}
//         data-ad-client={ADS_CLIENT}
//         data-ad-slot={slot}
//         data-ad-format='auto'
//         data-full-width-responsive='true'
//       />
//     </SideBannerShell>
//   );
// };

// /* ────────── позиції TL / BL ────────── */
// const TopSide = styled.aside`
//   grid-column: 3;
//   grid-row: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: #555;
// `;

// const BottomSide = styled.aside`
//   grid-column: 3;
//   grid-row: 2;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: #555;
// `;

/* ────────── головний компонент ────────── */
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
    <StyledBTW>
      <GameWrapper ref={wrapperRef}>
        <Game
          src='https://btwprojectgame.netlify.app/menu'
          $square={isTall}
        ></Game>
      </GameWrapper>

      {/* TL
      <TopSide>
        <AdBanner slot='3477553840' />
      </TopSide>

      {/* BL (твоє «старе» RightBanner) 
      <BottomSide>
        <AdBanner slot='9851390500' />
      </BottomSide> */}
    </StyledBTW>
  );
};

export default BTW;
