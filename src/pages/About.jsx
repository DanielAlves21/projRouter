import Header from "../components/Header";
import '../styles/About.css'

function About() {

    return (
        <div>
            <Header />
            <main className="about">
                <section className="aboutBanner">
                    <h1>Sobre nós</h1>
                    <p>Arte, cuidado e criatividade em cada detalhe.</p>
                </section>

                <section className="aboutContent">

                    <div className="aboutImage">
                        <img
                            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900"
                            alt="Produção artesanal de cerâmica"
                        />
                    </div>

                    <div className="aboutText">
                        <h2>Nossa história</h2>

                        <p>
                            A Arte em Cerâmica nasceu do amor pela arte manual
                            e pela beleza das peças feitas à mão.
                            Nossa loja foi criada com o propósito de levar
                            personalidade, delicadeza e aconchego para cada lar.
                        </p>

                        <p>
                            Cada peça é inspirada na natureza, nas formas
                            orgânicas e na simplicidade do cotidiano.
                            Valorizamos o trabalho artesanal e acreditamos
                            que cada detalhe conta uma história.
                        </p>

                        <h2>Nosso propósito</h2>

                        <p>
                            Mais do que produzir objetos decorativos,
                            queremos proporcionar experiências através
                            de peças únicas, criativas e cheias de significado.
                        </p>
                    </div>

                </section>

                <section className="aboutValues">

                    <div>
                        <h3>♡ Artesanato</h3>
                        <p>Peças com identidade e cuidado em cada detalhe.</p>
                    </div>

                    <div>
                        <h3>✧ Criatividade</h3>
                        <p>Designs exclusivos inspirados na beleza natural.</p>
                    </div>

                    <div>
                        <h3>♧ Qualidade</h3>
                        <p>Dedicação na escolha dos materiais e acabamentos.</p>
                    </div>

                </section>

            </main>
        </div>
    )

}
export default About;