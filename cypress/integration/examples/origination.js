/*(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"; */

describe("Origination", function () {
  it("Login ke Origination", function () {
    var datalogin = {
      "username": "christ.ryandi+dv@uangteman.com",
      "Password": "testing"
    };
    var datalogin2 = {
      "username": "christ.ryandi+pv@uangteman.com",
      "Password": "testing"
    };
    var datalogin3 = {
      "username": "christ.ryandi+sv@uangteman.com",
      "Password": "testing"
    };
    var datalogin4 = {
      "username": "christ.ryandi+ca@uangteman.com",
      "Password": "testing"
    };
    var search = {
      "search": "mr.martin.saputra@yopmail.com"
    };
    var action = {
      "remark": "oke valid"
    };
    var next = {
      "space": "2"
    };
    cy.wait(3000);
    cy.visit("https://mvp.uangteman.com/"); //DV

    cy.get('input[id="username"]').click().type(datalogin.username);
    cy.get('input[id="Password"]').click().type(datalogin.Password);
    cy.get('button').contains('Sign in').click();
   /*cy.get('.css-1r4s1ig').click().clear().type('2{enter}');
    cy.get('.fa-caret-right').debug().click({
      force: true
    }); */
       cy.get('.fa-search').click()
    cy.get('.css-1x0clfl').click()
    cy.get('.css-1wpe7lw').contains("Email").click({forcec:true})
     cy.get('.form-control').click().type(search.search) 
     cy.get('button').contains('Apply').click()
     /*cy.get('.fa-search').click()

     var test_data=
     [
       {
         "app_loan_id": "P0ID1812190000124"
       },
       {
         "Fullname" : "ADE DWI LISTANTI"
       },
       {
         "Email": "helkia.pasaribu@uangteman.com"
       },
       {
         "HP" :"081382950948X"
       }
     ]

     for(var i=0;i<=test_data.length;i++)
     {
       cy.get('.css-1dweiaz').click({force:true})
       cy.get('.form-control css-13arslp').click().type(test_data[i].app_loan_id)
       cy.get('.css-gethhp').contains('Apply').click()

       cy.get('.css-1dweiazw').click()
       cy.get('.form-control css-13arslp').click().type(test_data[i].Fullname)
       cy.get('.css-gethhp').contains('Apply').click()

       cy.get('.css-1dweiaz').click()
       cy.get('.form-control css-13arslp').click().type(test_data[i].Email)
       cy.get('.css-gethhp').contains('Apply').click()

       cy.get('.css-1dbr7i3').click()
       cy.get('.form-control css-13arslp').click().type(test_data[i].HP)
       cy.get('.css-gethhp').contains('Apply').click()

     } */

    
    
    
    
    
    
    
   
      /*  //  cy.get('.css-12c5jlr').contains('Action Remark').type(action.remark).click()
    // cy.get('.css-1q21b0g').contains('Yes, Proceed').click()
          cy.get('span').contains('logout').click()
    //PV
    cy.get('input[id="username"]').click().type(datalogin2.username)
    cy.get('input[id="Password"]').click().type(datalogin2.Password)
    cy.get('button').contains('Sign in').click()
    cy.wait(2000)
    cy.get('.fa-search').click()
    //cy.get('.form-form-control css-13arslp').click().type(search.search)
    // cy.get('.css-1x0clfl').click()
    //cy.get('.css-1wpe7lw').contains("Email").click({forcec:true})
    // cy.get('button').contains('Apply').click()
    /* cy.get('button').then(($btn) => {
     if ($btn.hasClass('¥es')) {
         cy.get('.css-1f0ifky').contains('Yes').click()
         cy.get('.css-15bogdm').contains('Proceed').click()
     } else {
         cy.get('.css-1f0ifky').contains('Yes').click()
        // cy.get('.css-16v3zde').contains('No').click()
        // cy.get('.css-15lxsul').contains('Claim').click()
         }
    })
    cy.get('.css-15bogdm').contains('Proceed').click()
    cy.get('.css-12c5jlr').contains('Action Remark').type(action.remark).click()
    cy.get('.css-1q21b0g').contains('Yes, Proceed').click() */

    /*  cy.get('span').contains('logout').click()
      //SV
    cy.get('input[id="username"]').click().type(datalogin3.username)
    cy.get('input[id="Password"]').click().type(datalogin3.Password)
    cy.get('button').contains('Sign in').click()
    cy.wait(2000)
    cy.get('.fa-search').click()
    cy.get('.form-control').click()
    cy.get('.css-1x0clfl').click()
    cy.get('.css-1wpe7lw').contains("Email").click({force:true})
    cy.get('button').contains('Apply').click()
    cy.wait(2000)
      cy.get('checkbox').click()
       //CA
    /* cy.get('input[id="username"]').click().type(datalogin4.username)
    cy.get('input[id="Password"]').click().type(datalogin4.Password)
    cy.get('button').contains('Sign in').click()
    cy.wait(2000)
    */
  });
});


