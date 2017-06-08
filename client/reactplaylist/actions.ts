import { Promise } from 'es6-promise';
import { createAction, Action } from 'redux-actions'

import { 
  ADD_SONG,
  DELETE_SONG
} from './constants/ActionTypes'

import * as Model from './model';

const addSong = createAction<Model.AddSong, Model.Song>(
  ADD_SONG,
  (song: Model.Song) => ({song: song})
);

const deleteSong = createAction<Model.DeleteSong, number>(
  DELETE_SONG,
  (id: number) => ({id: id})
);

export {
  addSong,
  deleteSong
}
