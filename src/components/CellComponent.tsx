import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProp {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProp> = ({ cell, selected, click }) => {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => click(cell)}
    >
      {selected && cell.iconFocused && (
        <div
          className="background"
        />
      )}
      {cell.figure?.icon && (
        <img className="figure" src={cell.figure.icon} alt="" />
      )}
      {!cell.figure && cell.isAvailable && <div className={"available-to-move"}/>}
      {cell.figure && cell.isAvailable && <div className={"available-to-capture"}/>}
    </div>
  );
};

export default CellComponent;
