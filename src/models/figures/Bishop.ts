import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackBishopIcon from '../../assets/black-bishop.png';
import whiteBishopIcon from '../../assets/white-bishop.png';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.WHITE 
      ? whiteBishopIcon 
      : blackBishopIcon;
    this.name = FigureNames.BISHOP;
  }

  canMoveTo(target: Cell): boolean {
    if (!super.canMoveTo(target)){
      return false;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
