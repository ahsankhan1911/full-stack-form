import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import axios from 'axios';

let saad 
@inject('User')
@observer
class Form extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        let { User } = this.props;

        User.firstname = this.refs.firstname.value
        User.lastname = this.refs.lastname.value
        User.email = this.refs.email.value
        User.phone = this.refs.phone.value
        User.password = this.refs.password.value

        User.createUser();
    }


    onSubmitShow = (e) =>  {
        let { User } = this.props;
        e.preventDefault();
    
        axios.get('http://localhost:5000/users/show-user')
        .then(function (response) {
           saad = response.data.map((data) => {
                return (
                  <div>
                    <p>{console.log(data)}</p>
                  </div>
                )
        }) })
        .catch(function (error) {
            console.log(error);
        });
  
    }

    render() {
        let {userData} = this.props;
        return (
            <div className="container-fluid">
                <h1> &nbsp;&nbsp;Full Stack Form</h1><br />
                <form className="form-group col-md-5">
                    <input className="form-control" name="firstname" placeholder="First Name" ref="firstname" /><br />
                    <input className="form-control" name="lastname" placeholder="Last Name" ref="lastname" /><br />
                    <input className="form-control" name="email" placeholder="Email" ref="email" /><br />
                    <input className="form-control" name="phone" placeholder="Phone" ref="phone" /><br />
                    <input className="form-control" name="password" type="password" placeholder="password" ref="password" /><br />
                    <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>submit</button>&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={e => this.onSubmitShow(e)}>show all users</button>
                </form>
                <h1> Users Data</h1>
                <div className='well'>
               {
                 saad
               }
            </div>

            </div>
        )
    }
}


export default Form;