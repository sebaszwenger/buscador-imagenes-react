import Form from "./components/Form";
import Listimages from "./components/Listimages";
import { useState, useEffect } from "react";

function App() {
  //States
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  //Refresh the call to the API on change of search & pagina Actual
  useEffect(() => {
    //avoid first call with empty search term
    if (search) {
      const queryAPI = async () => {
        const apiKey = "234385-177973b90356ea885b6d5323b";
        const imagesPerPage = 20;
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${imagesPerPage}&page=${currentPage}`;

        const answer = await fetch(url);
        const result = await answer.json();

        const totalPages = Math.ceil(result.totalHits / imagesPerPage);

        setPages(totalPages);
        setImages(result.hits);

        //Move the screen to top smoothly
        const jumbotron = document.querySelector(".jumbotron");
        jumbotron.scrollIntoView({ behavior: "smooth" });
      };
      queryAPI();
    }
  }, [search, currentPage]);

  //define the previous page
  const previousPage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage === 0) return;
    setCurrentPage(newCurrentPage);
  };
  //define the next page
  const nextPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage > pages) return;
    setCurrentPage(newCurrentPage);
  };

  //Conditional loading of paging buttons
  const previusButton =
    currentPage === 1 ? null : (
      <button
        type="button"
        className="bbtn btn-info mr-1 mb-2"
        onClick={previousPage}
      >
        &laquo; Anterior
      </button>
    );
  const nextButton =
    currentPage === pages ? null : (
      <button type="button" className="bbtn btn-info mb-2" onClick={nextPage}>
        Siguiente &raquo;
      </button>
    );

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Form setSearch={setSearch} />
      </div>

      <div className="row justify-content-center">
        <Listimages images={images} />

        {previusButton}

        {nextButton}
      </div>
    </div>
  );
}

export default App;
