import react from 'react';
import '../styles/App.scss';
import Cell from '../components/cell';
import { addMove, endGame, setWinner, switchPlayers } from '../components/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Menu from '../components/menu';
import { checkWin } from '../components/Game';

function App() {

  const dispatch = useDispatch();
  const board = useSelector(state => state.board);
  const currentPlayer = useSelector(state => state.currentPlayer);
  const state = useSelector(state => state);

  react.useEffect(()=> {
    console.log(state)
  });

  const handleClick = (cellId) => {
    dispatch(addMove(cellId))

    let winner = checkWin({...board, [cellId]: currentPlayer});
    
    if(winner) {
      dispatch(setWinner(winner));
      dispatch(endGame());
      
    } else {
      dispatch(switchPlayers())
    }
  }

  return (
    <main className='main'>
      <div className='main-board'>
        {
          Object.keys(board).map((id) => 
          <Cell key={id} value={board[id]} onClick={() => handleClick(id)} />
          )
        }
      </div>
      <Menu />
    </main>
  );
}

export default App;
