import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('User')
@observer
class Signup extends Component {

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

    render() {
        let {User} = this.props;
        return (
            <div className="container-fluid">
                <h1> &nbsp;&nbsp;Full Stack Form</h1><br />
                <form className="form-group">
                    <input required="required" className="form-control" name="firstname" placeholder="First Name" ref="firstname" /><br />
                    <input className="form-control" name="lastname" placeholder="Last Name" ref="lastname" /><br />
                    <input className="form-control" name="email" placeholder="Email" ref="email" /><br />
                    <input className="form-control" name="phone" placeholder="Phone" ref="phone" /><br />
                    <input className="form-control" name="password" type="password" placeholder="password" ref="password" /><br />
                    <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>submit</button>&nbsp;&nbsp;
                
                </form>
               
               


            </div>
        )
    }
}


export default Signup;