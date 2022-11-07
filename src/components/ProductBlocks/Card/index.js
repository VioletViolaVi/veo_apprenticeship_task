function Card({ title, image, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default Card;
