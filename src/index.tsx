import React, { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FC<Props> = ({ text }) => {
  return <button type="button" className="btn btn-primary">{text}</button>;
};
