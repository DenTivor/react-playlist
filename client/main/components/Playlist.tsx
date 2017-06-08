import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'
import * as Model from '../../reactplaylist/model';

import {
  SideMenu,
  SongsList,
} from '../../reactplaylist'

interface PlaylistProps {
	songs: Model.Song[];
	processStatus: string;
}

interface PlaylistState {
}

class Playlist extends React.Component<PlaylistProps, PlaylistState> {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { songs } = this.props;
		return (
			<div className="search-block-wrapper">
				<SongsList songs={songs}/>
				<SideMenu />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	songs: state.data.songs,
	processStatus: state.data.processStatus
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist); //it connects an application to store