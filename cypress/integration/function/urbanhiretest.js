exports.registrasi=function(data_registrasi){
    cy.wait(10000)
    cy.visit('https://www.urbanhire.com/signup')

    cy.get('[name|="fullname"]').click().type(data_registrasi.fullname)
    cy.get('[name|="email"]').type(data_registrasi.email)
    cy.get('[type|="password"]').type(data_registrasi.password)

    cy.get("button").contains("Daftar").click({force:true})
}   