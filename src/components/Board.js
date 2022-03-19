import React, { Component } from 'react'
import Grid from './Grid.js'
import './Grid.css'
class Board extends Component {
  
createDiv=(i)=>{var sty=''
if(this.props.play[i]==='Player1')
sty='pl1'
if(this.props.play[i]==='Player2')
sty='pl2'
    return <div className='column'><Grid sty={sty} refresh={this.props.refresh} play={this.props.play[i]} dev={this.props.func} id={this.props.id[i]} top={this.props.hor[i]['top']} bottom={this.props.hor[i]['bottom']} left={this.props.hor[i]['left']} right={this.props.hor[i]['right']}/></div>
}

  render() {
    return (
      <div>
          <div className='row'>
          {this.createDiv(0)}
          {this.createDiv(1)}
          {this.createDiv(2)}
          {this.createDiv(3)}
          {this.createDiv(4)}
          </div>
          <div className='row'>
          {this.createDiv(5)}
          {this.createDiv(6)}
          {this.createDiv(7)}
          {this.createDiv(8)}
          {this.createDiv(9)}
          </div>
          <div className='row'>
          {this.createDiv(10)}
          {this.createDiv(11)}
          {this.createDiv(12)}
          {this.createDiv(13)}
          {this.createDiv(14)}
          </div>
          <div className='row'>
          {this.createDiv(15)}
          {this.createDiv(16)}
          {this.createDiv(17)}
          {this.createDiv(18)}
          {this.createDiv(19)}
          </div>
          <div className='row'>
          {this.createDiv(20)}
          {this.createDiv(21)}
          {this.createDiv(22)}
          {this.createDiv(23)}
          {this.createDiv(24)}
          </div><br/>
      </div>
    )
  }
}

export default Board
