describe("Testing Whatsapp", function()
{
    it("navigates", () =>
    {   
        cy.visit('https://www.instagram.com/')
    })

    it("navigates to origin web", () =>
    {
        cy.get('.KPnG0').contains("Log in with Facebook").click()
        
        cy.on('uncaught:exception', function (err, runnable) {
            return false;
          });
          var loginfield={
            "username" : "helkiapasaribu@yahoo.com",
            "password" : "helkia27p",
            "password2" : "s2australia"
          }
       //   cy.wait(1000)
         /* cy.request({
          method:'GET',
          url:'https://github.com/appium/appium-for-mac',
          failOnStatusCode: false
          })*/

         


          
          //cy.request({"chromeWebSecurity" : false})

          cy.get('input[name="username"]').click().type(loginfield.username);
          cy.get('input[name="password"]').click().type(loginfield.password);
          cy.get('button').contains("Show").click()
          cy.get('input[name="password"]').clear().click().type(loginfield.password2)
          cy.get('button').contains("Log In").click()








    })
}
)