import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import axios from 'axios';


@inject('User')
@observer
class Form extends Component {

    onSubmit = (e) => {
        let { User } = this.props;
        User.firstname = this.refs.firstname.value
        User.lastname = this.refs.lastname.value
        User.email = this.refs.email.value
        User.phone = this.refs.phone.value
        User.password = this.refs.password.value



        e.preventDefault();
        axios.post('http://localhost:3030/user/create-user', {


            firstname: User.firstname,
            lastname: User.lastname,
            email: User.email,
            phone: User.phone,
            password: User.password,
        })

            .then(function (response) {

                let Err = response.data.errors

                if (Err.firstname) {
                    alert(Err.firstname.message)
                }

                if (Err.lastname) {
                    alert(Err.lastname.message)
                }

                if (Err.password) {
                    alert(Err.password.message)
                }

                if (Err.email) {
                    alert(Err.email.message)
                }

                if (Err.phone) {
                    return alert(Err.phone.message)
                }

              

                alert('Thanks for signing up ' + response.data.firstname)




            })
            .catch(function (error) {
                console.log(error);
            });


    }

    render() {
        return (
            <div className="container-fluid">
                <h1> &nbsp;&nbsp;Full Stack Form</h1><br />
                <form className="form-group col-md-5">
                    <input className="form-control" name="firstname" placeholder="First Name" ref="firstname" /><br />
                    <input className="form-control" name="lastname" placeholder="Last Name" ref="lastname" /><br />
                    <input className="form-control" name="email" placeholder="Email" ref="email" /><br />
                    <input className="form-control" name="phone" placeholder="Phone" ref="phone" /><br />
                    <input className="form-control" name="password" type="password" placeholder="password" ref="password" /><br />
                    <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>submit</button>
                </form>
            </div>
        )
    }
}


export default Form;