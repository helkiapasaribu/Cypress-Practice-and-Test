import {login} from '../function/sociolla'

describe("Login", function()
{
    it("Login to Branda Sociolla", function()
    {
        var data_login = {
            "email" : "helkiapasaribu@yahoo.com",
            "password" : "helkia27p"
        }
        login(data_login)
    })
})