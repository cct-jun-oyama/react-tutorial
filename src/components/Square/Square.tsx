import React from 'react';
import { Props } from './types'

const Square = (props: Props) => {
  return (
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  );
}

export default Square;
