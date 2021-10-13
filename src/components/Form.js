import { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ setSearch }) => {
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);

  //validate & save the term for the search
  const seachImages = (e) => {
    e.preventDefault();

    if (term.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch(term);
  };

  return (
    <form onSubmit={seachImages}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: Futbol o café"
            onChange={(e) => setTerm(e.target.value)}
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

      {error ? <Error message="Agrega un Término de Búsqueda" /> : null}
    </form>
  );
};

Form.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Form;
