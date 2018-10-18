import React from 'react'
import {NativeSelect, Input, InputLabel, FormControl } from '@material-ui/core'
import uniqid from 'uniqid'

//TO-DO Adicionar o Redux
export default class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        //this.store = this.props.store
        this.state = {
          selected:''
        };
    }

    render(){
        var id = uniqid.time();
        return(
        <FormControl style={this.props.classes.formControl}>
        <InputLabel htmlFor={id} children={this.props.inputLabel} shrink={this.state.selected == '' ? false :true} /> 
        <NativeSelect 
            value = {this.state.selected}
            onChange = {this.handleChange}
            input={<Input name={this.props.inputName} id={id} />}
         >
            {this.props.children}
         </NativeSelect>
         </FormControl>
         
    )}

    handleChange = (e)=>{
        this.props.handleFunc(e.target.value);
        this.setState({
            selected:e.target.value
        })
    }
}

CustomInput.defaultProps = {
    inputName:'default',
    inputLabel:'default'
}