import React, { useState } from "react"
import api from './utils/api'

function AddFriend(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
    }
    
	const handleSubmit = (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
		api()
			.post("/api/friends", data)
			.then(result => {
				console.log(result.data)
				props.history.push("/friends")
			})
			.catch(err => {
				setError(err.response.data.message)
			})
    }
    
    return (
		<form onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}

			<input type='text' name="name" placeholder="Name" value={data.name} onChange={handleChange} />
            <input type='text' name="age" placeholder="age" value={data.age} onChange={handleChange} />
			<input type="email" name="email" placeholder="email" value={data.email} onChange={handleChange} />

			<button type="submit">Add Friend</button>
		</form>
	)
}

export default AddFriend