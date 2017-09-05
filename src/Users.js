import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('User')
@observer
class Users extends Component {

    onSubmitShow = (e) =>  {
        let { User } = this.props;
        e.preventDefault();
        User.showUser();
    
    }

    render() {
        let {User} = this.props;
        return (
          <div>
          <button className="btn btn-primary" onClick={e => this.onSubmitShow(e)}>show all users</button>

<table className="table table-striped ">
                   
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                  {  User.userData.map(d => (
      <tr key={Math.random()}>
        <td>{d.firstname} {d.lastname}</td>
        <td>{d.email}</td>
        <td>{d.phone}</td>
        <td>{d.password}</td>
      </tr>
                   )) }
    </tbody>
                              
                </table>
                </div>
      )
    }
            }
            
            
 export default Users;