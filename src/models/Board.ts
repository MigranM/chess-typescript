import { Cell } from './Cell';
import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';

export class Board {
  cells: Cell[][] = [];

  public initializeCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          row.push(new Cell(this, i, j, Colors.WHITE, null));
        } else {
          row.push(new Cell(this, i, j, Colors.BLACK, null));
        }
      }
      this.cells.push(row);
    }
  }

  public hightLightCells(selectedCells: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < this.cells.length; j++) {
        const target = row[j];
        target.isAvailable = !!selectedCells?.figure?.canMoveTo(target);
      }
    }
  }

  public getCopyBoard() : Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }
  
  public getCell(row: number, column: number) {
    return this.cells[column][row];
  }


  public initializeFigures() {
    this.initializeKings();
    this.initializeQueens();
    this.initializeRooks();
    this.initializeBishops();
    this.initializeKnights();
    this.initializePawns();
  }

  private initializeKings() {
    new King(Colors.BLACK, this.getCell(4,0));
    new King(Colors.WHITE, this.getCell(4,7));
  }
  private initializeQueens() {
    new Queen(Colors.BLACK, this.getCell(3,0));
    new Queen(Colors.WHITE, this.getCell(3,7));
  }
  private initializeRooks() {
    new Rook(Colors.BLACK, this.getCell(0,0));
    new Rook(Colors.WHITE, this.getCell(0,7));
    new Rook(Colors.BLACK, this.getCell(7,0));
    new Rook(Colors.WHITE, this.getCell(7,7));
  }
  private initializeBishops() {
    new Bishop(Colors.BLACK, this.getCell(2,0));
    new Bishop(Colors.WHITE, this.getCell(2,7));
    new Bishop(Colors.BLACK, this.getCell(5,0));
    new Bishop(Colors.WHITE, this.getCell(5,7));
  }
  private initializeKnights() {
    new Knight(Colors.BLACK, this.getCell(1,0));
    new Knight(Colors.WHITE, this.getCell(1,7));
    new Knight(Colors.BLACK, this.getCell(6,0));
    new Knight(Colors.WHITE, this.getCell(6,7));
  }
  private initializePawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }
}
