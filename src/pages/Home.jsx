import { Link } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";

function Home() {

    return (
        <div>
            <Header />
            <div className="gridCards">

            <Link to="/product/1">
                <Card
                    image="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600"
                    title="Caneca Artesanal"
                    category="Cozinha"
                    paragraph="Caneca de cerâmica artesanal, ideal para café e chá."
                />
            </Link>

            <Link to="/product/2">
                <Card
                    image="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600"
                    title="Vaso Decorativo"
                    category="Decoração"
                    paragraph="Vaso com design orgânico para decorar ambientes."
                />
            </Link>

            <Link to="/product/3">
                <Card
                    image="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600"
                    title="Prato Cerâmico"
                    category="Mesa posta"
                    paragraph="Prato artesanal com acabamento delicado."
                />
            </Link>

        </div>
        </div>
    )

}
export default Home;