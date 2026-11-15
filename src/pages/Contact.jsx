import Header from "../components/Header";
import '../styles/Contact.css'

function Contact() {

    return (
        <div>
            <Header />
            <main className="contact">

                <section className="contactBanner">
                    <h1>Entre em contato</h1>
                    <p>Será um prazer conversar com você!</p>
                </section>

                <section className="contactContent">

                    <div className="contactInfo">

                        <h2>Fale conosco</h2>

                        <p>
                            Tem alguma dúvida, sugestão ou deseja conhecer
                            melhor nossos produtos? Estamos à disposição!
                        </p>

                        <div className="infoItem">
                            <h3>✉ Email</h3>
                            <p>contato@arteemceramica.com.br</p>
                        </div>

                        <div className="infoItem">
                            <h3>☎ Telefone</h3>
                            <p>(85) 99999-9999</p>
                        </div>

                        <div className="infoItem">
                            <h3>⌖ Endereço</h3>
                            <p>Rua das Flores, 120 - Fortaleza/CE</p>
                        </div>

                        <div className="infoItem">
                            <h3>◷ Atendimento</h3>
                            <p>Segunda a sexta: 09h às 18h</p>
                        </div>

                    </div>


                </section>

            </main>
        </div>
    )

}
export default Contact;