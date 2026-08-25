import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import { useState } from "react";
import './App.css';

function App() {

  const [busqueda, setBusqueda] = useState("");

  const disponibles = productos.filter(producto => producto.stock > 0);

  const hayAgotados = productos.some(producto => producto.stock === 0);

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const productosFiltrados = productos.filter(
    producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Productos agotados: {hayAgotados ? 'Sí' : 'No'}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <input type="text" placeholder="Buscar producto..." value={busqueda} onChange={(evento) => {
        setBusqueda(evento.target.value);
      }} />
      <section className="productos">
        {productosFiltrados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
        {productosFiltrados.length === 0
          ? <p>No se encontraron productos.</p>
          : null
        }
      </section>

      <section className="productos">
        <h2>Productos disponibles</h2>
        {disponibles.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>

    </main>
  );
}

export default App;