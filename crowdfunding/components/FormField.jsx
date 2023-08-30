import React from 'react'

const FormField = ({ labelName, isTextArea , placeholder, inputType, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className='font-medium text-sm leading-6 mb-2.5 text-white'>{labelName}</span>
      )}
      {isTextArea ? (
        <textarea
        required
        value={value}
        onChange={handleChange}
        rows="6"
        placeholder={placeholder}
        className='py-3.5 sm:px-6 px-3.5outline-none border-2 border-white bg-transparent text-sm  rounded-lg sm:min-w-72'
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className='py-3.5 sm:px-6 px-3.5 outline-none border-2 border-white bg-transparent text-sm  rounded-lg sm:min-w-72'
        />
      )}
    </label>
  )
}

export default FormField