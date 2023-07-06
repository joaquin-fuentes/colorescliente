import React from 'react';
import { Button, Form } from "react-bootstrap"

const Tarjeta = ({color, borrarColor, setColor, setEditar, setId}) => {

    const estilo = {
        backgroundColor: color.nombreColor,
    };

    const editarUnColor =(color)=>{
        setEditar(true)
        setColor(color.nombreColor)
        setId(color._id)
    }
    return (
       
             <article className='m-5 border shadow-lg text-center '>
                <header className='border p-3'>
                   <h2>{color.nombreColor}</h2>
                </header>
                <section className='border p-3 d-flex justify-content-center align-items-center  bgCelesteClaro'>
                    <div className='border p-3' style={estilo}>
                        <div className='contenedorColorTarjeta'></div>
                    </div>
                </section>
                <section className='border p-3 d-flex flex-row-reverse'>
                     <Button onClick={()=>borrarColor(color._id)} variant="outline-danger" className='m-1' position="top-end" type="submit">
                        Borrar
                      </Button> 
                      <Button onClick={()=>editarUnColor(color)} className="m-1" variant="outline-primary">Editar</Button>

                </section>
          
             </article>
    );
};

export default Tarjeta;