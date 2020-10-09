//const path = require('path')
describe("Login Akun", function () {
    it("Login ke Investor dashboard", function () {
      cy.on('uncaught:exception', function (err, runnable) {
        return false;
      });
      var datalogin = {
        "username": "moneyfriend-ardi@yopmail.com",
        "Password": "testing"
      };
      var otp = {
        "otp": "930823 "
      };
      cy.wait(1000);
      cy.visit('https://mvp.uangteman.com/lender/login');
      cy.get('input[id="username"]').click().type(datalogin.username);
      cy.get('input[id="Password"]').type(datalogin.Password);
      cy.get('button').contains("Sign in").click({
        force: true
      });
      cy.get(datalogin);
      cy.on('uncaught:exception', function (err, runnable) {
        return false;
      }); //AVAILABLE LOAN
  
      /*cy.get('.css-1jazjbw').click({force:true})
      cy.get('#root > div.css-1pf0tsu > div.css-gnm95i > table > tbody > tr:nth-child(3) > td:nth-child(1) > div > div > div.css-1axjumr').should("contain","P0ID200305000008").click({})
       //cy.get(':nth-child(1) > :nth-child(1) > .css-oflxif > .css-1o1z075 > .css-1axjumr').should("contain","P0ID200303000010").click({})
       cy.wait(2000)
       cy.get('.css-1o1z075 > .css-1dbr7i3 > .css-1jazjbw').click()
       cy.wait(2000)
       cy.get('button').contains("Ready To Fund (1)").click({force:true}) */
      //LOAN PROCESS
  
      cy.get('[href="/lender/loan-process"] > .css-1hp1qqi > .css-1xxe9l9').contains("Loan Process").click();
      cy.wait(3000);
      cy.get('#root > div.css-1pf0tsu > div.css-gnm95i > table > tbody > tr:nth-child(1) > td:nth-child(1) > div.css-oflxif > div > div').should("contain", "P0ID200108000010").click({});
      cy.get('document.querySelector("#root > div.css-1pf0tsu > div.css-gnm95i > table > tbody > tr:nth-child(1) > td:nth-child(1) > div.css-oflxif > div > label > span")').click({
        force: true
      });
      cy.get('.css-1jazjbw').click({
        multiple: true
      });
      cy.wait(2000);
      /* cy.get('.css-1r4s1ig').click().clear().type('2{enter}')
       cy.get('.css-1axjumr').contains("P0ID200303000011").click()
       cy.get('.css-1o1z075 > .css-1dbr7i3 > .css-1jazjbw').click()
       cy.wait(2000)
       cy.get('.css-1epi2e9').contains("Sign My Status (1)").click()
       cy.wait(20000)
       cy.get('.css-8jf62r').contains("Submit").click()
       cy.get('.css-1i6cgrz').contains("OK").click()
       cy.wait(2000)
       cy.get('button').contains('Fund (1)').click() */
  
      /*
      //FUNDING
      cy.get('.css-1hp1qqi').contains("Funding").click()
      cy.wait(2000)
      cy.get('b').contains("TIID200303000008").click({force:true})
      cy.wait(3000)
      /* cy.get('.css-60je32').contains('permata').click({force:true})
      cy.wait(2000)
      cy.get('button').contains('Funding').click() */
  
      /* cy.get('.css-1h893u0').contains("Upload Proof").click()
       cy.wait(2000)
       cy.get('.css-tj57q').contains('File').click()
              const fileName='oke.jpg';
       cy.fixture('oke.jpg').then(fileContent =>{
         cy.get('input[type=file]').upload({fileContent, fileName, mimeType: 'image/jpg'})
       }) 
       cy.wait(2000)
       cy.get('button').contains('Confirm').click() 
       cy.get('.css-1ad7bzz').click({force:true}) 
       cy.get('button').contains("Sign Agreement").click()
       cy.wait(20000)
       cy.get('.css-8jf62r').contains("Submit").click()
       cy.get('.css-1i6cgrz').contains("OK").click() */
      //Agreement
  
      /*cy.get('.css-1xxe9l9').contains("Agreement").click()
      cy.get('.css-1r4s1ig').click().clear().type('14{enter}') */
    });
  });