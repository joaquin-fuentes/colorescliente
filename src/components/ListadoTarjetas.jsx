import React from 'react';
import Tarjeta from './Tarjeta';

const ListadoTarjetas = ({listadoColores, borrarColor, editarColor, setColor, setEditar, setId}) => {
    return (
        <div className='d-flex justify-content-center flex-wrap'>
                {
                    //si tengo un id lo uso.
                    listadoColores.map((color)=>{
                    return <Tarjeta borrarColor={borrarColor} key={color._id} setId={setId} setEditar={setEditar} color={color} setColor={setColor} editarColor={editarColor}></Tarjeta>
                    })
                }
        </div>
    );
};

export default ListadoTarjetas;