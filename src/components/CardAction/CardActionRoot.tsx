import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface CardActionRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardActionRoot = ({ children, ...props }: CardActionRootProps) => (
  <div className={
    twMerge(
      `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-4 w-[550px] rounded-2xl flex flex-col`, 
      props.className
    )
  }>
    { children }
  </div>
)
