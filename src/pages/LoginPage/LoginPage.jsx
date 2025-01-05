import "./LoginPage.css"


function LoginPage(){
    return (
        <>
            <section>
                <h1>Pagina de login</h1>

                <form action="">
                    <div ssName="container_campo_usuario">
                        <label htmlFor="label_usuario">Usuário:</label>
                        <input type="text" name="campo_usuario" id="label_usuario" />
                    </div>
                   <div className="container_campo_senha">
                        <label htmlFor="label_usuario">Senha:</label>
                        <input type="text" name="campo_senha" id="label_senha" />
                   </div>

                   <button type="submit">Login</button>
                   

                </form>

            </section>
            

        </>
    )
}

export default LoginPage


