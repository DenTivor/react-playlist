import * as React from 'react';

import Song from './Song';
import * as Model from '../model';


interface SongsListProps {
	songs?: Model.Song[];
}

interface SongsListState {
}

class SongsList extends React.Component<SongsListProps, SongsListState> {
	constructor(props, context) {
		super(props, context); 
	}

	render() {
		const { songs } = this.props;

		let SongsViewItems = songs.map(function(song, index) {
			return (
				<Song item={song} key={index}/>
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