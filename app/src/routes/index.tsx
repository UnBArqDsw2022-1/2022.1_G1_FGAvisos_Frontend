import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginScreen from '../pages/PaginaLogin';
import Perfil from '../pages/PaginaPerfil';
import BarraNavegacao from '../components/BarraNavegacao';
import Footer from '../components/Footer';

const Rotas = () => {
    return (
        <BrowserRouter>
            <BarraNavegacao/>
            <br />
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
            <br />
            <Footer/>
        </BrowserRouter>
    );
};

export default Rotas;