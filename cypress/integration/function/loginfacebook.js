exports.login=function(data_login,search){
    //visit halaman login facebook
    cy.visit('https://www.facebook.com/login/')

    //get id email field facebook
    cy.get('#email').type(data_login.email)

    //get id password field facebook
    cy.get('#pass').type(data_login.password)

    //klik button masuk
    cy.get('#loginbutton').contains("Masuk").click({force:true})

    cy.get('[data-testid=search_input]').click().type(search.search_name)
    cy.wait(2000)
    cy.get('[data-testid="facebar_search_button]').click()
}