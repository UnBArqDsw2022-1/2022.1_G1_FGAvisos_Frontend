import React from 'react';
import './App.css';
import BarraNavegacao from './components/BarraNavegacao';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import PaginaCadastro from './pages/PaginaCadastro';
import PaginaLogin from './pages/PaginaLogin';

function App() {
  return (
    <>
      <BarraNavegacao />
      <PaginaCadastro/>
      <Footer/>
    </>
    

  );
}

export default App;
