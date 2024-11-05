import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface CardActionTitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardActionTitle = ({ children, ...props }: CardActionTitleProps) => (
  <div className={twMerge(`text-lg font-semibold text-gray-800`, props.className)}>
    { children }
  </div>
)
