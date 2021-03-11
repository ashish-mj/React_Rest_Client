
import React, { Component } from 'react'

export default class ProductRow extends Component {
   
    render() {
        let {productId,productName,price}=this.props.product;
        return (
            <div className="product">
                <span className="data"> {productId}</span>  &nbsp;&nbsp;&nbsp;
                <span className="data">{productName} </span>
                <span className="data">{price} </span>
              
             
            </div>
        )
    }
    
}