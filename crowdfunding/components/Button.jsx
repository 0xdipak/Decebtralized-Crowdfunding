import React from 'react'

const Button = ({ btnType, title, handleClick}) => {
  return (
    <button
        type={btnType}
        className={`shadow-lg shadow-black bg-[#e32970] hover:bg-[#bd255f] text-white font-bold py-2 px-4 rounded-full`}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default Button