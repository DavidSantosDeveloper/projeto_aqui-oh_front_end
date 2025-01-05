import "./DetalhamentoDenunciaPage.css"
import a from "../../shared/components/Header/Header.jsx"
import Header from "../../shared/components/Header/Header.jsx"
import FiltroDenuncias from "../../shared/components/FiltroDenuncias/FiltroDenuncias.jsx"
import Footer from "../../shared/components/footer/Footer.jsx"

export default function DetalhamentoDenunciaPage() {
  return (
    <>
       <Header></Header>
       <FiltroDenuncias></FiltroDenuncias>
        <div>
            <h3>Chat de denuncia</h3>
        </div>
      <Footer></Footer>

       
    </>
  )
}
