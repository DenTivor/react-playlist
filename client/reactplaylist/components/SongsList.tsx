import * as React from 'react';

import Song from './Song';
import * as Model from '../model';


interface SongsListProps {
	songs?: Model.Song[];
	onDeleteItemsFromList?:(id: number) => void;
}

interface SongsListState {
}

class SongsList extends React.Component<SongsListProps, SongsListState> {
	constructor(props, context) {
		super(props, context); 
	}

	onDeleteSong(id) {
		this.props.onDeleteItemsFromList(id);
	}

	render() {
		const { songs } = this.props;

		let SongsViewItems = songs.map((song, index) => {
			return (
				<Song item={song} key={index} onCloseIconClick={this.onDeleteSong.bind(this)}/>
			)
		});

	    return(
			<div className="playlist-wrapper">
			  <div className="playlist-inner">
			    <div className="playlist">
			      <div className="header">My playlist</div>
			      <div className="items-list">
			      	{SongsViewItems}
			      </div>
			    </div>
			  </div>
			</div>
	    );
  	}
}


export default SongsList; 