import "./button.scss";

const Button = (props) => {
  const { onClick, text, type, color, disabled } = props;

  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={`button ${color && `button-${color}`}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;