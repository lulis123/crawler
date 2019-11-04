import React, { Component } from 'react'

export class UserForm extends Component{

    state = {
        step: 1,
        Imagem: '',
        UrlChave: '',
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    

    render(){

        const {Imagem, UrlChave} = this.state;
        const values = {Imagem, UrlChave};

        return(
            <div>
                <h1> TESTE </h1>
            </div>
        )
    }
}

export default UserForm