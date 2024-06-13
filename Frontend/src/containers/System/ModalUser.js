import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            // reset state
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChageInput = (event, id) => {
        // bad code
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state 
        // }, ()=> {
        //     console.log('check bad state', this.state)
        // })

        // good code
        let copyState = {...this.state}; // copy lại các state dc khai bao ở trên và gán cho copyState
        copyState[id] = event.target.value; //dùng để modify gian tiep các giá trị trong state
        this.setState({
            ...copyState // copy lại các giá trị đã được sửa đổi
        })
    }

    checkValiDateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for(let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop ', this.state[arrInput[i]], arrInput[i])
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValiDateInput(); // call function check validateInput
        if(isValid === true) {
            // Call API create modal
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={()=> { this.toggle() }} 
                className={'modal-user-container'}
                size = "lg"
                
            >
          <ModalHeader toggle={()=>{this.toggle()}}>Create a new user</ModalHeader>
          <ModalBody>
            <div className='modal-user-body'>
                    <div className='input-container'>
                        <label>Email</label>
                        <input 
                            type='text' 
                            onChange={(event)=>{this.handleOnChageInput(event, "email")}}
                            value={this.state.email} // set gia tri lay theo state
                        />
                    </div>
                    <div className='input-container'>
                        <label>Password</label>
                        <input 
                            type='password' 
                            onChange={(event)=> {this.handleOnChageInput(event, "password")}}
                            value={this.state.password}
                        />
                    </div>
                    <div className='input-container'>
                        <label>First Name</label>
                        <input 
                            type='text'
                            onChange={(event)=> {this.handleOnChageInput(event, "firstName")}}
                            value={this.state.firstName}
                        />
                    </div>
                    <div className='input-container'>
                        <label>Last Name</label>
                        <input 
                            type='text'
                            onChange={(event)=> {this.handleOnChageInput(event, "lastName")}}
                            value={this.state.lastName} 
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>Address</label>
                        <input 
                            type='text'
                            onChange={(event)=>{this.handleOnChageInput(event, "address")}}
                            value={this.state.address}
                        />
                    </div>
                    
            </div>
                    
          </ModalBody>
          <ModalFooter>
            <Button 
            color="primary" 
            className='px-3' 
            onClick={()=>{this.handleAddNewUser()}}>Add new</Button>{' '}
            <Button color="secondary" className='px-3' onClick={()=> {this.toggle()}}>Close</Button>
          </ModalFooter>
        </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);






