import Footer from "../../shared/components/footer/Footer"
import "./ChatDenunciaPage.css"

export default function ChatDenunciaPage() {
  return (
    <>
       <h1>Chat denuncia</h1>

       <div>
            <div >
                <span>Nome do cidadao</span>
            </div>

            <div className="caixa_messagens">
                 <div className="mensagem">
                            Mensagem de exemplo1
                            
                 </div>
                 <div className="mensagem">
                            Mensagem de exemplo2
                            
                 </div>
                 <div className="mensagem">
                            Mensagem de exemplo 3
                 </div>

            </div>
       

       </div>


       <Footer></Footer>
    </>
  )
}
