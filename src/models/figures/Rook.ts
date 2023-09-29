import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackRookIcon from '../../assets/black-rook.png';
import whiteRookIcon from '../../assets/white-rook.png';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.WHITE 
      ? whiteRookIcon 
      : blackRookIcon;
    this.name = FigureNames.ROOK;
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
    return false;
  }
}
