import React, { useState } from "react";
import { useEffect } from "react";

export default function Products() {
  const [state, setState] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(setState);
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <h2>Our Products</h2>
      {state ? (
        <div className="products">
          {state.products.map((product) => (
            <div className="products_item" key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <img src={product.thumbnail} alt={product.title} />
              <p>Price ${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading bos</p>
      )}
    </div>
  );
}
