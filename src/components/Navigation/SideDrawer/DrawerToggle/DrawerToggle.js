import React from 'react';

import classses from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div 
        className={classses.DrawerToggle}
        onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>

    </div>
);

export default drawerToggle;