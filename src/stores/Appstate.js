import { observable, action } from 'mobx';
import axios from 'axios';

class Users {
    @observable firstname = '';
    @observable lastname = '';
    @observable email = '';
    @observable phone = '';
    @observable password = '';
<<<<<<< HEAD
    @observable userData = [];
=======
   

     

>>>>>>> dd5cd8a9d3996b1a74d8f26b3fd9c370abd5d4d8

    @action createUser() {

        axios.post('http://localhost:5000/users/create-user', {


            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
            password: this.password,
        })

            .then( (response) => {
              this.userData.push ( response.data)

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
       let user = this
     axios.get('http://localhost:5000/users/show-user')
<<<<<<< HEAD
        .then( (response) => {
       
           response.data.map(d => {
               user.push(d);
           })
=======
        .then(function (response) {
           user.userData = response.data
>>>>>>> dd5cd8a9d3996b1a74d8f26b3fd9c370abd5d4d8
        })
        .catch(function (error) {
            console.log(error);
        });

    }


};

// const userData = observable([]);

const store = new Users();
export default store;