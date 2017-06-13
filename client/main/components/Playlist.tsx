import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'
import * as Model from '../../reactplaylist/model';

import {
  SideMenu,
  SongsList,
  EditModal,
  addSong,
  deleteSong,
  editSong
} from '../../reactplaylist'

interface IPlaylistProps {
	songs: Model.Song[];
	addSong(song: Model.Song): void;
	deleteSong(id: string): void;
	editSong(item: Model.Song): void;
	processStatus: string;
}

interface IPlaylistState {
	isEditModalOpened: boolean;
	selectedItem?: Model.Song;
}

class Playlist extends React.Component<IPlaylistProps, IPlaylistState> {

	/**
	 * Создает плейлист
	 * @param {object} props - Проперти компонента
	*/
	constructor(props) {
		super(props);

		this.state = {
			isEditModalOpened: false,
			selectedItem: {
				id: '',
				groupName : '',
				songTitle : '',
				durationMinutes : '',
				durationSeconds : ''
			}
		}
	}

	/**
	 * Обрабатывает событие добавления новой песни
	 * @param {Model.Song} song - объект новой песни
	*/
	handleAddingNewSong = (song: Model.Song) => {
		this.props.addSong(song);
	}

	/**
	 * Обрабатывает событие удаления песни
	 * @param {string} id - идентификатор песни в store
	*/
	handleDeleteItemsFromList = (id) => {
		this.props.deleteSong(id);
	}

	/**
	 * Обрабатывает событие редактирования айтема в списке
	 * @param {Model.Song} item - редактируемый объект песни
	*/
	handleEditItem = (item) => {
		this.setState({
			isEditModalOpened: true,
			selectedItem: item
		})
	}

	handleCloseModal = () => {
		this.setState({isEditModalOpened: false});
	}

	handleSaveModal = (item:Model.Song) => {
		this.props.editSong(item);
	}
 
	/**
	 * Рендерит текущий компонент
	*/
	render() {
		const { songs } = this.props;
		return (
			<div className="search-block-wrapper">
				<SongsList
					songs={songs}
					handleDeleteItemsFromList={this.handleDeleteItemsFromList}
					handleEditItem={this.handleEditItem}
				/>
				<SideMenu handleAddingNewItem={this.handleAddingNewSong}/>
				<EditModal
					isOpened={this.state.isEditModalOpened}
					onCloseModal={this.handleCloseModal}
					onSaveModal={this.handleSaveModal}
					item={this.state.selectedItem}
				/>
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
	},
	editSong: (item: Model.Song) => {
		dispatch(editSong(item));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist); //it connects an application to store