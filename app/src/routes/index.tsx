import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginScreen from '../pages/PaginaLogin';
import Perfil from '../pages/PaginaPerfil';
import BarraNavegacao from '../components/BarraNavegacao';
import Footer from '../components/Footer';
import PaginaAvisos from '../pages/PaginaAvisos';

const Rotas = () => {
    return (
        <BrowserRouter>
            <BarraNavegacao/>
            <br />
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/paginaInicial" element={<PaginaAvisos/>} />
            </Routes>
            <br />
            <Footer/>
        </BrowserRouter>
    );
};

export default Rotas;