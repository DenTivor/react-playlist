import * as React from 'react'
import * as Model from '../model';

interface ISongProps {
	item?: Model.Song;
	handleCloseIconClick?:(id: string) => void;
	handleEditIconClick?:(item: Model.Song) => void;
}

class Song extends React.Component<ISongProps, void> {
	constructor(props, context) {
		super(props); 

		this.handleCloseIconClick = this.handleCloseIconClick.bind(this);
		this.handleEditIconClick = this.handleEditIconClick.bind(this);
	}

	handleCloseIconClick(e) {
		this.props.handleCloseIconClick(this.props.item.id);
	}

	handleEditIconClick(e) {
		this.props.handleEditIconClick(this.props.item);
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
		            <div className="actions pull-right">
					  <div className="item-edit-icon action-icon pull-left"  onClick={this.handleEditIconClick}></div>
					  <div className="item-close-icon action-icon pull-left" onClick={this.handleCloseIconClick}></div>
					</div>
		          </div>
		        </div>
	        </div>
	    );
  	}
}


export default Song; 