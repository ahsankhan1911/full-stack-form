import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import axios from 'axios';


@inject('User')
@observer
class Form extends Component {

    onSubmit = (e) => {
        const {Comment} = this.props;
        Comment.firstname = this.refs.firstname.value

        console.log(Comment.firstname)
       


        e.preventDefault();
        axios.post('http://localhost:5000/users/create-user', {


            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
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



                // if (phoneErr) {
                //     alert(response.data.errors.phone.message)
                // }




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
                    <input className="form-control" name="lastname" placeholder="Last Name"ref="lastname" /><br />
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