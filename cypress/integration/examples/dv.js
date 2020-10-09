(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

describe("Login Akun", function () {
  it("Login ke Uang Teman", function () {
    cy.on('uncaught:exception', function (err, runnable) {
      return false;
    });
    var datalogin = {
      "username": "christ.ryandi+dv@uangteman.com",
      "password": "testing"
    };
    cy.wait(1000);
    cy.visit('https://mvp.uangteman.com/');
    cy.get('input[id="username"]').click().type(datalogin.username);
    cy.get('[type|="password"]').type(datalogin.password);
    cy.get('.css-cd5zfj').contains("Sign in").click({
      force: true
    });
    cy.get(datalogin);
    cy.wait(5000);
    cy.get(':nth-child(5) > span').contains("logout").click(); // cy.get('cy.get('.css-cd5zfj).contains("SIGN IN").click({force:true})
  });
});

},{}]},{},[1]);
