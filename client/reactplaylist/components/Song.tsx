import * as React from 'react'
import * as Model from '../model';

interface SongProps {
	item?: Model.Song;
}

interface SongState {
}

class Song extends React.Component<SongProps, SongState> {
	constructor(props, context) {
		super(props, context); 
	}

	handleCloseIconClick(e) {
		console.log("songCloseIconClick", this.props);
	}

	render() {
		const { groupName, songTitle, durationMinutes, durationSeconds} = this.props.item;
	    return(
    		<div>
		        <div className="item">
		          <div className="item-inner clearfix">
		            <div className="item-group-name pull-left">{groupName}</div>
		            <div className="item-title pull-left">{songTitle}</div>
		            <div className="item-duration pull-left">{durationMinutes}:{durationSeconds}</div>
		            <div className="item-close-icon" onClick={this.handleCloseIconClick.bind(this)}> </div>
		          </div>
		        </div>
	        </div>
	    );
  	}
}


export default Song; 