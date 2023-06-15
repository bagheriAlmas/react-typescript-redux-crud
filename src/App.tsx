// src/App.tsx

import React from 'react';

import AddProductComponent from './components/addProduct';
import ProductList from './components/productList';
import Navbar from './components/navbar';




const App: React.FC = () => {


  return (
    <>
    <Navbar/>
      <div className='container-fluid p-4'>
        
        <div className='row'>
          <div className='col'>
            <ProductList />

          </div>
          <div className='col'>
            <AddProductComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
