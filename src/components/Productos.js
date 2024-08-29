import React, { useState } from 'react';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleRegistrar = () => {
    const nuevoProducto = { nombre, descripcion, precio, cantidad };
    setProductos([...productos, nuevoProducto]);
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setCantidad('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header text-center">
              ABM de Productos
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input 
                  type="number" 
                  className="form-control" 
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Cantidad</label>
                <input 
                  type="number" 
                  className="form-control" 
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                />
              </div>
              <button className="btn btn-primary mt-3" onClick={handleRegistrar}>
                Registrar
              </button>
            </div>
          </div>
          
          {productos.length > 0 && (
            <div className="mt-4">
              <h5 className="text-center">Listado de Productos</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion}</td>
                      <td>${producto.precio}</td>
                      <td>{producto.cantidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productos;
