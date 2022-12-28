import axios from "axios"
import {jest} from "@jest/globals"; jest
import expect from "expect"; jest;

test('GET request', async () => {
    const config =  {
        method: 'get',
        url: 'https://google.com'
    }
    const resp = await axios(config)
    expect(resp.status).toEqual(200)
    //console.log("(!) TEST 001 : RESP TYPE : " + typeof(resp))
})

/* EXAMPLE
test('POST request', async () => {
    const config =  {
        method: 'post',
        url: '',
        data: {
            "title": "New PC"
        },
        headers: {}
    }
    const resp = await axios(config)
        console.log(typeof(resp.data))
        expect(resp.status).toEqual(expected: 201)
        expect(resp.data).toEqual(expected: {tittle: "New PC"}
        )
})
*/

/*
//ошибка в авторизации пользователя
test('GET request', async () => {
    const config =  {
        method: 'get',
        url: 'неправильный какой-нибудь',
        try: {
            const resp = await axios(config)
            expect(resp.status).toEqual(expected: 403)
        }
        catch (e) {
            console.log(e)
            expect(e.response.status).toEqual(expected: 403)
        }
       // headers: {}
   // }
    //const resp = await axios(config)
     //   console.log(typeof(resp.data))
    //    expect(resp.status).toEqual(expected: 201)
    //    expect(resp.data).toEqual(expected: {tittle: "New PC"}
    //    )
})
*/


/*
test('POST AUTH', async () => {
    const config =  {
        method: 'post'
        url: ''
        data: {
            "username": "ILDAR"
            "password": "123"
        }
        headers { }
    }
    const resp = await axios(config)
    console.log(resp.data)
    expect(resp.status).toEqual(expected: 200)

})


test('POST AUTH', async () => {
    const config =  {
        method: 'post'
        url: ''
        data: {
            "username": "ILDAR"
            "password": "123"
        }
        headers { }
    }
    const resp = await axios(config)
    const resp_prod = await axios({
        method: 'get'
        url: ''
        headers { 
            'Authorization': `Bearer $(resp.data.token)`
        }
    })
    expect(resp_prod.status).toEqual(expected: 200)
})
*/








//ответ от сайта
test('GET request', async () => {
    const config = {
        method: 'get',
        url: 'https://bookstore.demoqa.com/swagger/#/BookStore/BookStoreV1Book'
    }
    const resp = await axios(config)
    
    //console.log("(!!!!!!!!!!) RESP TYPE : " + typeof(resp.data))
    //console.log("(!!!!!!!!!!) RESP : " + resp.data.title)
    //expect(resp.data.title).toEqual('string')
    expect(resp.status).toEqual(200)
})

//автризация на сайте  c правильными паролем и логином
test('POST AUTH', async () => {
    const config =  {
        method: 'post',
        url: 'https://bookstore.demoqa.com/swagger/#/Account/AccountV1Authorized',
        data: {
            "username": "ildar.saberov",
            "password": "IldSab2801"
        }
        //headers: {}
    }
    const resp = await axios(config)
    //console.log(resp.data)
    expect(resp.status).toEqual(200)
})

//авторизация с неправильным паролем
test('POST AUTH', async () => {
    const config =  {
        method: 'POST',
        url: 'https://bookstore.demoqa.com/swagger/Account/v1/Authorized',
        data: {
            //"username": "string",
            //"password": "string",
            "WTF": 123
        }
        //headers { }
    }
    const resp = await axios(config)
    console.log(resp.headers)
    expect(resp.status).toEqual(400)
})

/*
//генерация успешно с токеном
test('POST AUTH', async () => {
    const config =  {
        method: 'post'
        url: 'https://bookstore.demoqa.com/swagger/'
        data: {
            "username": "string"
            "password": "string"
        }
        headers { }
    }
    const resp = await axios(config)
    const resp_prod = await axios({
        method: 'get'
        url: ''
        headers { 
            'Authorization': `Bearer $(resp.data.token)`
        }
    })
    expect(resp_prod.status).toEqual(expected: 200)
})

//генерация успешно с токеном с ошибкой
test('POST AUTH', async () => {
    const config =  {
        method: 'post'
        url: 'https://bookstore.demoqa.com/swagger/'
        data: {
            "username": "string"
            "password": "string"
        }
        headers { }
    }
    const resp = await axios(config)
    const resp_prod = await axios({
        method: 'get'
        url: ''
        headers { 
            'Authorization': `Bearer $(resp.data.token)`
        }
    })
    expect(resp_prod.status).toEqual(expected: 403)
})
*/