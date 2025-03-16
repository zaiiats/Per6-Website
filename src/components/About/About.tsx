import DynamicPage from '../reusable/DynamicPage';
import styled from 'styled-components';
import DynamicText from '../reusable/DynamicText';
import placeholder from '../../assets/sasha.jpg';

interface Person {
  name: string;
  image: string;
  position: string;
  instagramUrl: string;
}

function About() {
  const team: Person[] = [
    {
      name: 'Саша',
      image: placeholder,
      position: 'Team Lead, Fullstack-розробник',
      instagramUrl: 'https://instagram.com/zaiiats',
    },
    {
      name: 'Соломія',
      image: placeholder,
      position: 'Графічний дизайнер, SMM-спеціаліст',
      instagramUrl: 'https://instagram.com/solomiya7512',
    },
    {
      name: 'Віталій',
      image: placeholder,
      position: 'Геймдизайнер, UI/UX-дизайнер',
      instagramUrl: 'https://instagram.com/vrypkovych',
    },
    {
      name: 'Олександр',
      image: placeholder,
      position: 'Саунд-дизайнер, Frontend-розробник',
      instagramUrl: 'https://instagram.com/_sasha_sysoiev_',
    },
    {
      name: 'Іван',
      image: placeholder,
      position: 'Тестувальник, Frontend-розробник',
      instagramUrl: 'https://instagram.com/ivan__chernenko_',
    },
    {
      name: "Мар'яна",
      image: placeholder,
      position: 'Frontend-розробник',
      instagramUrl: 'https://instagram.com/stasiv_mary',
    },
  ];

  const sortedTeam = [...team].sort(() => Math.random() - 0.5);

  return (
    <DynamicPage headingText='Про нас' order={2}>
      <ContentWrapper>
        <Description>
          Ми — Per6, незалежна команда з 6 творчих ентузіастів-розробників з
          різних куточків України.
        </Description>
        <CardsContainer>
          {sortedTeam.map((person) => (
            <Card
              key={person.name}
              target='_blank'
              rel='noopener noreferrer'
              href={person.instagramUrl}
            >
              <CardImage src={person.image} alt={`${person.name}'s image`} />
              <CardInfo>
                <Name>{person.name}</Name>
                <Position>{person.position}</Position>
              </CardInfo>
            </Card>
          ))}
        </CardsContainer>
      </ContentWrapper>
    </DynamicPage>
  );
}

const ContentWrapper = styled.div`
  flex: 1;
`;

const Description = styled(DynamicText)`
  max-width: 50rem;
  margin: 0 auto 3rem;
  text-align: center;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;

  @media screen and (max-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
  }
  
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.a`
  display: block;
  position: relative;
  width: 100%;
  max-height: 100%;
  background-color: var(--main-bg-color);
  border-radius: 1rem;
  box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    transform: translateY(-2rem);
  }

  &:nth-child(2n) {
    transform: translateY(-2rem);

    &:hover {
      transform: translateY(0rem);
    }
  }

  @media screen and (max-width: 1120px) {
    width: 25vw;
    height: 25vh;

    &:nth-child(2n) {
      transform: translateY(0);
    }
  }
  
  @media screen and (max-width: 640px) {
    width: 40vw;
    height: 20vh;

    &:nth-child(2n) {
      transform: translateY(0);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 85%;
  object-fit: cover;

  @media screen and (max-width: 1120px) {
    max-width: 100%;
    height: 85%;
  }
`;

const CardInfo = styled.div`
  height: 15%;
  padding: 0 0.75rem;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1120px) {
    max-width: 100%;
    height: 15%;
  }
`;

const Name = styled.h3`
  position: absolute;
  top:-50%;
  transform:translateY(-50%);
  left:0;
  width:100%;
  text-align:center;
  font-size: 1.2rem;
  font-weight:500;
`;

const Position = styled.p`
  font-size: 0.8rem;
`;

export default About;
