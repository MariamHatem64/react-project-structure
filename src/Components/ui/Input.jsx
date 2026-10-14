
function Input({ type = "text", placeholder, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
