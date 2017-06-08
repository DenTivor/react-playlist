import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Song, IState} from './model';
import {
  ADD_SONG
} from './constants/ActionTypes';

const initialState: IState = {
  songs: [
  	{
  		groupName: 'Слот',
		songTitle: 'Над пропастью во лжи',
		durationMinutes: '5',
		durationSeconds: '5'
  	},
  	{
  		groupName: 'Metallica',
		songTitle: 'Turn the page',
		durationMinutes: '5',
		durationSeconds: '5'
  	}
  ],
  processStatus: 'initial'
};

export default function actions(state = initialState, action: any):IState {
  let type = action.type;

  if (type === ADD_SONG) {
  	debugger;
  	let song = {
		groupName: action.payload.groupName,
		songTitle: action.payload.songTitle,
		durationMinutes: action.payload.durationMinutes,
		durationSeconds: action.payload.durationSeconds
  	};

  	return {
  		...state,
  		songs: [...state.songs, song]
	};

  }

  return state;
}