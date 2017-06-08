import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Song, IState} from './model';

const initialState: IState = {
  songs: [
  	{
  		groupName: 'Слот',
		songTitle: 'Над пропастью во лжи',
		durationMinutes: 5,
		durationSeconds: 5
  	},
  	{
  		groupName: 'Metallica',
		songTitle: 'Turn the page',
		durationMinutes: 5,
		durationSeconds: 5
  	}
  ],
  processStatus: 'initial'
};

export default function actions(state = initialState, action: any):IState {
  let type = action.type;
  console.log(state);
  return state;
}