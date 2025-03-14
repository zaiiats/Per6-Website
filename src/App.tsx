import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <>
      <nav>
        HELLO WORLD!!!
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <footer>
        BYE WORLD!!!
      </footer>
    </>
  )
}

export default App
