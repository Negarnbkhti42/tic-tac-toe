import react from 'react';
import '../styles/App.scss';
import Cell from '../components/cell';
import { addMove, setWinner, switchPlayers } from '../components/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const board = useSelector(state => state.board);

  react.useEffect(() => {
    dispatch(setWinner(board));
  }, [board]);

  react.useEffect(() => {
    console.log(board);
  });

  const handleClick = (event, cellId) => {
    dispatch(addMove(cellId))
    dispatch(switchPlayers())
  }

  return (
    <main className='main'>
      <div className='main-board'>
        {
          Object.keys(board).map((id) => 
          <Cell key={id} value={board[id]} onclick={(e) => handleClick(e, id)} />
          )
        }
      </div>
    </main>
  );
}

export default App;
