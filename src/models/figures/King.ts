import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackKingIcon from '../../assets/black-king.png';
import whiteKingIcon from '../../assets/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.WHITE 
      ? whiteKingIcon 
      : blackKingIcon;
    this.name = FigureNames.KING;
  }

  canMoveTo(target: Cell): boolean {
    if (!super.canMoveTo(target)){
      return false;
    }
    
    const difColumn = Math.abs(this.cell.column - target.column);
    const difRow = Math.abs(this.cell.row - target.row);

    return difRow < 2 && difColumn < 2;

  }
}
