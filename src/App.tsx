import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { ScrollProvider } from './providers/ScrollProvider';

function App() {
  return (
    <StyledApp>
      <ScrollProvider>
        <GlobalStyle />

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

        <Footer />
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
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden; 
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    scrollbar-width: none;
  }
`;

export default App;
