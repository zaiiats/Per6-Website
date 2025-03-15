import styled from "styled-components";
import BTWurl from '../../assets/BTWicon.png';
import QRurl from '../../assets/qr-code.png';

function FlipCard() {
  return (
    <StyledFlipCard>
      <FlipCardInner>
        <FlipCardFace>
          <Img src={BTWurl} alt='BTW icon' />
        </FlipCardFace>
        <FlipCardFaceBack>
          <Img src={QRurl} alt='BTW icon' />
        </FlipCardFaceBack>
      </FlipCardInner>
    </StyledFlipCard>
  );
}

const StyledFlipCard = styled.div`
  perspective: 1000px;
  width: 40vh;
  height: 40vh;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg) scale(1.1);
  }
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 2rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
`;

const FlipCardFaceBack = styled(FlipCardFace)`
  transform: rotateY(180deg);
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 2rem;
`;

export default FlipCard
