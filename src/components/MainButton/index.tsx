import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, ReactNode } from "react"

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const MainButton = ({ children, ...rest }: MainButtonProps) => (
  <button 
    { ...rest }
    className={twMerge("bg-[#121212] text-white min-w-28 h-10 rounded-lg", rest.className)}
  >
    { children }
  </button>
)
