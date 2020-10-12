exports.register=function(data_registrasi)
{
    cy.wait(1000)
    cy.visit('https://www.cermati.com/gabung')

    cy.get('[name|="email"]').click().type(data_registrasi.email)
    cy.get('[name|="password"]').type(data_registrasi.password)
    cy.get('[name|="confirmPassword"]').type(data_registrasi.confirmpassword)
    cy.get('[name|="firstName"]').type(data_registrasi.firstName)
    cy.get('[name|="lastName"]').type(data_registrasi.lastName)
    cy.get('[name|="mobilePhone"]').type(data_registrasi.mobilePhone)
    cy.get('[name|="residenceCity"]').type(data_registrasi.residenceCity)

    cy.get("button").contains("Daftar Akun").click({force:true})
}