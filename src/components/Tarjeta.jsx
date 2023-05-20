import React from 'react';
import { Button, Form } from "react-bootstrap"

const Tarjeta = () => {
    return (
       
             <article className='m-5 border shadow-lg text-center '>
            
                <header className='border p-3'>
                   <h2>Nombre color</h2>
                </header>
                <section className='border p-3 d-flex justify-content-center align-items-center  bgCelesteClaro'>
                    <div className='border p-3 bg-danger '>
                        <div className='contenedorColorTarjeta'></div>
                    </div>
                </section>
                <section className='border p-3 d-flex flex-row-reverse'>
                     <Button variant="danger" position="top-end" type="submit">
                        Borrar
                    </Button> 
                </section>
          
             </article>
    );
};

export default Tarjeta;