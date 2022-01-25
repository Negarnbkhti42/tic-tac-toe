import react from 'react';
import './styles/App.scss';
import { Game } from './components/Game';
import Cell from './components/Cell';

function App() {

  const [isX, setIsX] = react.useState(true)

  const handleClick = () => {
    //put value
    //switch player
  };

  return (
    <div className='board'>
      {Game.Board.map((cell) => <Cell key={cell.id} value={cell.value} onclick={cell.value ? null : handleClick} />)}
    </div>
  );
}

export default App;
