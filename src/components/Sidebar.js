import React from 'react';
import './Sidebar.css';

import Navbar from './Navbar.js';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu right>
        <Navbar val={1}/>
    </Menu>
  );
};