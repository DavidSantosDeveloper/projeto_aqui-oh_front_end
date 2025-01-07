import "./LoginPage.css"
import Header from "../../shared/components/Header/Header.jsx"
import Footer from "../../shared/components/footer/Footer.jsx"
import { Link } from "react-router-dom"

function LoginPage(){

    async function realizarLogin(formData) {
        console.log("fez longin")
    }
    return (
        <>

            <Header>

            </Header>
            <section className="container_login">
                

                <form action={realizarLogin} className="container_form_login">
                    <h1>Login</h1>
                    <div className="container_campo_usuario">
                        <label htmlFor="label_usuario">Usuário:</label>
                        <input type="text" name="campo_usuario" id="label_usuario" />
                    </div>
                   <div className="container_campo_senha">
                        <label htmlFor="label_usuario">Senha:</label>
                        <input type="text" name="campo_senha" id="label_senha" />
                   </div>

                   <button type="submit" className="butao-login">Entrar</button>

                   <Link to="/cadrastro"> Não possui uma conta? faça seu cadratro</Link>
                   

                </form>

            </section>

            {/* <Footer></Footer> */}
            

        </>
    )
}

export default LoginPage


