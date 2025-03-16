import DynamicPage from '../reusable/DynamicPage';
import styled from 'styled-components';
import DynamicText from '../reusable/DynamicText';
import placeholder from '../../assets/sasha.jpg'; // Replace with actual image

interface Person {
  name: string;
  image: string;
  position: string;
  instagramUrl: string;
}

function About() {
  const team: Person[] = [
    {
      name: 'John Doe',
      image: placeholder,
      position: 'Frontend Developer',
      instagramUrl: 'https://instagram.com/example',
    },
    {
      name: 'Jane Smith',
      image: placeholder,
      position: 'UI/UX Designer',
      instagramUrl: 'https://instagram.com/example',
    },
    {
      name: 'Alice Johnson',
      image: placeholder,
      position: 'Backend Developer',
      instagramUrl: 'https://instagram.com/example',
    },
    {
      name: 'Bob Brown',
      image: placeholder,
      position: 'Full Stack Developer',
      instagramUrl: 'https://instagram.com/example',
    },
    {
      name: 'Carol White',
      image: placeholder,
      position: 'Project Manager',
      instagramUrl: 'https://instagram.com/example',
    },
    {
      name: 'Eve Black',
      image: placeholder,
      position: 'QA Engineer',
      instagramUrl: 'https://instagram.com/example',
    },
  ];

  return (
    <DynamicPage headingText='Про нас' order={2}>
      <ContentWrapper>
        <Description>
          Ми — Per6, незалежна команда з 6 творчих ентузіастів-розробників з
          різних куточків України.
        </Description>
        <CardsContainer>
          {team.map((person) => (
            <Card key={person.name}>
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
  font-size: 1.2rem;
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
`;

const Card = styled.div`
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
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 90%;
  object-fit: cover;
`;

const CardInfo = styled.div`
  height:10%;
  padding: 0.75;
  position:relative;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items:center;
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
