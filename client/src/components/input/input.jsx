import "./input.scss";

const Input = (props) => {
  const { label, type, name, value, onChange, placeholder, error } = props;

  return (
    <div className="input-container">
      {label && <label for={name}>{label}</label>}
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "input-error" : ""}
      />
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};

export default Input;