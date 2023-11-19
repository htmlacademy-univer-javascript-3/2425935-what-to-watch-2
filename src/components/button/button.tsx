import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  withChildren?: boolean;
  label?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FunctionComponent<Props> = ({
  withChildren = false,
  label,
  children,
  className,
  type = 'button',
  onClick,
}) => (
  <button className={className} onClick={onClick} type={type}>
    {withChildren ? children : label}
  </button>
);
