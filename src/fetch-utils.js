let URL = 'https://lab-12-todo.herokuapp.com'

export async function createToken(login, type){
    const data = `${URL}/auth/${type}`
    const loginData = await fetch(data, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(login)
    })
    const result = await loginData.json();
    localStorage.setItem('TOKEN', result.token)
    return result.token
}