import * as React from 'react'

interface SideMenuProps {
}

interface SideMenuState {
}

class SideMenu extends React.Component<SideMenuProps, SideMenuState> {
  constructor(props, context) {
    super(props, context); 
  }

  render() {
      return(
      <div className="side-menu-wrapper">
        <div className="side-menu-inner">
          <div className="side-menu form-group">
            <div className="section">
              <label htmlFor="group-name">Group name</label>
              <input className="form-control" id="group-name"/>
            </div>
            <div className="section">
              <label htmlFor="song-title">Song title</label>
              <input className="form-control" id="song-title"/>
            </div>
            <div className="section">
              <label htmlFor="duration-seconds">Duration seconds</label>
              <input className="form-control" id="duration-seconds"/>
            </div>
            <div className="section">
              <label htmlFor="duration-minutes">Duration minutes</label>
              <input className="form-control" id="duration-minutes"/>
            </div>
            <div className="section">
              <div className="btn btn-primary">Save</div>
              <div className="btn btn-default">Reset</div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}


export default SideMenu; 