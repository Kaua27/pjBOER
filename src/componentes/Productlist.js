import React, { useState, useEffect } from 'react';

function ProductForm({ addProduct, currentProduct, updateProduct, setCurrentProduct }) {
  const [product, setProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [currentProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct) {
      updateProduct(product);
      setCurrentProduct(null);
    } else {
      addProduct(product);
    }
    setProduct({ name: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Nome do Produto" 
        value={product.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="price" 
        placeholder="Preço do Produto" 
        value={product.price} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">
        {currentProduct ? 'Atualizar Produto' : 'Adicionar Produto'}
      </button>
    </form>
  );
}

export default ProductForm;
