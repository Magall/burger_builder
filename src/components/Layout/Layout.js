import React from "react";
import './Layout.scss'
const layout = (props) => (
  <div id="layout">
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">{props.children}</main>
  </div>
);
export default layout;