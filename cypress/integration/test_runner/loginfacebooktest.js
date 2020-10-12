import{ login } from '../function/loginfacebook'

describe("Login", function(){
    it("Login to branda", function(){

        var data_login = {
            "email" : "helkiapasaribu@yahoo.co.id",
            "password" : "s2australia"
        }

        var search={
            "search_name" : "oktavi silitonga"
        }
        login(data_login, search)

    })
    
})