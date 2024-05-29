import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers , createNewUserService} from "../../services/userService";
import { bind } from 'lodash';
import ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

     getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
        
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    createNewUser = async (data) => {
        try {
          let response = await createNewUserService(data);
          if(response && response.errCode !== 0) {
            alert(response.errMessage)
          } else {
            await this.getAllUsersFromReact();
            this.setState({
                isOpenModalUser: false
            })
          }
        } catch (e) {
            console.log(e)
        } 
    }
    /**Life cycle
     * Run component:
     * 1. Run construct -> init state
     * 2. Did mount (set State)
     * 3. Render
     */

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen = {this.state.isOpenModalUser}
                    toggleFromParent = {this.toggleUserModal}
                    createNewUser = { this.createNewUser }
                />
                <div className='title text-center'>Manager users with TMQ</div>
                <div className='mx-1'>
                    <button className ="btn btn-primary px-3"
                        onClick={()=>this.handleAddNewUser(bind, this)}
                    ><i className="fas fa-plus"></i> Add New Users</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                <table id="customers">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>PhoneNumber</th>
                        <th>Gender</th>
                        <th>Image</th>
                        <th>RoleId</th>
                        <th>Action</th>                        
                    </tr>
                        {arrUsers && arrUsers.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.image}</td>
                                        <td>{item.roleId}</td>
                                        {/* <td>{item.action}</td> */}
                                        <td>
                                            <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
