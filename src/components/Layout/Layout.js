import React from 'react';
import './Layout.scss';

// Since it's a component, it should have the first letter as upperCase.
// One best practice also is to destruct the props.
const layout = ({ children }) => (
  <div id="layout">
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">{children}</main>
  </div>
);
export default layout;
