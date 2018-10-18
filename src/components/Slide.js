import React from 'react'
import {Card } from '@material-ui/core'


const classes = {
    SlideCard:{
        marginTop:'32px',
        maxWidth:'900px',
    },
    SlideMain:{
        display:'flex',
        minHeight:'128px',
        height:9*700/16,
        position:'relative',
    },
    SlideContent:{
        width:'100%',
        display:'flex',
        justifyContent:'center'
    },
    SlidePicture:{},
    SlideWidgetLeft:{
        position:'absolute',
        left:0,
        width: '10%',
        backgroundColor: '#aaaaaa50',
        height: '100%',
        zIndex:1,
    },
    SlideWidgetRight:{
        position:'absolute',
        right:0,
        width: '10%',
        backgroundColor: '#aaaaaa50',
        height: '100%',
        zIndex:1,
    
    },
    SlideLabel:{
        position: 'absolute',
        left: '50%',
        top: '50%',
        fontWeight: '700',
        color: 'white',
        fontSize: '64px',
        transform: 'translateX(-50%) translateY(-50%)',
        textAlign:'center'
    }
}

const imgShow = {
    transform:'',
    display:'',
}

const imgNoShow = {
    transform:'translateX(100%)',
    opacity:0,
}
const imgDefault = {
    transition:'transform ease-out 0.35s, opacity ease-out 0.35s',
    transform:'translateX(100%)',
    position:'absolute',
    zIndex:0,
}

const ImgLeft = {transform:'translateX(-100%)',}
const ImgRight = {transform:'translateX(100%)',}
export default class Slide extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          selectedIndex:0,
        };
      }

    RenderImages = () =>{
        var ImageList = this.props.images.map( (x, index) => {
            console.log(index, index == this.state.selectedIndex );
            var firstIndex = 0;
            var lastIndex = this.props.images.length -1;
            var slideFrom;
            if (index != this.state.selectedIndex && (index != firstIndex || index != lastIndex) ){
                slideFrom = index < this.state.selectedIndex ? ImgLeft:ImgRight
            }else if (this.state.selectedIndex == firstIndex && index == lastIndex){
                slideFrom = ImgRight;
            }else if (this.state.selectedIndex == lastIndex && index == firstIndex){
                slideFrom = ImgLeft;
            }
            return(<div key={index} style={{
                ...imgDefault, ...(index == this.state.selectedIndex ? imgShow : imgNoShow),
                 ...slideFrom
                }}>
                <label style={classes.SlideLabel}>{x.text}</label>
                <img style={classes.SlideImage} src={x.src}></img>
            </div>)}
        )
        return ImageList;

    }
    render = () => (
        <Card style={classes.SlideCard}>
            <div style = {classes.SlideMain}>
                <div style = {classes.SlideWidgetLeft} onClick={this.moveLeft}></div>
                <div style = {classes.SlideContent}>
                    {this.RenderImages()}
                </div>
                <div style = {classes.SlideWidgetRight} onClick={this.moveRight}></div>
            </div>
        </Card >
        
    )
    moveLeft = (e) => {
        this.setState( prevState => ({
            selectedIndex: prevState.selectedIndex - 1 < 0 ? this.props.images.length -1 : prevState.selectedIndex - 1
        }))
    }
    moveRight = (e) => {
        this.setState(prevState => ({
            selectedIndex:prevState.selectedIndex + 1 > this.props.images.length -1 ? 0:prevState.selectedIndex + 1
        }))
    }
}

Slide.defaultProps = {
    images:[{src:'', text:'Default'}]
}