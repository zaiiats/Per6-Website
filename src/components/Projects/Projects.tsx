import styled from 'styled-components';
import DynamicPage from '../reusable/DynamicPage';
import DynamicButton from '../reusable/DynamicButton';
import FlipCard from './FlipCard';
import DynamicText from '../reusable/DynamicText';

function Projects() {
  return (
    <DynamicPage headingText='Behind The Walls' order={1}>
      <ProjectContainer>
        <ActionContainer>
          <DynamicText>
            {
              '  "BEHIND THE WALLS" – це багатокористувацька постапокаліптична гра у стилі pixel art, що поєднує атмосферу настільної гри з динамікою онлайн-протистоянь. Світ після катастрофи, обмежені ресурси, боротьба за виживання – чи зможете ви потрапити до укриття?'
            }
          </DynamicText>
          <DynamicText>
            {'Виживуть не всі. Готові кинути виклик хаосу?\n'}
            {'Приєднуйтесь до BEHIND THE WALLS!'}
          </DynamicText>
          <ButtonsContainer>
            <DynamicButton callback={() => {}}>
              Завантажити
              <svg
                className='svg'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g strokeLinecap='round'>
                  <path d='m6 20h12' />
                  <g strokeLinejoin='round'>
                    <path d='m12 15-.0005-11' />
                    <path d='m8 12 3.2929 3.2929c.3333.3333.5.5.7071.5s.3738-.1667.7071-.5l3.2929-3.2929' />
                  </g>
                </g>
              </svg>
            </DynamicButton>
            <DynamicButton
              callback={() =>
                window.open(
                  'https://www.youtube.com/watch?v=juYfe2VUBl0',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              Трейлер
              <svg
                className='svg'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path d='m12 20.5c1.8097 0 3.5451-.1788 5.1534-.5066 2.0089-.4095 3.0134-.6143 3.93-1.7928s.9166-2.5313.9166-5.2371v-1.927c0-2.70577 0-4.05863-.9166-5.23713-.9166-1.17849-1.9211-1.38324-3.93-1.79275-1.6083-.32785-3.3437-.50662-5.1534-.50662s-3.54511.17877-5.15344.50662c-2.0089.40951-3.01335.61426-3.92996 1.79275-.9166 1.1785-.9166 2.53136-.9166 5.23713v1.927c0 2.7058 0 4.0586.9166 5.2371.91661 1.1785 1.92106 1.3833 3.92996 1.7928 1.60833.3278 3.34374.5066 5.15344.5066z' />
                  <path
                    d='m15.9621 12.3129c-.1484.6058-.938 1.0409-2.5172 1.9112-1.7177.9464-2.5765 1.4197-3.2721 1.2374-.2356-.0618-.4526-.1704-.63481-.3177-.53799-.4349-.53799-1.3379-.53799-3.1438s0-2.70888.53799-3.14382c.18221-.14732.39921-.25589.63481-.31764.6956-.18233 1.5544.29091 3.2721 1.23739 1.5792.87027 2.3688 1.30537 2.5172 1.91117.0505.2062.0505.4196 0 .6258z'
                    strokeLinejoin='round'
                  />
                </g>
              </svg>
            </DynamicButton>
          </ButtonsContainer>
          <AvailableContainer>
            <p>Доступна у</p>
            <svg
              className='svg'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g strokeLinejoin='round'>
                <path d='m17.9405 12.4311c-.2332.952-1.474 1.6358-3.9557 3.0033-2.6991 1.4873-4.04868 2.231-5.14183 1.9445-.37023-.097-.71123-.2677-.99756-.4992-.84541-.6834-.84541-2.1024-.84541-4.9403 0-2.83783 0-4.25676.84541-4.94025.28633-.23149.62733-.40211.99756-.49915 1.09315-.28651 2.44273.45715 5.14183 1.94448 2.4817 1.36751 3.7225 2.05122 3.9557 3.00332.0793.3239.0793.6594 0 .9833z' />
                <path d='m8 17 8-7.38568m-8-2.61432 8 7.3857' />
                <path d='m2.5 12c0-4.47834 0-6.71751 1.39124-8.10876 1.39125-1.39124 3.63042-1.39124 8.10876-1.39124 4.4783 0 6.7175 0 8.1088 1.39124 1.3912 1.39125 1.3912 3.63042 1.3912 8.10876 0 4.4783 0 6.7175-1.3912 8.1088-1.3913 1.3912-3.6305 1.3912-8.1088 1.3912-4.47834 0-6.71751 0-8.10876-1.3912-1.39124-1.3913-1.39124-3.6305-1.39124-8.1088z' />
              </g>
            </svg>
          </AvailableContainer>
        </ActionContainer>
        <ImageWrapper>
          <FlipCard />
        </ImageWrapper>
      </ProjectContainer>
    </DynamicPage>
  );
}

const ProjectContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  color: var(--white-color-text);
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2rem;
`;

const ImageWrapper = styled.div`
  perspective: 1000px;
  padding: 4%;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  padding-top:2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const AvailableContainer = styled.div`
  display: flex;
  align-items:center;
  gap:0.5rem;
`

export default Projects;
