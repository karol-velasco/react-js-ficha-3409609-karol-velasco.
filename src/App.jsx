import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import { useState } from "react";
import './App.css';

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const productosConDescuento = productos.map(producto => ({
    ...producto, precioConDescuento: producto.precio * 0.90
  }));

  const disponibles = productos.filter(producto => producto.stock > 0);

  const hayAgotados = productos.some(producto => producto.stock === 0);

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const productosFiltrados = productosConDescuento.filter(producto => {

    const coincideNombre = producto.nombre.toLowerCase().includes(
      busqueda.toLowerCase()
    );
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;
    return (coincideNombre && coincideCategoria && coincideStock);
  });

  const productosOrdenados = [...productosFiltrados].sort(
    (a, b) => a.precioConDescuento - b.precioConDescuento
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos encontrados:{productosFiltrados.length}</p>
      <p>Productos agotados: {hayAgotados ? 'Sí' : 'No'}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <input type="text" placeholder="Buscar producto..." value={busqueda} onChange={(evento) => {
        setBusqueda(evento.target.value);
      }} />

      <section className="productos">

        <select value={categoria} onChange={(evento) =>
          setCategoria(evento.target.value)
        }>
          <option value="Todas">
            Todas
          </option>

          <option value="Perifericos">
            Periféricos
          </option>

          <option value="Pantallas">
            Pantallas
          </option>

          <option value="Computadores">
            Computadores
          </option>

          <option value="Móviles">
            Móviles
          </option>

          <option value="Oficina">
            Oficina
          </option>
        </select>

        <label>
          <input type="checkbox" checked={soloDisponibles} onChange={(evento) =>
            setSoloDisponibles(
              evento.target.checked
            )
          } />
          Mostrar únicamente disponibles
        </label>
        {productosOrdenados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}

        {productosOrdenados.length === 0
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