(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

describe("Login Akun", function()
{	 
    it("Login ke Investor dashboard", function()
    {

        cy.wait(1000)
        cy.visit('https://staging.doku.com/VASimulator/AlfaAction_payment.doku?customer=8888840208123078546300000043&trxAmount=16000&trxId=270289')
        cy.wait(2000)
        cy.scrollIntoView()
        cy.get('.default-textbtn').contains("FINISH").click({force:true})
    })
})
},{}]},{},[1]);
