import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'
import * as Model from '../../reactplaylist/model';

import {
  SideMenu,
  SongsList,
  EditModal,
  addSong,
  deleteSong
} from '../../reactplaylist'

interface IPlaylistProps {
	songs: Model.Song[];
	addSong(song: Model.Song): void;
	deleteSong(id: string): void;
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
	constructor(props, context) {
		super(props);
		this.handleDeleteItemsFromList = this.handleDeleteItemsFromList.bind(this);
		this.handleEditItem = this.handleEditItem.bind(this);
		this.handleAddingNewSong = this.handleAddingNewSong.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);

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

	handleEditItem(item) {
		console.log(item);

		this.setState({
			isEditModalOpened: true,
			selectedItem: item
		})
	}

	handleCloseModal() {
		this.setState({isEditModalOpened: false});
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
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist); //it connects an application to store