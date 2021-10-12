import Formulario from "./components/Formulario";
import ListadoFotos from "./components/ListadoImagenes";
import { useState, useEffect } from "react";

function App() {
  //State de la app
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    if (busqueda) {
      const consultarAPI = async () => {
        const apiKey = "234385-177973b90356ea885b6d5323b";
        const imagenesPorPagina = 30;
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imagenesPorPagina}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setImagenes(resultado.hits);

        // setResultado(resultado);
        // setConsultar(false);

        //Detecta si hubo resultados correctos con la consulta
        // if (resultado.cod === "404") {
        //   setError(true);
        // } else {
        //   setError(false);
        // }
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
