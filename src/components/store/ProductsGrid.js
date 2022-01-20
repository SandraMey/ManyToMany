import React from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import { useProducts } from '../../hooks/useProducts';

const ProductsGrid = () => {

    const { products,products2 } = useProducts()

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
                ProductList 1
            </div>
            <div className={styles.p__grid}>

                {
                    products2.map(product2 => (
                        <ProductItem key={product2.id} product={product2}/>
                    ))
                }

            </div>
            <h1>ProductList 2</h1>

            {
                    products2.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }


            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;