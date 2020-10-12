exports.registrasi=function(data_registrasi){
    cy.visit('https://www.instagram.com')

    cy.get('#fullname').type('data_registrasi.fullname')
    cy.get('[name|=email]').type(data_registrasi.email)
    cy.get('[name|=password]').type(data_registrasi.password)

    cy.get(name="submit").contains("Daftar").click({force:true})
}    