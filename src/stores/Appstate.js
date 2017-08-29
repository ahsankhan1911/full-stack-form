import { observable, computed, action } from 'mobx';

// class User {
//     @observable firstname   
//     @observable lastname 
//     @observable email
//     @observable phone
//     @observable password

//     constructor(firstname , lastname, email,phone, password ){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.email = email
//         this.phone = phone
//         this.password = password
//     }
// }

class Users {   
    @observable firstname = '';
    @observable lastname = '';
    @observable email = '';
    @observable phone = '';
    @observable password = '';


};

const store = new Users();
export default store;