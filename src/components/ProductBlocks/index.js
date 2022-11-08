import Data from "../../Data/products-example.json";
import Card from "./Card";
import "./ProductBlocks.css";

const productsArr = Data.products;

function ProductBlocks() {
  return (
    <>
      <h1 className="main-title">Eco Friendly Footwear</h1>

      <div className="products-container">
        {productsArr.map((singleObj) => {
          return (
            <Card
              key={singleObj.slug}
              title={singleObj.title}
              image={singleObj.image}
              description={singleObj.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductBlocks;
