import styled from 'styled-components';
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
          <Img src={QRurl} alt='QR Code' />
        </FlipCardFaceBack>
      </FlipCardInner>
    </StyledFlipCard>
  );
}

const StyledFlipCard = styled.div`
  perspective: 1000px;
  width: 15rem;
  height: 15rem;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  backface-visibility: hidden;
`;

const FlipCardFaceBack = styled(FlipCardFace)`
  transform: rotateY(180deg);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.8rem;
`;

export default FlipCard;
