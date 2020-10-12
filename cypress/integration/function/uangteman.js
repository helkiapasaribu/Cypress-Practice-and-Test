exports.register=function(data_registrasi)
{
    cy.wait(1000)
    cy.visit('https://uangteman.com/login')

    cy.get('[name|="cd_email_address"]').click().type(data_registrasi.cd_email_address)
    cy.get('[name|="cd_passwd"]').type(data_registrasi.cd_passwd)

    cy.get("button").contains("Login").click({force:true})
}