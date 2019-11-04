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
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Decodar Imagem!"/>
                    <TextField
                        hintText = "Imagem em texto"
                        floatingLabelText = "Imagem"
                        onChange = {handleChange('Imagem')}
                        defaultValue = {values.Imagem}
                    />
                    <br/>
                    <TextField
                        hintText = "URL chave "
                        floatingLabelText = "Url Chave"
                        onChange = {handleChange('UrlChave')}
                        defaultValue = {values.UrlChave}
                    />
                    <br/>
                    <RaisedButton
                        label = "Enviar"
                        primary = {true}
                        style = {StyleSheet.button}
                        onClick = {this.continue}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormDetails