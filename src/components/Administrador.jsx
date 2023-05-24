import { Button, Form } from "react-bootstrap"
import ListadoTarjetas from "./ListadoTarjetas";
import { useState, useEffect } from "react";

const Administrador = () => {

    const [tarjeta, setTarjeta] = useState("")
    let tarjetasLocalstorage = JSON.parse(localStorage.getItem("listaTarjetas") || [])
    const [listadoTarjetas, setlistadoTarjetas] = useState(tarjetasLocalstorage)

    useEffect(()=>{
       
        localStorage.setItem("listaTarjetas", JSON.stringify(listadoTarjetas))
    }, [listadoTarjetas])

    const estilo = {
        backgroundColor: tarjeta,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarjeta !== "") {
            setlistadoTarjetas([...listadoTarjetas, tarjeta]);
            setTarjeta("");
        }
    };

    const borrarTarjeta = (nombreTarjeta)=>{
        let arregloFiltrado = listadoTarjetas.filter((tarjeta)=>tarjeta !== nombreTarjeta)
        setlistadoTarjetas(arregloFiltrado)
    }


    return (
        <article>
            <Form onSubmit={handleSubmit} className=" m-5 border shadow ">
                <header className='border p-3'>
                    <h1>Administrar Colores</h1>
                </header>
                <section className='border p-3 d-flex align-items-center  bgCelesteClaro'>
                    <div className="border p-3 ms-4" style={estilo}>
                        <div className='contenedorColor'></div>
                    </div>
                    <Form.Group className='mx-4 w-100' >
                        <Form.Control type="text" placeholder="Ingrese un color"
                            onChange={(e) => setTarjeta(e.target.value)}
                            value={tarjeta} />
                    </Form.Group>
                </section>
                <section className='border p-3 d-flex flex-row-reverse'>
                    <Button variant="primary" position="top-end" type="submit">
                        Guardar
                    </Button>
                </section>
            </Form>
            <section>
                <ListadoTarjetas  listadoTarjetas={listadoTarjetas} borrarTarjeta={borrarTarjeta}></ListadoTarjetas>
            </section>
        </article>
    );
};

export default Administrador;