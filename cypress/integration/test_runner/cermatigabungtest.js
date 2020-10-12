import{register} from '../function/RegisterCermati'

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
       register(data_registrasi)
   }
   
   
   ) 
}
)