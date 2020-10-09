(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

describe("Login Akun", function () {
  it("Login ke Uang Teman", function () {
    cy.on('uncaught:exception', function (err, runnable) {
      return false;
    });
    var datalogin = {
      "email": "helkiapasaribu@yahoo.com",
      "password": "helkia"
    };
    cy.wait(1000);
    cy.visit('https://uangteman.com/login');
    cy.get('[type|="email"]').click().type(datalogin.email);
    cy.get('[type|="password"]').type(datalogin.password);
    cy.get("button").contains("Login").click({
      force: true
    });
    cy.get(datalogin);
  });
});

},{}]},{},[1]);
