import PropTypes from "prop-types";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
