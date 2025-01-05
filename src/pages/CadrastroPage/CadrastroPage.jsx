import Footer from "../../shared/components/footer/Footer"
import Header from "../../shared/components/Header/Header"
import "./CadrastroPage.css"

export default function CadrastroPage() {
  return (
    <>

      <Header></Header>
      <h1>Pagina de cadrastro</h1>

      <form action="">
           <div className="container_campo_nome">
              <label htmlFor="label_nome">Nome:</label>
              <input type="text" name="campo_nome" id="label_nome" />
           </div>
           <div className="container_campo_sobrenome">
              <label htmlFor="label_sobrenome">Sobrenome:</label>
              <input type="text" name="campo_sobrenome" id="label_sobrenome" />
           </div>
           <div className="container_campo_email">
              <label htmlFor="label_email">Email:</label>
              <input type="text" name="campo_email" id="label_email" />
           </div>
           <div className="container_campo_senha">
                <label htmlFor="label_senha">Senha:</label>
                <input type="text" name="campo_senha" id="label_senha" />
           </div>
           <div className="container_campo_senha">
              <label htmlFor="label_repetir_senha">Repetir a Senha:</label>
              <input type="text" name="campo_repetir_senha" id="label_repetir_senha" />
          </div>

      </form>

      <Footer></Footer>

    </>
  )
}
