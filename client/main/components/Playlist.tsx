import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'

interface PlaylistProps {
}

interface PlaylistState {
}

class Playlist extends React.Component<PlaylistProps, PlaylistState> {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="search-block-wrapper">
			</div>
		)
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist); //it connects an application to store