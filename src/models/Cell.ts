import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
import blackCellFocused from '../assets/black-cell-focused.png';
import whiteCellocused from '../assets/white-cell-focused.png';
import blackCell from '../assets/black-cell.png';
import whiteCell from '../assets/white-cell.png';


export class Cell {
    readonly row: number;
    readonly column: number;
    readonly color: Colors;
    figure: Figure | null;
    icon: typeof whiteCell | null;
    iconFocused: typeof whiteCell| null;
    board: Board;
    isAvailable: boolean;
    id: number;

    constructor(board: Board, row: number, column: number, color: Colors, figure: Figure|null) {
        this.board = board;
        this.row = row;
        this.column = column;
        this.color = color;
        this.figure = figure;
        this.isAvailable = false;
        this.id = Math.random();
        this.icon = color === Colors.WHITE 
            ? whiteCell 
            : blackCell;
        this.iconFocused = color === Colors.WHITE
            ? whiteCellocused
            : blackCellFocused;
    }

    isEmpty(): boolean {
        return this.figure === null;
    }

    isEnemy(target: Cell): boolean {
        if (target.figure) {
            return this.figure?.color !== target.figure?.color;
        }
        return false;
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.row !== target.row) {
            return false;
        }

        const min = Math.min(this.column, target.column);
        const max = Math.max(this.column, target.column);

        for (let column = min + 1; column < max; column++) {
            if (!this.board.getCell(column, this.row).isEmpty()) {
                return false;
            }
        }
        return true;
    } 
    
    isEmptyDiagonal(target: Cell): boolean {
        const absColumn = Math.abs(target.column - this.column);
        const absRow = Math.abs(target.row - this.row);

        if (absColumn !== absRow){
            return false;
        }

        const difRow = this.row < target.row ? 1 : -1;
        const difColumn = this.column < target.column ? 1 : -1;

        for (let i = 1; i< absRow; i++){
            if (!this.board.getCell(this.column + difColumn * i, this.row + difRow * i).isEmpty()){
                return false;
            }
        }
        return true;
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.column !== target.column) {
            return false;
        }

        const min = Math.min(this.row, target.row);
        const max = Math.max(this.row, target.row);

        for (let row = min + 1; row < max; row++) {
            if (!this.board.getCell(this.column, row).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    setFigure(figure: Figure){
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigureTo(target: Cell) {
        if (this.figure?.canMoveTo(target)) {
            this.figure.moveTo(target);
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}