
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams();

    let title = "";
    let image = "";
    let category = "";
    let paragraph = "";
    let price = "";

    switch (id) {
        case "1":
            title = "Caneca Artesanal";
            image = "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600";
            category = "Cozinha";
            paragraph = "Caneca de cerâmica artesanal, ideal para apreciar seu café ou chá favorito.";
            price = "R$ 49,90";
            break;

        case "2":
            title = "Vaso Decorativo";
            image = "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600";
            category = "Decoração";
            paragraph = "Vaso com design orgânico, perfeito para trazer charme ao ambiente.";
            price = "R$ 89,90";
            break;

        case "3":
            title = "Prato Cerâmico";
            image = "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600";
            category = "Mesa posta";
            paragraph = "Prato artesanal com acabamento delicado para compor uma mesa elegante.";
            price = "R$ 59,90";
            break;

        default:
            title = "Produto não encontrado";
            break;
    }

    return (
        <div className="productDetails">

            <img src={image} alt={title} />

            <h1>{title}</h1>

            <h4>{category}</h4>

            <p>{paragraph}</p>

            <h2>{price}</h2>

        </div>
    );
};

export default ProductDetails;
