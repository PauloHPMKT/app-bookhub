import { ElementType } from "react";
import { IconBaseProps } from "react-icons";

interface CardItemIconProps extends IconBaseProps {
  icon: ElementType;
  className?: string;
}

export const CardActionIcon = ({ icon: Icon, className, ...rest }: CardItemIconProps) => (
  <Icon
    { ...rest } 
    className={className} 
  />
);
