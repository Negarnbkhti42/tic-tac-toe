import react from 'react';
import '../styles/App.scss';
import Cell from '../components/cell';
import { addMove, setWinner, switchPlayers } from '../components/reducer';

function App(props) {

  const {state, dispatch} = props;

  react.useEffect(() => {
    dispatch(setWinner(state.board));
  }, [state.board]);

  react.useEffect(() => {
    console.log(state);
  });

  const handleClick = (event, cellId) => {
    dispatch(addMove(cellId))
    dispatch(switchPlayers())
  }

  return (
    <main className='main'>
      <div className='main-board'>
        {
          Object.keys(state.board).map((id) => 
          <Cell key={id} value={state.board[id]} onclick={(e) => handleClick(e, id)} />
          )
        }
      </div>
    </main>
  );
}

export default App;
