import { Button, Form } from "react-bootstrap"

const Administrador = () => {
    return (
        <article className='m-5 border shadow '>
            <Form>
                <header className='border p-3'>
                   <h1>Administrar Colores</h1> 
                </header>
                <section className='border p-3 d-flex align-items-center  bgCelesteClaro'>
                    <div className='border p-3 bg-danger ms-4'>
                        <div className='contenedorColor'></div>
                    </div>
                    <Form.Group className='mx-4 w-100' >
                        <Form.Control type="text" placeholder="Ingrese un color" />
                    </Form.Group>
                </section>
                <section className='border p-3 d-flex flex-row-reverse'>
                    <Button variant="primary" position="top-end" type="submit">
                        Guardar
                    </Button>
                </section>
            </Form>
        </article>
    );
};

export default Administrador;