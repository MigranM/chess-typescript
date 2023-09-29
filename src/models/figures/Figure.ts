import { Colors } from "../Colors";
import icon from '../../assets/black-king.png';
import { Cell } from "../Cell";

export enum FigureNames {
    FIGURE = "Figure",
    KING = "King",
    QUEEN = "Queen",
    ROOK = "Rook",
    KNIGHT = "Knight",
    BISHOP = "Bishop",
    PAWN = "Pawn",
}

export class Figure {
    color: Colors;
    icon: typeof icon | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color:Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.icon = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMoveTo(target: Cell) : boolean {
        if (target.figure?.color === this.color){
            return false;
        }
        if (target.figure?.name === FigureNames.KING){
            return false;
        }
        return true;
    }

    moveTo(target: Cell) {}
}