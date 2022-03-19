import React, { Component } from 'react'
import Board from './Board'
import Modal from './Modal'
export class Game extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            hor:this.arrayGenerator(25),
            initstate:this.arrayGenerator(25),
            id:Array(25).fill().map((_, idx) => 0 + idx),
        xIsNext: true,
        history:[],
        play:{},
        modal: false,
        win:'',
        data:''
      }
    }
    toggle = () => {
      this.setState({ modal: !this.state.modal });
    }
    jumpTo(move) {
        const hist=this.state.history
        var xIsNext=this.state.xIsNext
        var play=[]
        
     //   console.log(this.state.history[move],hist.length)
        var initstate=this.state.initstate
        var arr=[]
        for(let i=0;i<=move;i++)
        {var hor=hist[i][0]
        var id=hist[i][1]
        initstate[id]['top']=hor[0]
        initstate[id]['left']=hor[1]
        initstate[id]['bottom']=hor[2]
        initstate[id]['right']=hor[3]
        }
        var tarr=[]
        var toggle1=false
        if(initstate[move]['top']==='solid')
        tarr.push('solid')
      else if (initstate[move]['top']==='none')
          if(initstate[move-5]['bottom']==='solid')
          tarr.push('solid')
      if(initstate[move]['left']==='solid')
          tarr.push('solid')
        else if (initstate[move]['left']==='none')
            if(initstate[move-1]['right']==='solid')
            tarr.push('solid')
      if(initstate[move]['bottom']==='solid')
      tarr.push('solid')
      if(initstate[move]['right']==='solid')
      tarr.push('solid')
      if(tarr.length===4)
      {hist[move][2]?play[move]='Player1':play[move]='Player2';toggle1=true;console.log(play.tarr)}
      while(move+1<hist.length){
        arr.push(hist.pop())
    }
        this.setState({
            hor:initstate,
            initstate:this.arrayGenerator(25),
            xIsNext:!toggle1&&move%2===0,
            play:play
        })
      }
  calculateWinner=()=> {
        const play=this.state.play
        console.log('calculat',this.state.play)
        var keys=Object.keys(play)
        var arrp=[]
        var win=""
        //console.log(keys,this.state.play)
        if(keys.length===25){
        for (let i = 0; i < keys.length; i++) {
         if(play[i]='Player1')
         arrp.push('p1')}
        console.log('calculat',arrp)
        if(arrp>12)
        {win='Congrats Player 1 has won'
        alert(win)}
        else
        {win='Congrats Player 2 has won'
        alert(win)}
        return win
        }
        else
        return null;
      }
playset=(id2,hor,tarr,xIsNext,play,toggle1)=>{
  if(!play[id2]){
    if(hor[id2]['top']==='solid')
    tarr.push('solid')
  else if (hor[id2]['top']==='none')
      if(hor[id2-5]['bottom']==='solid')
      tarr.push('solid')
  if(hor[id2]['left']==='solid')
      tarr.push('solid')
    else if (hor[id2]['left']==='none')
        if(hor[id2-1]['right']==='solid')
        tarr.push('solid')
  if(hor[id2]['bottom']==='solid')
  tarr.push('solid')
  if(hor[id2]['right']==='solid')
  tarr.push('solid')
  if(tarr.length===4)
  {xIsNext?play[id2]='Player1':play[id2]='Player2';toggle1=true;console.log(play.tarr)}
    }
}
quit=()=>{
  const play=this.state.play
  var keys=Object.keys(play)
  var arrp=[]
  var win=""
  console.log(keys,this.state.play)
  if(keys.length===25){
  for (let i = 0; i < keys.length; i++) {
   if(play[i]='Player1')
   arrp.push('p1')}
   console.log(arrp)
  if(arrp>12)
  win='Congrats Player 1 has won'
  else
  win='Congrats Player 2 has won'}
      else
      win= 'you quit the game Refresh to start new game'
    this.setState({modal:true,win:win,hor:this.arrayGenerator(25),play:[],history:[]})}
    func=(id2,t2,l2,b2,r2)=>{
        var history=this.state.history
         const id=this.state.id.slice()
        const hor=this.state.hor.slice()
        if (this.calculateWinner()) {
          return;
        }
        var toggle=false
        var toggle1=false
        var modal=false
        var tarr=[]
        var play=this.state.play
        var xIsNext=this.state.xIsNext
        var win=''
        var count=0
        var p1=this.state.p1
        var p2=this.state.p2
        const t=hor[id2]['top'],l=hor[id2]['left'],b=hor[id2]['bottom'],r=hor[id2]['right']
        if(t !== t2 && t==='dashed')
            {hor[id2]['top']=t2;toggle=true}
        if(l !== l2 && l==='dashed')
            {hor[id2]['left']=l2;toggle=true}
        if(b !== b2 && b==='dashed')
            {hor[id2]['bottom']=b2;toggle=true
          if(id2<20 && hor[id2+5]['top']==='none'&&hor[id2+5]['bottom']==='solid'&&hor[id2+5]['right']==='solid'&&(hor[id2+5]['left']==='none'?hor[id2+4]['right']:hor[id2+5]['left'])==='solid')
          {//if((hor[id2+5]['left']==='none'?hor[id2+4]['right']:hor[id2+5]['left'])==='solid')
          this.playset(id2+5,hor,tarr,!xIsNext,play,toggle1)}
          }
        if(r !== r2 && r==='dashed')
            {hor[id2]['right']=r2;toggle=true
            //this.playset(id2,hor,tarr,xIsNext,play,toggle1)
            if(id2%5!==4 &&id2<20&&hor[id2+1]['left']==='none'&&hor[id2+1]['bottom']==='solid'&&hor[id2+1]['right']==='solid'&&(hor[id2+1]['top']==='none'?hor[id2+5]['bottom']:hor[id2+1]['top'])==='solid')
            this.playset(id2+1,hor,tarr,!xIsNext,play,toggle1)}
          
         
            this.playset(id2,hor,tarr,xIsNext,play,toggle1)

          var  s=toggle?history.push([[t2,l2,b2,r2],id2,xIsNext]):''
          
        this.setState({
            xIsNext: toggle&&!toggle1?(!this.state.xIsNext):this.state.xIsNext,
            id:id,
            hor:hor,
            history:history,
            play:play,
            modal:modal,
            win:win,
            
        })

    }
    arrayGenerator=(z)=>{
      var a0={top:'dashed',left:'dashed',bottom:'dashed',right:'dashed'}
      var arr=[]
      arr.push(a0)
      for(let i =1;i<z;i++)
      {
        a0={top:'dashed',left:'dashed',bottom:'dashed',right:'dashed'}
        if(i>=Math.sqrt(z))
        a0={top:'none',left:'dashed',bottom:'dashed',right:'dashed'}
        else if(i%Math.sqrt(z)>0 &&i<Math.sqrt(z))
        a0={top:'dashed',left:'none',bottom:'dashed',right:'dashed'}
        if((i%Math.sqrt(z)>0 )&&( i>=Math.sqrt(z)))
        a0={top:'none',left:'none',bottom:'dashed',right:'dashed'}
        arr.push(a0)
      }
      return arr
    }
    
  render(){
      const history=this.state.history
    const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
      var play =this.state.play.length===25
        return (
            <ul>
          <li key={move}>
            <button className="glow-on-hover" onClick={() => this.jumpTo(move)}>{desc} </button>
          </li></ul>
        )
      })
      const winner=this.calculateWinner()
      console.log(winner)
    const status = winner?(winner+' Has won the game'):('Current player: ' + (this.state.xIsNext ? 'Player1' : 'Player2'));
    return (
      <div className='favor'>
        
        {this.state.modal ? (
          <Modal
          show={this.state.modal}
            toggle={this.toggle}
            win={this.state.win}
            refresh={this.refresh}
          />
        ) :
        (<Board  func={this.func} id={this.state.id} hor={this.state.hor} play={this.state.play}/>)}
        <button className='glow-on-hover'onClick={()=>this.quit()}>Quit Game</button>
        
        <h2 className='status'>{status}</h2>
        <p className='status1'>This game takes into account lots of variables.</p><p className='status1'>a slight glitch is when all lines but the left of a box is clicked the player doesnt show</p><p className='status1'>Please click the box again</p>
        <h3>{moves}</h3>
        
      </div>

    )
  }
}

export default Game
