const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {   
        if(response.ok){
            return response.json()    
        }
                                                        // Способ обработки ошибки
        return response.json().then(error=>{
            const error = new Error('Ошибка')
            error.data = error
            throw error
        })
    })
}

const body = {
    name: 'Petr',
    age: 20
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
///    .catch(error => console.log(error))

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(error => console.log(error))