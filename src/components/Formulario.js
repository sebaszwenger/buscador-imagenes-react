import { useState } from "react";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  //save the token for the search
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  //search the term in termino
  const buscarImagenes = (e) => {
    e.preventDefault();

    //validate
    if (termino.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //send the search term to the main component
    setBusqueda(termino);
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: Futbol o café"
            onChange={(e) => setTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>

      {error ? <Error mensaje="Agrega un Término de Búsqueda" /> : null}
    </form>
  );
};

export default Formulario;
