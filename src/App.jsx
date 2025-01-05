import {BrowserRouter,Routes,Route} from "react-router-dom"


import "./pages/ChatDenunciaPage/ChatDenunciaPage.jsx"
import "./pages/DetalhamentoDenunciaPage/DetalhamentoDenunciaPage.jsx"
import "./pages/HomePage/HomePage.jsx"
import "./pages/LoginPage/LoginPage.jsx"

import './App.css'
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import CadrastroPage from "./pages/CadrastroPage/CadrastroPage.jsx"


function App() {
 

  return (
    <>
    
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage></LoginPage>}></Route>
              <Route path="/cadrastro" element={<CadrastroPage></CadrastroPage>}></Route>
              <Route path="/chat" element={<ChatDenunciaPage></ChatDenunciaPage>}></Route>
              <Route path="/detalhamento" element={<DetalhamentoDenunciaPage></DetalhamentoDenunciaPage>}></Route>
              <Route path="/home" element={<HomePage></HomePage>}></Route>
          </Routes>
      
      </BrowserRouter>
    
    
    </>
 
  )
}

export default App
