import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, ReactNode } from "react"

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const MainButton = ({ children, ...rest }: MainButtonProps) => (
  <button 
    { ...rest }
    className={twMerge("bg-[#121212] text-white text-center w-auto rounded-lg px-8", rest.className)}
  >
    { children }
  </button>
)
