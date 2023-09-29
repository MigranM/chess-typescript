import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackPawnIcon from '../../assets/black-pawn.png';
import whitePawnIcon from '../../assets/white-pawn.png';

export class Pawn extends Figure {

  isFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.WHITE 
      ? whitePawnIcon 
      : blackPawnIcon;
    this.name = FigureNames.PAWN;
  }

  canMoveTo(target: Cell): boolean {
    if (!super.canMoveTo(target)){
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

if ((target.row === this.cell.row + direction || this.isFirstStep
    && (target.row == this.cell.row + firstStepDirection))
  && target.column === this.cell.column
  && this.cell.board.getCell(target.column, target.row).isEmpty()) {
    return true;
  }

  if (target.row === this.cell.row + direction 
    && (target.column === this.cell.column + 1 || target.column === this.cell.column - 1)
    && this.cell.isEnemy(target)) {
      return true;
    }

  return false;
  }

  moveTo(target: Cell) {
    super.moveTo(target);
    this.isFirstStep = false;
  }
}
