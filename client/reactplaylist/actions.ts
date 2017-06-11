import { Promise } from 'es6-promise';
import { createAction, Action } from 'redux-actions'

import { 
  ADD_SONG,
  DELETE_SONG
} from './constants/ActionTypes'

import * as Model from './model';

// Implemented with Actions
// const addSong = createAction<Model.AddSong, Model.Song>(
//   ADD_SONG,
//   (song: Model.Song) => ({song: song})
// );

// const deleteSong = createAction<Model.DeleteSong, string>(
//   DELETE_SONG,
//   (id: string) => ({id: id})
// );

const addSong = (song: Model.Song) => {
	return {
		type: ADD_SONG,
		payload: {song: song}
	}
}

const deleteSong = (id: string) => {
	return {
		type: DELETE_SONG,
		payload: {id: id}
	}
}

export {
  addSong,
  deleteSong
}
