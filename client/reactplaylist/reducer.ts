import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Song, IState} from './model';

const initialState: IState = {
  songs: [],
  processStatus: ''
};

export default function actions(state = initialState, action: any):IState {
  let type = action.type;
  
  return state;
}