import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormDetails extends Component{

    continue  = e => {
        e.preventDefault();
        this.props.nextScreen();
    }

    render(){
        const { values } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Decodar Imagem!"/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormDetails