import React, { Component} from "react";
import "./App.css";
import CustomInput from './components/CustomInput'
import Slide from './components/Slide'

const inputStyle = {
  
}

const inputContainer = {
  display:'flex',
  justifyContent:'space-between',
  
}

const classes = {
  formControl:{
    minWidth:'128px',
  }
}



class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      selectedIndex:0
    };
  }

  render(){
    return(
      <div className="App">
        <div style={inputContainer}>
        <CustomInput classes = {classes} inputLabel="Width">
          <option />
          <option value={'700px'} > 700px </option>
          <option value={'900px'} > 900px </option>
        </CustomInput>
        
        <CustomInput classes = {classes} inputLabel="Proporção">
          <option />
          <option value={'1:1'} > 1:1 </option>
          <option value={'16:9'} > 16:9 </option>
          <option value={'4:1'} > 4:1 </option>
          <option value={'2.4:1'} > 2.4:1 </option>
          <option value={'3:2'} > 3:2 </option>
        
        </CustomInput>

        <CustomInput classes = {classes} inputLabel="Animação">
          <option />          
          <option value={'scale'} > Scale </option>
          <option value={'slideHoriz'} > Slide Horizontal </option>
        </CustomInput>
        </div>
        <Slide images = {[
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg", text:'Aurora'},
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg", text:'Canyon'},
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg", text:'City'},
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg", text:'Desert'},
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg", text:'Mountains'},
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg", text:'Redsky'},
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg", text:'Sandy Shores'},
          {src:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg", text:'Tree of Life'}
          
          ]} />
        
      </div>
    );
  }
}

export default App;