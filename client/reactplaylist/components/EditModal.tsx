import * as React from 'react'
import * as Model from '../model';

interface IEditModalProps {
	isOpened: boolean;
	item?: Model.Song;
	onCloseModal?:() => void;
}

interface IEditModalState {
	item?: Model.Song;
}

class EditModal extends React.Component<IEditModalProps, IEditModalState> {
	constructor(props, context) {
		super(props); 

		this.handleModalCloseBtnClick = this.handleModalCloseBtnClick.bind(this);

		this.state = {
			item: this.props.item
		}
	}

	handleModalCloseBtnClick() {
		this.props.onCloseModal();
	}

	componentWillReceiveProps(props) {
		this.setState({item: props.item});
	}

	render() {
		const { isOpened } = this.props;
		const { groupName, songTitle, durationMinutes, durationSeconds } = this.state.item;

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
					                    <input className="form-control" id="edit-group-name" value={groupName}/>
					                  </div>
					                </div>
					                <div className="section">
					                  <div className="section-inner form-group">
					                    <label htmlFor="edit-song-title">Song title</label>
					                    <input className="form-control" id="edit-song-title" value={songTitle}/>
					                  </div>
					                </div>
					                <div className="section">
					                  <div className="section-inner form-group">
					                    <label htmlFor="edit-min-duration">Duration minutes</label>
					                    <input className="form-control" id="edit-min-duration" value={durationMinutes}/>
					                  </div>
					                </div>
					                <div className="section">
					                  <div className="section-inner form-group">
					                    <label htmlFor="edit-sec-duration">Duration seconds</label>
					                    <input className="form-control" id="edit-sec-duration" value={durationSeconds}/>
					                  </div>
					                </div>
					              </div>
					            </div>
					            <div className="modal-footer">
					              <button className="btn btn-primary" type="button">Save</button>
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