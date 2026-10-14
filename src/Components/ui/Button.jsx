import React from 'react'


function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick}
     className="w-fit self-center rounded-lg bg-sky-500 px-4 py-3 font-semibold text-white shadow-sm transition duration-300 hover:bg-sky-700 hover:shadow-md active:scale-95">
      {children}
    </button>
  );
}

export default Button;
