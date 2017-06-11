import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'
import * as Model from '../../reactplaylist/model';

import {
  SideMenu,
  SongsList,
  addSong,
  deleteSong
} from '../../reactplaylist'

interface IPlaylistProps {
	songs: Model.Song[];
	addSong(song: Model.Song): void;
	deleteSong(id: string): void;
	processStatus: string;
}

class Playlist extends React.Component<IPlaylistProps, void> {

	/**
	 * Создает плейлист
	 * @param {object} props - Проперти компонента
	*/
	constructor(props, context) {
		super(props);
		this.handleDeleteItemsFromList = this.handleDeleteItemsFromList.bind(this);
		this.handleAddingNewSong = this.handleAddingNewSong.bind(this);
	}

	/**
	 * Обрабатывает событие добавления новой песни
	 * @param {Song} song - объект новой песни
	*/
	handleAddingNewSong(song: Model.Song) {
		this.props.addSong(song);
	}

	/**
	 * Обрабатывает событие удаления песни
	 * @param {string} id - идентификатор песни в store
	*/
	handleDeleteItemsFromList(id) {
		this.props.deleteSong(id);
	}

	/**
	 * Рендерит текущий компонент
	*/
	render() {
		const { songs } = this.props;
		return (
			<div className="search-block-wrapper">
				<SongsList songs={songs} handleDeleteItemsFromList={this.handleDeleteItemsFromList}/>
				<SideMenu handleAddingNewItem={this.handleAddingNewSong}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	songs: state.data.songs,
	processStatus: state.data.processStatus
});

const mapDispatchToProps = dispatch => ({
	addSong: (song: Model.Song) => {
		dispatch(addSong(song));
	},
	deleteSong: (id: string) => {
		dispatch(deleteSong(id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist); //it connects an application to store