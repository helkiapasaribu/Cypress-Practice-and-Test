
describe("Login Akun", function()
{	 
    it("Login ke Uang Teman", function()
    {
        cy.on('uncaught:exception', (err, runnable)=>
        {
            return false
        })

        var datalogin=
        {
             "email" : "helkiapasaribu@yahoo.com",
             "password" : "helkia"
        }

        cy.wait(1000)
        cy.visit('https://uangteman.com/login')
    
        cy.get('[type|="email"]').click().type(datalogin.email)
        cy.get('[type|="password"]').type(datalogin.password)
    
        cy.get("button").contains("Login").click({force:true})
    
        cy.get(datalogin)
   })
})
