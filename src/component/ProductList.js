import React, { Component,useEffect } from 'react'
import ProductRow from './ProductRow';
import products from './data'
import axios from 'axios';
export default class ProductList extends Component {
;
    state={
          products:products
    }
    componentDidMount(){
        console.log("component did mount");
        axios.get("http://localhost:8081/products/").
        then(response=>{
            console.log("got response");
            const products=response.data;
            this.setState({products});
        }).catch(err=>console.log(err))
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