import React from 'react';

export interface ButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  submit?: boolean;
}
