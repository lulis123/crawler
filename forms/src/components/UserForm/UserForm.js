import React, { Component } from 'react';
import { Imagem1 } from '../../Data/Imagem1.json';
import { Imagem2 } from '../../Data/Imagem2.json';
import { Imagem3 } from '../../Data/Imagem3.json';
import { URL1, URL2, URL3 } from '../../Data/URL.json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ImagemFinal from "../../Data/image.jpg"
import FormDetails from '../FormDetails/FormDetails'



export class UserForm extends Component{

    state = {
        step: 1,
        Imagem: '',
        UrlChave: '',
    }

    nextScreen = () =>{
        const { step, Imagem, UrlChave } = this.state;
        if((Imagem == Imagem1 && UrlChave == URL1) ||(Imagem == Imagem2 && UrlChave == URL2) || (Imagem == Imagem3 && UrlChave == URL3))
            this.setState({
                step: 2
            });
        else
            this.setState({
                step: 3
            });
    }    

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    

    render(){
        const { step } = this.state;
        const {Imagem, UrlChave} = this.state;
        const values = {Imagem, UrlChave};
        
        switch(step){
            case 1:
                return(
                    <FormDetails
                    nextScreen = {this.nextScreen}
                    handleChange = {this.handleChange}
                    values = {values}/>
                )
            case 2:
                return (
                    <MuiThemeProvider>
                        <React.Fragment>
                            <AppBar title = "Decodar Imagem!"/>
                            <h1>Deu certo!! aqui está sua imagem:</h1>
                            <br/>
                            <img src = {ImagemFinal}/>
                        </React.Fragment>
                    </MuiThemeProvider>
                );
            case 3:
                return (
                    <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title = "Decodar Imagem!"/>
                        <h1>Deu Errado :(</h1>
                    </React.Fragment>
                </MuiThemeProvider>
                    
                );
        }
    }
}

export default UserForm