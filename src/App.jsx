import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Administrador from './components/Administrador';
import "./App.css"
import Tarjeta from './components/Tarjeta';

const App = () => {
  return (
    <main>
        <Administrador></Administrador>
        <section className='d-flex justify-content-center flex-wrap'>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>
            <Tarjeta></Tarjeta>

        </section>

    </main>
  );
};

export default App;