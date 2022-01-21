import React,{useState} from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductsGrid.module.scss";
import { useProducts } from "../../hooks/useProducts";

const ProductsGrid = () => {
  const { products, products2 } = useProducts();
 
  const [query, setQuery] = useState("");

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">{products.length + products2.length} Products</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input
              type="text"
              name="query"
              placeholder="Search product"
              className="form-control"
              onChange={onChange}
              value={query}
              autoComplete="on"
              id=""
            />
          </div>
        </div>
      </div>
      <h1>Product List 1</h1>
      <div className={styles.p__grid}>
        {products.filter(article => {
      
      return article.name.toLowerCase().includes(query.toLowerCase())
       
      }).map((product2) => (
          <ProductItem key={product2.id} product={product2} />
        ))}
      </div>
      <h1>Product List 2</h1>

      {products2.filter(article => {
      
      return article.name.toLowerCase().includes(query.toLowerCase())
       
      }).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      <div className={styles.p__footer}></div>
    </div>
  );
};

export default ProductsGrid;
