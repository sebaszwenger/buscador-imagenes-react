import Formulario from "./components/Formulario";
import ListadoFotos from "./components/ListadoImagenes";
import { useState, useEffect } from "react";

function App() {
  //State de la app
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    if (busqueda) {
      const consultarAPI = async () => {
        const apiKey = "234385-177973b90356ea885b6d5323b";
        const imagenesPorPagina = 30;
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imagenesPorPagina}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const totalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);

        setTotalPaginas(totalPaginas);
        setImagenes(resultado.hits);
      };
      consultarAPI();
    }
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario setBusqueda={setBusqueda} />
      </div>

      <div className="row justify-content-center">
        <ListadoFotos imagenes={imagenes} />
      </div>
    </div>
  );
}

export default App;
