import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'
import * as Model from '../../reactplaylist/model';

import {
  SideMenu,
  SongsList,
  addSong,
} from '../../reactplaylist'

interface PlaylistProps {
	songs: Model.Song[];
	addSong(song: Model.Song): void;
	processStatus: string;

}

interface PlaylistState {
}

class Playlist extends React.Component<PlaylistProps, PlaylistState> {
	constructor(props, context) {
		super(props, context);
	}

	onAddingNewSong(song: Model.Song) {
		console.log("New song for adding", song);
		this.props.addSong(song);
	}

	onDeleteItemsFromList(id) {
		console.log('root', id)
	}

	render() {
		const { songs } = this.props;
		return (
			<div className="search-block-wrapper">
				<SongsList songs={songs} onDeleteItemsFromList={this.onDeleteItemsFromList.bind(this)}/>
				<SideMenu onAddingNewItem={this.onAddingNewSong.bind(this)}/>
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
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist); //it connects an application to store