import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DynamicButton from '../components/reusable/DynamicButton';

const StyledNotFound = styled.div`
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 3.5rem);
`;

const Text = styled.p`
  font-size: 5rem;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <Text>
        <b>404 </b> Page not found
      </Text>
      <DynamicButton callback={() => navigate('/')}>Go back</DynamicButton>
    </StyledNotFound>
  );
}

export default PageNotFound;
