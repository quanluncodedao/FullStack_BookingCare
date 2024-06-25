import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions"

class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersRedux: [],
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }
    render() {
        console.log('hoiTMQ check all users: ', this.props.listUsers);
        console.log('hoiTMQ check state: ', this.state.usersRedux);
        let arrUsers = this.state.usersRedux
        return (
                <table id='TableManageUser'>
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
                    {arrUsers && arrUsers.length > 0 && arrUsers.map((item, index) => {
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
                                <td>
                                    <button 
                                    onClick={() => this.handleEditUser(item)}
                                    className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                    <button 
                                    onClick={()=> this.handleDeleteUser(item)}
                                    className='btn-delete'><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
