import * as React from 'react'
import * as Model from '../model';
import { uniqueId } from 'lodash';

import { MENU_HIDDEN } from '../constants/appConstants';

interface ISideMenuProps {
  handleAddingNewItem(song: Model.Song): void;
}

interface ISideMenuState {
  groupName: string;
  songTitle: string;
  durationMinutes: string;
  durationSeconds: string;
  isMenuHidden: boolean;
}

class SideMenu extends React.Component<ISideMenuProps, ISideMenuState> {
  constructor(props) {
    super(props);

    this.state = {
      groupName: '',
      songTitle: '',
      durationMinutes: '',
      durationSeconds: '',
      isMenuHidden: true
    };
  }

  generateUniqueId = () =>{
    // let id = Math.floor(Date.now() / 1000);
    let id = uniqueId('song_');

    return id;
  }

  handleSaveBtnClick = (e) => {
    let song = {
      id: this.generateUniqueId(),
      groupName: this.state.groupName,
      songTitle: this.state.songTitle,
      durationMinutes: this.state.durationMinutes,
      durationSeconds: this.state.durationSeconds
    };
    this.props.handleAddingNewItem(song);
    this.resetFields();
  }

  handleResetBtnClick = () => {
    this.resetFields();
  }

  handleInputChange = (key, e) => {
    let obj = {};
    obj[key] = e.target.value;

    this.setState(obj);
  }

  resetFields = () => {
    this.setState({
      groupName: '',
      songTitle: '',
      durationMinutes: '',
      durationSeconds: ''
    })
  }
  
  handleToggleMenuStatus = () => {
    this.setState({isMenuHidden: !this.state.isMenuHidden});
  }

  render() {
      return(
      <div className={'side-menu-wrapper '}>
        <div className="show-icon show-menu" onClick={this.handleToggleMenuStatus}>
          <div className="show-icon-inner"></div>
        </div>

        {!this.state.isMenuHidden && (
          <div className="side-menu-inner">
            <div className="side-menu form-group">
              <div className="top-panel clearfix">

              </div>
              <div className="middle-panel">
                <div className="section">
                  <label htmlFor="group-name">Group name</label>
                  <input className="form-control" id="group-name" onChange={this.handleInputChange.bind(this, 'groupName')} value={this.state.groupName} />
                </div>
                <div className="section">
                  <label htmlFor="song-title">Song title</label>
                  <input className="form-control" id="song-title" onChange={this.handleInputChange.bind(this, 'songTitle')} value={this.state.songTitle} />
                </div>
                <div className="section">
                  <label htmlFor="duration-minutes">Duration minutes</label>
                  <input className="form-control" id="duration-minutes" onChange={this.handleInputChange.bind(this, 'durationMinutes')} value={this.state.durationMinutes} />
                </div>
                <div className="section">
                  <label htmlFor="duration-seconds">Duration seconds</label>
                  <input className="form-control" id="duration-seconds" onChange={this.handleInputChange.bind(this, 'durationSeconds')} value={this.state.durationSeconds} />
                </div>
              </div>
              <div className="bottom-panel">
                <div className="section">
                  <div className="btn btn-primary" onClick={this.handleSaveBtnClick}>Save</div>
                  <div className="btn btn-default" onClick={this.handleResetBtnClick}>Reset</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      );
    }
}


export default SideMenu; 