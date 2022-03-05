"use strict";
var User = /** @class */ (function () {
    function User(firstName, lastName, userName, email, password, cpf, contact, isAdmin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contact = contact;
        this.isAdmin = isAdmin;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getCpf = function () {
        return this.cpf;
    };
    User.prototype.getContact = function () {
        return this.contact;
    };
    User.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    User.prototype.setFirstName = function (value) {
        this.firstName = value;
    };
    User.prototype.setLastName = function (value) {
        this.lastName = value;
    };
    User.prototype.setUserName = function (value) {
        this.userName = value;
    };
    User.prototype.setEmail = function (value) {
        this.email = value;
    };
    User.prototype.setPassword = function (value) {
        this.password = value;
    };
    User.prototype.setCpf = function (value) {
        this.cpf = value;
    };
    User.prototype.setContact = function (value) {
        this.contact = value;
    };
    User.prototype.setIsAdmin = function (value) {
        this.isAdmin = value;
    };
    return User;
}());
var user = new User('Alvaro', 'Ferreira', 'alva7o', 'alvaromachadoferreira@hotmail.com', '123ijij', 13413413413, 999999999, false);
user.setCpf(12312312312);
console.log(user.getFirstName());
console.log(user.getLastName());
console.log(user.getUserName());
console.log(user.getEmail());
console.log(user.getPassword());
console.log(user.getCpf());
console.log(user.getContact());
console.log(user.getIsAdmin());
