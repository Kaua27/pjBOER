import React, { useState, useEffect } from 'react';
import './App.css';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase'; // Importa a configuração do Firebase
import ProductForm from './componentes/Productform';
import ProductList from './componentes/Productlist';

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Função para buscar produtos no Firestore
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const productsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts(); // Busca os produtos ao carregar a página
  }, []);

  // Adicionar novo produto no Firestore
  const addProduct = async (product) => {
    const docRef = await addDoc(collection(db, 'products'), product);
    setProducts([...products, { ...product, id: docRef.id }]);
  };

  // Atualizar produto no Firestore
  const updateProduct = async (updatedProduct) => {
    const productDoc = doc(db, 'products', updatedProduct.id);
    await updateDoc(productDoc, updatedProduct);
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Deletar produto no Firestore
  const deleteProduct = async (id) => {
    const productDoc = doc(db, 'products', id);
    await deleteDoc(productDoc);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="App">
      <h1>CRUD de Produtos com Firebase</h1>
      <ProductForm
        addProduct={addProduct}
        currentProduct={currentProduct}
        updateProduct={updateProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        editProduct={setCurrentProduct}
      />
    </div>
  );
}

export default App;
