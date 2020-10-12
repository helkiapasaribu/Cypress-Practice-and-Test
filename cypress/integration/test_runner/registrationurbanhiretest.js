import{ registrasi } from '../function/urbanhiretest'

describe("Daftar", function(){
    it("Registrasi ke urbanhire", function(){
        var data_registrasi = {
            "fullname" : "Helkia Pasaribu",
            "email" : "helkiapasaribu@yahoo.com",
            "password" : "helkia27p"
        }
        registrasi(data_registrasi)
    })
})