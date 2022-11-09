import "./Card.css";

function Card({ title, image, description }) {
  return (
    <>
      {/* passes props from Card component */}
      <section className="card-container">
        <figure className="image-container">
          <img src={image} alt={title} />
        </figure>

        <div className="card-placement-mat">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}

export default Card;
