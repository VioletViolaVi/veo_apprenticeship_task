import "./Card.css";

function Card({ title, image, description }) {
  return (
    <section className="card-container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}

export default Card;
