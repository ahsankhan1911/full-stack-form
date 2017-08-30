import { observable, computed, action } from 'mobx';
import axios from 'axios';


let user;

class Users {
    @observable firstname = '';
    @observable lastname = '';
    @observable email = '';
    @observable phone = '';
    @observable password = '';
    @observable userData = [];    

    @action createUser() {

        axios.post('http://localhost:5000/users/create-user', {


            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
            password: this.password,
        })

            .then(function (response) {

                let Err = response.data.errors
                if (Err) {
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

                }
                alert('Thanks for signing up ' + response.data.firstname)




            })
            .catch(function (error) {
                console.log(error);
            });


    }


    @action showUser() {
        let user = this.userData;
     axios.get('http://localhost:5000/users/show-user')
        .then(function (response) {
            
            response.data.map(data => {
                     user.push(data);
            } )
    
        })
        .catch(function (error) {
            console.log(error);
        });
    }


};

const store = new Users();
export default store;