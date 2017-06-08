import * as React from 'react'

interface SongProps {
}

interface SongState {
}

class Song extends React.Component<SongProps, SongState> {
	constructor(props, context) {
		super(props, context); 
	}

	render() {
	    return(
    		<div>
		        <div className="item">
		          <div className="item-inner clearfix">
		            <div className="item-group-name pull-left">Слот</div>
		            <div className="item-title pull-left">Ангелок</div>
		            <div className="item-duration pull-left">5:15</div>
		            <div className="item-close-icon"> </div>
		          </div>
		        </div>
	        </div>
	    );
  	}
}


export default Song; 