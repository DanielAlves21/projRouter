const Card = ({image, title, category, paragraph}) => {
    return (
        <div className="card">
            <img src={image} alt={title} width={"50%"}/>
            <h2>{title}</h2>
            <h6>{category}</h6>
            <p>{paragraph}</p>
        </div>
    );
}

export default Card;