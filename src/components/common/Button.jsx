import React from "react";

const Button = ({ label, onBtnClick, isActive }) => {
  return (
    <button
      onClick={onBtnClick}
      className={`bg-[#1b1b1b] font-semibold border ${
        isActive ? "border-[#ff9505] text-[#ff9505]" : "text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
