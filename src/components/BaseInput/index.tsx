

import { InputHTMLAttributes, useState } from 'react'
import { ReveillerPassword } from '../ReveillerPassword'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

export const BaseInput = ({ placeholder, type = 'text', ...props }: BaseInputProps) => {
  const [inputType, setInputType] = useState(type)

  const togglePasswordVisibility = () => {
    setInputType((prevState) => (prevState === 'password' 
      ? 'text' 
      : 'password'
    ))
  }

  const showToggleIcon = type === 'password'

  return (
    <div className="border-2 border-primary h-10 rounded-lg px-2 flex items-center">
      <input 
        { ...props }
        type={inputType}
        placeholder={placeholder}
        className='h-full w-full bg-transparent outline-none'
      />
      {showToggleIcon && (
        <button
          onClick={togglePasswordVisibility}
          className="right-2 top-2 text-gray-600"
          aria-label="Toggle password visibility"
        >
          <ReveillerPassword isVisible={inputType === 'password'} />
        </button>
      )}
    </div>
  )
}
