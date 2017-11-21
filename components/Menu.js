import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  toggleDrawer () {
    console.log('toggleDrawer')
    this.setState({open: !this.state.open})
  }
  handleClose () {
    this.setState({open: false})
  }
  render() {
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    if (this.state.open) {
      contentStyle.marginLeft = 256;
    }
    return (
      <div style={contentStyle}>
        <AppBar
          title="Plants"
          showMenuIconButton={true}
          docked="false"
          width="100"
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
        />
        <Drawer
          open={this.state.open}>
        <MenuItem onClick={this.handleClose.bind(this)}>
          Home
        </MenuItem>
        <MenuItem onClick={this.handleClose.bind(this)}>
          About
        </MenuItem>
        </Drawer>
      </div>
    )
  }
}
