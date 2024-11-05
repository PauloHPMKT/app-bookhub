import { ReactNode } from "react"

interface OverlayProps {
  children: ReactNode
}

export const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
      { children }
    </div>
  )
}