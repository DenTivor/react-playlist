import { assign, filter, map } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Song, IState} from './model';
import {
  ADD_SONG,
  DELETE_SONG,
  EDIT_SONG,
  RECEIVE_INITIAL_SONGS
} from './constants/ActionTypes';

const initialState: IState = {
  songs: [],
  processStatus: 'initial'
};

export default function actions(state = initialState, action: any):IState {
  let type = action.type;
  let localState = {};

  switch (type) {
    case ADD_SONG:
      localState = {
        ...state,
        songs: [...state.songs, action.payload.song]
      }
    break;
    case DELETE_SONG:
      localState = {
        ...state,
        songs: [...state.songs.filter(song => song.id != action.payload.id)]
      }
    break;
    case EDIT_SONG:
      localState = {
        ...state,
        songs: [...state.songs.map(song => {
          if (song.id == action.payload.item.id) {
            song = action.payload.item;
          }

          return song;
        })]
      }
    break;
    case RECEIVE_INITIAL_SONGS:
      localState = {
        ...state,
        songs: action.payload.songs
      }
    break;
    default:
      localState = {...state}
    break;
}


  return localState;
}