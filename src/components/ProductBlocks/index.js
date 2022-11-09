import Data from "../../Data/products-example.json";
import Card from "./Card";
import "./ProductBlocks.css";

// holds array of objects from imported data file
const productsArr = Data.products;

function ProductBlocks() {
  return (
    <main>
      <h1 className="main-title">Eco Friendly Footwear</h1>

      <div className="products-container">
        {/* maps through imported data to assign the data values to the component's props */}
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
    </main>
  );
}

export default ProductBlocks;
