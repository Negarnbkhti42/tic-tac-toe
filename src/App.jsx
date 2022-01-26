import react from 'react';
import './styles/App.scss';
import { Game } from './components/Game';
import Cell from './components/Cell';

function App() {

  const [isX, setIsX] = react.useState(true)

  const switchPlayer = () => {
    setIsX(!isX);
  };

  const handleClick = () => {
    //put value
    switchPlayer();
  };

  return (
    <main className='main'>
      <div className='main-board'>
        {Game.Board.getCells().map((cell) =>
          <Cell key={cell.getId()} value={cell.getValue()} onclick={cell.getValue() ? null : handleClick} />)}
      </div>
    </main>
  );
}

export default App;
