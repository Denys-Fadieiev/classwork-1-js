'use strict';

function User(firstName, lastname, email, age, isLoggedln) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.email = email;
  this.age = age;
  this.isLoggedln = isLoggedln;
};

const useProto = {
  getFullName: function(firstName, lastname) {
    return `${firstName} , ${lastname}`;
  },
  logout: false,
  login: true,
};

User.prototype = useProto;

const User1 = new User ('Vasyl', 'Ivanov', 'js@.com', 23, useProto.login);

console.log(User1);