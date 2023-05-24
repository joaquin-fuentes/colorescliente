import React from 'react';
import Tarjeta from './Tarjeta';

const ListadoTarjetas = ({listadoTarjetas , borrarTarjeta}) => {
    return (
        <div className='d-flex justify-content-center flex-wrap'>
                {
                    //si tengo un id lo uso.
                    listadoTarjetas.map((tarjeta, indice)=>{
                    return <Tarjeta tarjeta={tarjeta} key={indice} borrarTarjeta={borrarTarjeta}></Tarjeta>
                    })
                }
        </div>
    );
};

export default ListadoTarjetas;