import React from 'react';

function ProductList({ products, deleteProduct, editProduct }) {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => editProduct(product)}>Editar</button>
              <button onClick={() => deleteProduct(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
    </div>
  );
}

export default ProductList;
