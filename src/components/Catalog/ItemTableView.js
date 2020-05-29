import React from 'react'
import CatalogList from './Catalog'
import './ItemTableView.css'


const ItemCardView = () => {
    var productsList = CatalogList.map(element => {
        let rowStyle = "row-green";
        if(!element.inStock) {
            rowStyle = "row-red";
        }

        return (
            <tr className={rowStyle}>
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
        <table className="table-style">
            <tr className="row">
                <th className="cell">Name</th>
                <th className="cell">Price</th>
                <th className="cell">Orignal Price</th>
                <th className="cell">Category</th>
                <th className="cell">Available</th>
            </tr>
            {productsList}
        </table>
    
    </div>
    );
}



export default ItemCardView