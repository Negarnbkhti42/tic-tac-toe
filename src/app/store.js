import {createStore} from 'redux';
import reducer from '../components/reducer';

export const store = createStore(reducer);