import react from 'react';
import '../styles/App.scss';
import Cell from '../components/cell';
import { addMove, setWinner, switchPlayers } from '../components/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Menu from '../components/menu';
import { checkWin } from '../components/Game';

function App() {

  const dispatch = useDispatch();
  const board = useSelector(state => state.board);

  react.useEffect(() => {
    let winner = checkWin(board);
    
    if(winner) {
      dispatch(setWinner(winner));
      
    } else {
      dispatch(switchPlayers())
    }
  }, [board]);

  const handleClick = (event, cellId) => {
    dispatch(addMove(cellId))
  }

  return (
    <main className='main'>
      <div className='main-board'>
        {
          Object.keys(board).map((id) => 
          <Cell key={id} value={board[id]} onClick={(e) => handleClick(e, id)} />
          )
        }
      </div>
      <Menu />
    </main>
  );
}

export default App;
