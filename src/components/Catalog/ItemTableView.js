import React from 'react'
import CatalogList from './Catalog'
import './ItemTableView.css'


const ItemCardView = () => {
    var productsList = CatalogList.map(element => {
        // let rowStyle = "row-green";
        // if(!element.inStock) {
        //     rowStyle = "row-red";
        // }

        return (
            <tr className="row">
                <td className="cell">{element.name}</td>
                <td className="cell">{element.discountedPrice}</td>
                <td className="cell">{element.originalPrice}</td>
                <td className="cell">{element.category}</td>
                <td className="cell">{element.inStock ? 'Yes' : 'Out of Stock'}</td>
            </tr>
        );
    });

    return (
    <div>
        <h1>Catalog</h1>
        <table className="table">
            <tr>
                <th className="header">Name</th>
                <th className="header">Price</th>
                <th className="header">Orignal Price</th>
                <th className="header">Category</th>
                <th className="header">Available</th>
            </tr>
            {productsList}
        </table>
    
    </div>
    );
}



export default ItemCardView