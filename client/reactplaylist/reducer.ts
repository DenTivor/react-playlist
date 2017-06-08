import { assign, filter } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Song, IState} from './model';
import {
  ADD_SONG,
  DELETE_SONG
} from './constants/ActionTypes';

const initialState: IState = {
  songs: [
  	{
      id: '1',
  		groupName: 'Слот',
  		songTitle: 'Над пропастью во лжи',
  		durationMinutes: '5',
  		durationSeconds: '5'
  	},
  	{
      id: '2',
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
  	return {
  		...state,
  		songs: [...state.songs, action.payload.song]
	  };
  } else if (type === DELETE_SONG){
    return {
      ...state,
      songs: state.songs.filter(song => song.id != action.payload.id)
    };
  }

  return state;
}