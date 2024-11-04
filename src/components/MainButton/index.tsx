import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, ReactNode } from "react"

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const MainButton = ({ children, ...rest }: MainButtonProps) => (
  <button 
    { ...rest }
    className={twMerge("bg-[#121212] text-white text-center w-auto h-10 rounded-lg p-8", rest.className)}
  >
    { children }
  </button>
)
