import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


import { Home } from "./pages/Home.jsx"
import { Bobsburger } from "./pages/Bobsburger.jsx"
import { Header } from "./components/Header.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/bobsburger/:id" element={<Bobsburger />} />

          </Routes>

        </main>
      </BrowserRouter>
    </>
  )
}

export default App
