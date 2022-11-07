import Data from "../../Data/products-example.json";
import Card from "./Card";

const productsArr = Data.products;

function ProductBlocks() {
  return (
    <div>
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
  );
}

export default ProductBlocks;
