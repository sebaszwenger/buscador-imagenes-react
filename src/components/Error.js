import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <>
      <p className="my-3 p-3 text-center alert-primary alert">{message}</p>
    </>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Error;
