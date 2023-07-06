import { Button, Form } from "react-bootstrap"
import ListadoTarjetas from "./ListadoTarjetas";
import Swal from "sweetalert2"
import { useState, useEffect } from "react";
import { obtenerColores, consultaCrearColor, consultaBorrarColor, consultaEditarColor } from "../components/helpers/queries"


const Administrador = () => {

    const [nombreColor, setColor] = useState("");
    const [id, setId] = useState("");
    const [listadoColores, setListadoColores] = useState([]);
    const [editar, setEditar] = useState(false)

    const traerColores = () => {
        obtenerColores().then((respuesta) => {
            if (respuesta != null) {
                setListadoColores(respuesta)
            } else {
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
            }
        })
    }
    useEffect(() => {
        traerColores()

    }, [])

    const estilo = {
        backgroundColor: nombreColor,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombreColor.trim() !== "") {
            consultaCrearColor({ nombreColor }).then((respuesta) => {
                if (respuesta.status === 201) {
                    Swal.fire(
                        'Agregado!',
                        `El nuevo color fue agregado`,
                        'success'
                    )
                    setColor("");
                    traerColores()
                } else {
                    Swal.fire(
                        'Error!',
                        `No se pudo procesar su peticion`,
                        'error'
                    )
                }
            })
        }
    };

    const borrarColor = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas eliminar este color del listado?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                // aqui tengo que hacer la peticion DELETE 
                console.log(nombreColor)
                console.log(id)
                consultaBorrarColor(id).then((respuesta) => {
                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `El color fue eliminado`,
                            'success'
                        )
                        //actualizar el sate listadoColores del componente administrador
                        traerColores()
                    } else {
                        Swal.fire("Se produjo un error", "Error, intentelo mas tarde ", "error")
                    }
                })
            }
        })
    }
    const editarColor = (e) => {
        e.preventDefault()
        console.log(nombreColor)
        console.log(id)
             consultaEditarColor({nombreColor}, id).then((respuesta) => {
                 if (respuesta.status === 200) {
                     Swal.fire(
                         'Color editado!',
                         `El color fue editado con éxito`,
                         'success'
                     )
                     traerColores()
                     setColor("");
                     setId("")
                     setEditar(false)
                 } else {
                     Swal.fire("Se produjo un error", "Error, intentelo mas tarde ", "error")
                 }
     
               })  
    }
    const mostrarBotonEditarOEnviar = () => {
        if (editar === false) {
            return <Button variant="primary" type="submit" className='mx-2'>
                       Crear
                   </Button>

        } else {
            return <div className='d-flex'>
                      <Button onClick={editarColor} variant="primary" type="submit" className='mx-2'>
                          Editar
                      </Button>
                      <Button onClick={()=>{setEditar(false), setColor(""), setId("")}} variant="danger" type="button" className='mx-2'>
                          Cancelar
                      </Button>
                  </div>
        }
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
                            onChange={(e) => setColor(e.target.value)}
                            value={nombreColor} />
                    </Form.Group>
                </section>
                <section className='border p-3 d-flex flex-row-reverse'>
                    {
                        mostrarBotonEditarOEnviar()
                    }
                </section>
            </Form>
            <section>
                <ListadoTarjetas setId={setId} borrarColor={borrarColor} listadoColores={listadoColores} setColor={setColor} setEditar={setEditar} editarColor={editarColor}></ListadoTarjetas>
            </section>
        </article>
    );
};

export default Administrador;