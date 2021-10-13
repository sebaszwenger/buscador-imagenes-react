import Image from "./Image";
import PropTypes from "prop-types";

const Listimages = ({ images }) => {
  return (
    <div className="col-12 p-5 row">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

Listimages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Listimages;
