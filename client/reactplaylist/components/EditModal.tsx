import * as React from 'react'
import * as Model from '../model';
import * as ReactDOM from 'react-dom';

interface IEditModalProps {
	isOpened: boolean;
	item?: Model.Song;
	onCloseModal?:() => void;
	onSaveModal?:(item:Model.Song) => void;
}

interface IEditModalState {
	item?: Model.Song;
	currentGroupName: string;
	currentSongTitle: string;
	currentDurationMinutes: string;
	currentDurationSeconds: string;
}

class EditModal extends React.Component<IEditModalProps, IEditModalState> {
	constructor(props, context) {
		super(props); 

		this.handleModalCloseBtnClick = this.handleModalCloseBtnClick.bind(this);
		this.handleModalSaveBtnClick = this.handleModalSaveBtnClick.bind(this);

		this.state = {
			item: this.props.item,
			currentGroupName: this.props.item.groupName,
			currentSongTitle: this.props.item.songTitle,
			currentDurationMinutes: this.props.item.durationMinutes,
			currentDurationSeconds: this.props.item.durationSeconds
		}
	}

	handleModalSaveBtnClick() {
		const newItem = {
			id: this.state.item.id,
			groupName: this.state.currentGroupName,
			songTitle: this.state.currentSongTitle,
			durationMinutes: this.state.currentDurationMinutes,
			durationSeconds: this.state.currentDurationSeconds
		}

		// TODO Validate newItem fields

		this.props.onSaveModal(newItem);
	}

	handleInputChange(key, e) {
		let obj = {};
		obj[key] = e.target.value;

		this.setState(obj);
	}

	handleModalCloseBtnClick() {
		this.props.onCloseModal();
	}

	componentWillReceiveProps(props) {
		this.setState({
			item: props.item,
			currentGroupName: props.item.groupName,
			currentSongTitle: props.item.songTitle,
			currentDurationMinutes: props.item.durationMinutes,
			currentDurationSeconds: props.item.durationSeconds
		});
	}

	render() {
		const { isOpened } = this.props;
		const { currentGroupName, currentSongTitle, currentDurationMinutes, currentDurationSeconds } = this.state;

	    return(
	    		<div className="edit-modal-wrapper">
				  <div className="edit-modal-inner">
				    <div className="edit-modal">
	    				{isOpened && (
					      <div className="modal opened">
					        <div className="modal-dialog">
					          <div className="modal-content">
					            <div className="modal-header">
					              <h3>Edit track</h3>
					            </div>
					            <div className="modal-body">
					              <div className="elements-wrapper form-inline">
					                <div className="section">
					                  <div className="section-inner form-group">
					                    <label htmlFor="edit-group-name">Group name</label>
					                    <input className="form-control" id="edit-group-name" value={currentGroupName} onChange={this.handleInputChange.bind(this, 'currentGroupName')}/>
					                  </div>
					                </div>
					                <div className="section">
					                  <div className="section-inner form-group">
					                    <label htmlFor="edit-song-title">Song title</label>
					                    <input className="form-control" id="edit-song-title" value={currentSongTitle} onChange={this.handleInputChange.bind(this, 'currentSongTitle')}/>
					                  </div>
					                </div>
					                <div className="section">
					                  <div className="section-inner form-group">
					                    <label htmlFor="edit-min-duration">Duration minutes</label>
					                    <input className="form-control" id="edit-min-duration" value={currentDurationMinutes} onChange={this.handleInputChange.bind(this, 'currentDurationMinutes')}/>
					                  </div>
					                </div>
					                <div className="section">
					                  <div className="section-inner form-group">
					                    <label htmlFor="edit-sec-duration">Duration seconds</label>
					                    <input className="form-control" id="edit-sec-duration" value={currentDurationSeconds} onChange={this.handleInputChange.bind(this, 'currentDurationSeconds')}/>
					                  </div>
					                </div>
					              </div>
					            </div>
					            <div className="modal-footer">
					              <button className="btn btn-primary" type="button" onClick={this.handleModalSaveBtnClick}>Save</button>
					              <button className="btn btn-default" type="button" onClick={this.handleModalCloseBtnClick}>Close</button>
					            </div>
					          </div>
					        </div>
					      </div>
						)}
				    </div>
				  </div>
				</div>
	    );
  	}
}


export default EditModal; 