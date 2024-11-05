import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardActions = ({ children, ...props }: CardActionsProps) => (
  <div className={twMerge(`flex justify-center gap-2 w-full`, props.className)}>
    { children }
  </div>
);
