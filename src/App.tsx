import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar/Navbar';
import styled, { createGlobalStyle } from 'styled-components';
import { ScrollProvider } from './providers/ScrollProvider';
import BTW from './pages/BTW';

function App() {
  return (
    <StyledApp>
      <ScrollProvider>
        <GlobalStyle />

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/btw' element={<BTW />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </ScrollProvider>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  background-color: var(--main-bg-color);
  min-height: 100dvh;
  overflow: hidden;
  color:var(--white-color-text)
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden; 
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;

    font-size: 16px;

    @media screen and (min-width: 1920px) { 
      font-size: 20px;
    }

    @media screen and (max-width: 1120px) { 
      font-size: 14px;
    }
    @media screen and (max-width: 800px) { 
      font-size: 12px;
    }
    @media screen and (max-width: 480px) { 
      font-size: 8px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    scrollbar-width: none;
  }
`;

export default App;
