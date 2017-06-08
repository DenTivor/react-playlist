import * as React from 'react';

import Song from './Song';


interface SongsListProps {
}

interface SongsListState {
}

class SongsList extends React.Component<SongsListProps, SongsListState> {
	constructor(props, context) {
		super(props, context); 
	}

	render() {
	    return(
			<div className="playlist-wrapper">
			  <div className="playlist-inner">
			    <div className="playlist">
			      <div className="header">My playlist</div>
			      <div className="items-list">
			        <Song />
			        <Song />
			      </div>
			    </div>
			  </div>
			</div>
	    );
  	}
}


export default SongsList; 