import React, { Component } from 'react'
import './Grid.css'
import ReactTooltip from "react-tooltip";
class grid extends Component {  
    constructor(props) {
        super(props);
    
        this.state = { x: 0, y: 0 ,styles:''};
        this.divRef = React.createRef()
        
      }
    
      _onMouseMove(e) {
        this.setState({ x: e.clientX, y: e.clientY });
      }
      componentDidMount() {
        const styles = getComputedStyle(this.divRef.current)
        this.setState({
            styles:styles
        })


    }
  render() {
    const { x, y,styles } = this.state
    const ax=(this.props.id%5)
    const ay=Math.floor(this.props.id/5)
    const px=(2*ax-1)*50+100
    const py=(2*ay-1)*50+100
    var t1=''
    var b1=''
    var l1=''
    var r1=''
    var tm=Math.sqrt(Math.pow(x-(px),2)+Math.pow(y-(py-50),2))
    var bm=(Math.sqrt(Math.pow(x-(px),2)+Math.pow(y-(py+50),2)))
    var lm=Math.sqrt(Math.pow(x-(px-50),2)+Math.pow(y-(py),2))
    var rm=Math.sqrt(Math.pow(x-(px+50),2)+Math.pow(y-(py),2))
    if( tm<bm&&tm<lm&&tm<rm)
    {t1='solid';b1=this.props.bottom;l1=this.props.left;r1=this.props.right}
    if ( bm<tm&&bm<lm&&bm<rm)
    {b1='solid';t1=this.props.top;l1=this.props.left;r1=this.props.right}
    if(  lm<bm&&lm<tm&&lm<rm)
    {l1='solid';b1=this.props.bottom;t1=this.props.top;r1=this.props.right}
    if(  rm<bm&&rm<lm&&rm<tm)
    {r1='solid';b1=this.props.bottom;l1=this.props.left;t1=this.props.top}
   
var g=''
    return (
        <div className='boxcoll'>
      <div ref={this.divRef} data-tip data-for="registerTip" key={this.props.id} className='box1' id={this.props.sty} onMouseMove={this._onMouseMove.bind(this)} onClick={(i,p,q,s,m)=>this.props.dev(this.props.id,t1,l1,b1,r1)} style={{borderLeftStyle:this.props.left,borderTopStyle:this.props.top,borderBottomStyle:this.props.bottom,borderRightStyle:this.props.right}}>{this.props.play}</div>
             <ReactTooltip id="registerTip" place="top" effect="solid">
        Please click again if you dont see your status appearing if all the lines of the box is filled
      </ReactTooltip>
        </div>
         
          
    )
  }
}

export default grid

