import {BrowserRouter,Routes,Route} from "react-router-dom"


import ChatDenunciaPage from "./pages/ChatDenunciaPage/ChatDenunciaPage.jsx"
import DetalhamentoDenunciaPage from "./pages/DetalhamentoDenunciaPage/DetalhamentoDenunciaPage.jsx"
import HomePage from  "./pages/HomePage/HomePage.jsx"
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import CadrastroPage from "./pages/CadrastroPage/CadrastroPage.jsx"


import './App.css'




function App() {
 

  return (
    <>
    
      <BrowserRouter>
          <Routes>
              <Route path="" element={<LoginPage></LoginPage>}></Route>
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
