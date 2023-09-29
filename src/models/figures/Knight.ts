import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackKnightIcon from '../../assets/black-knight.png';
import whiteKnightIcon from '../../assets/white-knight.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.WHITE 
      ? whiteKnightIcon 
      : blackKnightIcon;
    this.name = FigureNames.KNIGHT;
  }

  canMoveTo(target: Cell): boolean {
    if (!super.canMoveTo(target)){
      return false;
    }
    const difColumn = Math.abs(this.cell.column - target.column);
    const difRow = Math.abs(this.cell.row - target.row);

    return (difColumn === 1 && difRow === 2) || (difColumn === 2 && difRow === 1);
  }
}
