import * as React from 'react';

import Song from './Song';
import * as Model from '../model';


interface ISongsListProps {
	songs?: Model.Song[];
	handleDeleteItemsFromList?:(id: number) => void;
	handleEditItem?:(item: Model.Song) => void;
}

class SongsList extends React.Component<ISongsListProps, void> {
	constructor(props) {
		super(props); 
	}

	handleDeleteSong = (id) => {
		this.props.handleDeleteItemsFromList(id);
	}

	handleEditSong = (item) => {
		this.props.handleEditItem(item);
	}

	render() {
		const { songs } = this.props;

		let SongsViewItems = songs.map((song, index) => {
			return (
				<Song
					item={song}
					key={index}
					handleEditIconClick={this.handleEditSong}
					handleCloseIconClick={this.handleDeleteSong}
				/>
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