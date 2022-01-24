import react from 'react';
import './styles/App.scss';

function App() {

  const player = react.useRef('x')

  return (
    <div className='board'>
      <div className='cell'></div>
      <div className='cell'></div>
      <div className='cell'></div>
      <div className='cell'></div>
      <div className='cell'></div>
      <div className='cell'></div>
      <div className='cell'></div>
      <div className='cell'></div>
      <div className='cell'></div>
    </div>
  );
}

export default App;
