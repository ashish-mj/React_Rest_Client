import React, { Component,useEffect } from 'react'
import ProductRow from './ProductRow';
import products from './data'
export default class ProductList extends Component {
;
    state={
          products:products
    }
    
    render() {
        return (
            <div className="productList">
                 <div className="pList">
                            
               <h1> Product List will display here .... just wait</h1>
              
               {
               
                this.state.products.map(p=><ProductRow product={p} key={p.productId}/>)
               }
               </div>
               <div className="newProductForm">
             
               </div>
            </div>
        )
    }
}