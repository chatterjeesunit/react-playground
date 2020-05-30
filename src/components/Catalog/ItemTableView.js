import React from 'react'
import cataloglist from './Catalog.json'
import './ItemTableView.css'


const ItemTableView = () => {
    var productsList = cataloglist.map(element => {
        

        return (
            <tr className="row" key={element.id.toString()}>
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
            <tbody>
                <tr>
                    <th className="header">Name</th>
                    <th className="header">Price</th>
                    <th className="header">Orignal Price</th>
                    <th className="header">Category</th>
                    <th className="header">Available</th>
                </tr>
                {productsList}
            </tbody>
        </table>
    
    </div>
    );
}



export default ItemTableView