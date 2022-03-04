"use strict";
var User = /** @class */ (function () {
    function User() {
        this._firstName = "Alvaro";
        this._lastName = "Ferreira";
        this._userName = "alva7o";
        this._email = "alvaromachadoferreira@hotmail.com";
        this._password = "123ijij";
        this._cpf = 13413413413;
        this._contact = 999999999;
        this._isAdmin = false;
    }
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "contact", {
        get: function () {
            return this._contact;
        },
        set: function (value) {
            this._contact = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isAdmin", {
        get: function () {
            return this._isAdmin;
        },
        set: function (value) {
            this._isAdmin = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User();
console.log(user.cpf);
