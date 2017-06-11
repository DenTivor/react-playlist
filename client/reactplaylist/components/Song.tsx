import * as React from 'react'
import * as Model from '../model';

interface ISongProps {
	item?: Model.Song;
	handleCloseIconClick?:(id: string) => void;
}

class Song extends React.Component<ISongProps, void> {
	constructor(props, context) {
		super(props); 
	}

	handleCloseIconClick(e) {
		this.props.handleCloseIconClick(this.props.item.id);
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