import { Promise } from 'es6-promise';
import { createAction, Action } from 'redux-actions'

import { 
  ADD_SONG,
  DELETE_SONG,
  EDIT_SONG,
  GET_INITIAL_SONGS,
  RECEIVE_INITIAL_SONGS
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

const initialSongs = [
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
];

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

const editSong = (item: Model.Song) => {
	return {
		type: EDIT_SONG,
		payload: {item: item}
	}	
}

const receiveInitialSongs = (songs: Model.Song[]) => {
	return {
		type: RECEIVE_INITIAL_SONGS,
		payload: {songs: songs}

	}
}

function fetchInitialSongs() {
	const promise: Promise<Model.Song[]> = new Promise(
		(resolve: (icons: Model.Song[]) => void, reject: (str: string) => void) => {
		resolve(initialSongs);
		}
	);

	return promise;
}

const getInitialSongs = () => dispatch => {
	fetchInitialSongs()
		.then((icons: Model.Song[]) => {
		setTimeout(() => {
			dispatch(receiveInitialSongs(icons));
		}, 2000)
		});
}

export {
  addSong,
  deleteSong,
  editSong,
  getInitialSongs
}
