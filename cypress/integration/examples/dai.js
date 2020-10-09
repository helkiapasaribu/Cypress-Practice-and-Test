(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

describe("Login Akun", function () {
  it("Login ke Investor dashboard", function () {
    cy.on('uncaught:exception', function (err, runnable) {
      return false;
    });
    var datalogin = {
      "email": "gusty@yopmail.com",
      "Password": "12312345"
    };
    cy.wait(1000);
    cy.visit('https://uangteman.com/');
    cy.get('#btn_login_nasabah').contains("Login Nasabah").click();
    cy.get('#login-form-username').click().type(datalogin.email);
    cy.get('#login-form-password').click().type(datalogin.Password);
    cy.get('#login-nasabah > :nth-child(1) > :nth-child(2) > .home-login-wrapper > .login-user > .row > .col-md-2 > .btn').click(); //cy.get('input[id="login-form-username"]').click().type(datalogin.login-form-username)
    //cy.get('input[id="login-form-password"]').type(datalogin.login-form-password)

    cy.get(datalogin);
    cy.on('uncaught:exception', function (err, runnable) {
      return false;
    });
    cy.get(':nth-child(3) > :nth-child(1) > .css-oflxif > .css-1o1z075 > .css-1axjumr').should("contain", "P0ID200122000257");
    cy.get(':nth-child(3) > :nth-child(1) > .css-oflxif > .css-1o1z075 > .css-1mqjj8s').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(1) > .css-oflxif > .css-1o1z075 > .css-1axjumr').should("contain", "P0ID200122000388");
    cy.get('.css-1o1z075 > .css-1dbr7i3 > .css-1jazjbw').click();
    cy.wait(3000);
    cy.get('.css-1ad7bzz').click(); ///////////////////////////////////////
    //  cy.get('[href="/lender/loan-process"] > .css-1hp1qqi > .css-1xxe9l9').contains("Loan Process").click()
    // cy.get(':nth-child() > :nth-child(9) > .css-oflxif > .css-ufo6fp').contains("View Agreement").click()
    //cy.get('.css-x8l291 > .css-1xxe9l9').contains("Available Loan").click()
    //cy.get(':nth-child(20) > :nth-child(1) > .css-oflxif > .css-1o1z075 > .css-1mqjj8s').click()

    cy.get('.css-1hp1qqi').contains("Funding").click(); //cy.get(':nth-child(54) > .css-31oqnk').should('contain', 'Trans ID - abc43')
    //cy.get(':nth-child(54) > .css-31oqnk').click()
    //cy.get('[href="/lender/loan-report"] > .css-1spc1yn > .css-ku93sv').click()
    //cy.get('[href="/lender/transaction-report"] > .css-1spc1yn > .css-ku93sv').click()
    //  cy.wait(3000)
    // cy.get('[href="/lender/login"] > .css-1spc1yn').click()
  });
});

},{}]},{},[1]);
