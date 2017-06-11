import * as React from 'react';

import Song from './Song';
import * as Model from '../model';


interface ISongsListProps {
	songs?: Model.Song[];
	handleDeleteItemsFromList?:(id: number) => void;
}

class SongsList extends React.Component<ISongsListProps, void> {
	constructor(props, context) {
		super(props); 
	}

	handleDeleteSong(id) {
		this.props.handleDeleteItemsFromList(id);
	}

	render() {
		const { songs } = this.props;

		let SongsViewItems = songs.map((song, index) => {
			return (
				<Song item={song} key={index} handleCloseIconClick={this.handleDeleteSong.bind(this)}/>
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