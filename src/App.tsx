import React, {useState, useEffect} from 'react';
import "./App.css";
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

const App = () => {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart();
  }, [])

  function restart() {
    const board = new Board();
    board.initializeCells();
    board.initializeFigures()
    setBoard(board);
  }

  return (
    <div className="chess-app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
};

export default App;
