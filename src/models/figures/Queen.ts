import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackQueenIcon from '../../assets/black-queen.png';
import whiteQueenIcon from '../../assets/white-queen.png';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.WHITE 
      ? whiteQueenIcon 
      : blackQueenIcon;
    this.name = FigureNames.QUEEN;
  }

  canMoveTo(target: Cell): boolean {
    if (!super.canMoveTo(target)){
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
