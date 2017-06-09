import * as React from 'react'
import * as Model from '../model';
import { uniqueId } from 'lodash';

import { MENU_HIDDEN } from '../constants/appConstants';

interface SideMenuProps {
  onAddingNewItem(song: Model.Song): void;
}

interface SideMenuState {
  groupName: string;
  songTitle: string;
  durationMinutes: string;
  durationSeconds: string;
  isMenuHidden: boolean;
}

class SideMenu extends React.Component<SideMenuProps, SideMenuState> {
  constructor(props, context) {
    super(props, context); 

    this.state = {
      groupName: '',
      songTitle: '',
      durationMinutes: '',
      durationSeconds: '',
      isMenuHidden: true
    };
  }

  generateUniqueId(){
    // let id = Math.floor(Date.now() / 1000);
    let id = uniqueId('song_');

    return id;
  }

  handleSaveBtnClick(e) {
    let song = {
      id: this.generateUniqueId(),
      groupName: this.state.groupName,
      songTitle: this.state.songTitle,
      durationMinutes: this.state.durationMinutes,
      durationSeconds: this.state.durationSeconds
    };
    this.props.onAddingNewItem(song);
    this.resetFields();
  }

  handleResetBtnClick() {
    this.resetFields();
  }

  onInputChange(key, e) {
    let obj = {};
    obj[key] = e.target.value;

    this.setState(obj);
  }

  resetFields() {
    this.setState({
      groupName: '',
      songTitle: '',
      durationMinutes: '',
      durationSeconds: ''
    })
  }

  defineWrapperAdditionalClass() {
    let result = '';

    if (this.state.isMenuHidden) {
      result = MENU_HIDDEN;
    }

    return result;
  }

  onToggleMenuStatus() {
    this.setState({isMenuHidden: !this.state.isMenuHidden});
  }

  render() {
      return(
      <div className={'side-menu-wrapper '}>
        <div className="show-icon show-menu" onClick={this.onToggleMenuStatus.bind(this)}>
          <div className="show-icon-inner"></div>
        </div>

        {this.state.isMenuHidden && (
          <div className="side-menu-inner">
            <div className="side-menu form-group">
              <div className="top-panel clearfix">

              </div>
              <div className="middle-panel">
                <div className="section">
                  <label htmlFor="group-name">Group name</label>
                  <input className="form-control" id="group-name" onChange={this.onInputChange.bind(this, 'groupName')} value={this.state.groupName} />
                </div>
                <div className="section">
                  <label htmlFor="song-title">Song title</label>
                  <input className="form-control" id="song-title" onChange={this.onInputChange.bind(this, 'songTitle')} value={this.state.songTitle} />
                </div>
                <div className="section">
                  <label htmlFor="duration-minutes">Duration minutes</label>
                  <input className="form-control" id="duration-minutes" onChange={this.onInputChange.bind(this, 'durationMinutes')} value={this.state.durationMinutes} />
                </div>
                <div className="section">
                  <label htmlFor="duration-seconds">Duration seconds</label>
                  <input className="form-control" id="duration-seconds" onChange={this.onInputChange.bind(this, 'durationSeconds')} value={this.state.durationSeconds} />
                </div>
              </div>
              <div className="bottom-panel">
                <div className="section">
                  <div className="btn btn-primary" onClick={this.handleSaveBtnClick.bind(this)}>Save</div>
                  <div className="btn btn-default" onClick={this.handleResetBtnClick.bind(this)}>Reset</div>
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