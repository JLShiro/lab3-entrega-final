import React from "react";

function Catalog() {
    const products = [
        { id: 1, name: 'Producto 1', price: 19.99 },
        { id: 2, name: 'Producto 2', price: 29.99 },
        { id: 3, name: 'Producto 3', price: 39.99 }
    ];

    return (
        <div>
            <h2>Catálogo de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <span>{product.name}</span>
                        <span>Precio: ${product.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalog;