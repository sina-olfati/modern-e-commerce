import { items } from "../AllData";

function CategoriesItem() {
  const filteredItems = items.filter((item) => item.category === "skin-care");
  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="product normal">
                <div className="product-header">
                  <img src={item.img} alt="product1" />
                </div>
                <div className="product-details">
                  <p>{item.description}</p>
                  <p className="item-price">{item.price}$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
