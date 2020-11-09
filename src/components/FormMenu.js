import React, { Component } from 'react';

import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

export class FormMenu extends Component {


    render() {
        return (
            <div style= {{color: "#00568b", display: "flex", flexDirection: "row", alignItems: "center", background: '#bbe0f7'}}>
                <div style={{width: '300px'}}>
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
