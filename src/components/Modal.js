import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
} from "reactstrap";
import './Grid.css'
import Game from "./Game";
export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        st:true
    };
  }


  render() {
    const { toggle} = this.props;

    return (
      <Modal isOpen={true} centered style={{background:'slategrey',width:'1000px',height:'500px',margin:'auto'}} >
        <ModalBody><h1 className='status'>Game Over!!</h1>
        <h2 className='status'>{this.props.win}</h2>
           <Button
            color="success"
            className='glow-on-hover'
        onClick={()=>toggle()}
          >
            Close
          </Button>
        </ModalBody>
      </Modal>
    );
  }
}


