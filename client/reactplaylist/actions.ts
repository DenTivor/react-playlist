import { Promise } from 'es6-promise';
import { createAction, Action } from 'redux-actions'

import { 
  ADD_SONG
} from './constants/ActionTypes'

import * as Model from './model';

const addSong = createAction<Model.Song, Model.Song>(
  ADD_SONG,
  (song: Model.Song) => song
);

export {
  addSong
}
