import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginScreen from '../pages/PaginaLogin';
import Perfil from '../pages/PaginaPerfil';
import BarraNavegacao from '../components/BarraNavegacao';
import Footer from '../components/Footer';
import PaginaAvisos from '../pages/PaginaAvisos';
import PaginaCadastro from '../pages/PaginaCadastro';

const Rotas = () => {
    return (
        <BrowserRouter>
            <BarraNavegacao/>
            <Routes>
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/cadastro" element={<PaginaCadastro />} />
                <Route path="/" element={<PaginaAvisos/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Rotas;