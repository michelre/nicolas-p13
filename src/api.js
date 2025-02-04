const signin = async (email, password) => {
    const res = await fetch('http://localhost:3001/api/v1/user/login', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }
    )
    if(res.status === 200)
        return res.json()
    if(res.status === 400){
        const body = await res.json()
        throw new Error(body.message)
    }
}

const getUser = async (token) => {
    const res = await fetch('http://localhost:3001/api/v1/user/profile', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }
    )
    return res.json()
}

const updateUser = async (data, token) => {
    const res = await fetch('http://localhost:3001/api/v1/user/profile', 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        }
    )
    return res.json()
} 

export {
    signin,
    getUser,
    updateUser
}