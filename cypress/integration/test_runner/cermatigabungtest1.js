
describe("Daftar Akun", function()
{
   it("Registrasi ke Cermati", function()
   {
	   var data_registrasi=
       {
            "email" : "helkiapasaribu27@gmail.com",
            "password" : "*********",
            "confirmpassword" : "*********",
            "firstName" : "Helkia",
            "lastName" : "Pasaribu",
            "mobilePhone" : "089652091915",
            "residenceCity" : "KOTA JAKARTA SELATAN"

       }
	   
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
	
       
     cy.get(data_registrasi)
   }
   
   
   ) 
}
)