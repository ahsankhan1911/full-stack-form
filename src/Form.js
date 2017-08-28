import React, { Component } from 'react';

import axios from 'axios';



class Form extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''

    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
axios.post('http://localhost:5000/users/create-user', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
        })
            .then(function (response) {
              
                 let emailErr = response.data.errors.email
                 let phoneErr = response.data.errors.phone

                if (emailErr) {

                    alert(response.data.errors.email.message)
                }


                if (phoneErr) {
                    alert(response.data.errors.phone.message)
                }
                

                    alert('Thanks for signing up ' + response.data.firstname)

                    this.setState({
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        password: ''
                    })
                

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
                    <input className="form-control" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={e => this.change(e)} /><br />
                    <input className="form-control" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={e => this.change(e)} /><br />
                    <input className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)} /><br />
                    <input className="form-control" name="phone" placeholder="Phone" value={this.state.phone} onChange={e => this.change(e)} /><br />
                    <input className="form-control" name="password" type="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)} /><br />
                    <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>submit</button>
                </form>
            </div>
        )
    }
}


export default Form;