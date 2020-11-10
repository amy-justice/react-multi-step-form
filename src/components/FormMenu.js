import React, { Component } from 'react';

import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

export class FormMenu extends Component {


    render() {
        return (
            <div style= {{color: "#007fc1", display: "flex", flexDirection: "row", alignItems: "center", background: '#bbe0f7'}}>
                <div style={{width: '250px', textAlign: 'left'}}>
                    <h2>Turners</h2>
                </div>
                <div style={{ width: '150px', fontSize: 'large', textAlign: 'right'}}>
                    <h2>
                        <PersonIcon />
                        <SearchIcon />
                        <MenuIcon />
                    </h2>
                </div>
            </div>
        )
    }
}

export default FormMenu
