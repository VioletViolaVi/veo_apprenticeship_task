import "./Card.css";

function Card({ title, image, description }) {
  return (
    <>
      <section className="card-container">
        <img src={image} alt={title} />

        <div className="card-placement-mat">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}

export default Card;
