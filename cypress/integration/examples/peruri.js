(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

describe("Login Akun", function () {
  it("Login ke Perur", function () {
    cy.on('uncaught:exception', function (err, runnable) {
      return false;
    });
    var datalogin = {
      "email": "adminuangteman@yopmail.com",
      "password": "adminuangteman123",
      "systemId": "UANG-TEMAN"
    };
    var useremail = {
      "email": "rahmatf@yopmail.com"
    };
    var tanggal = {
      "startDate": "2020-03-27",
      "stopDate": "2020-04-09"
    };
    var tanggal1 = {
      "startDate": "2020-01-04",
      "stopDate": "2020-02-04"
    };
    var emails = {
      "Search": "iqbal@yopmail.com"
    };
    cy.wait(1000);
    cy.visit('https://e-form.peruri.co.id/dashbent/login');
    cy.get('[type|="email"]').click().type(datalogin.email);
    cy.get('input[name="password"]').type(datalogin.password);
    cy.get('input[name="systemId"]').type(datalogin.systemId);
    cy.get('button').contains("LOGIN").click({
      force: true
    });
    cy.get(datalogin);
    cy.get(':nth-child(1) > :nth-child(1) > .widget').contains("User Certificate").click();
    cy.get('#submenuUser > .submenu > :nth-child(2) > a').contains("Check User").click({
      force: true
    });
    cy.get('[type|="email"]').click().type(useremail.email);
    cy.wait(2000);
    cy.get('button').contains("Search").click();
    cy.wait(2000); // cy.get('button').contains("Request Manual Activation").click()

    cy.get('#submenuUser > .submenu > :nth-child(1) > a').contains("User Data List").click({
      force: true
    });
    cy.get('[name="startDate"]').click().clear().type(tanggal1.startDate);
    cy.get('[name="stopDate"]').click().clear().type(tanggal1.stopDate);
    cy.wait(2000);
    cy.get('button').contains("Search").click();
    cy.get('select').then(function ($select) {
      $select.val('100');
    });
    cy.get('select').should('have.value', '100');
    cy.get(':nth-child(2) > .form-control').click().type(emails.Search); //  cy.wait(2000)
    //    cy.get('button').contains("Export All to CSV").click()

    /* cy.get('#sidebar-nav-menu > :nth-child(1) > a').contains("Dashboard").click({force:true})
    cy.get(':nth-child(3) > .collapsed').contains("Digital Signature").click({force:true})
    cy.get('#submenuOrder > .submenu > :nth-child(1) > a').contains("Order Data List").click({force:true})
    cy.get('input[name="startDate"]').click().clear().type(tanggal.startDate)
    cy.get('input[name="stopDate"]').click().clear().type(tanggal.stopDate)
    cy.get('.btn').contains("Search").click()
    // cy.get('.dropdown-toggle > span').contains("PT Digital Alpha Indonesia DEVELOPMENT").click()
    //  cy.get('.dropdown-menu > li > a > span').contains("Logout").click() */
  });
});

},{}]},{},[1]);
