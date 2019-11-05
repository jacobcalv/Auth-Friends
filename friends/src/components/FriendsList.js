import React, { useState, useEffect } from "react"
import api from "./utils/api"
import styled from "styled-components"

function FriendsList(props) {
	const [user, setUser] = useState([])
    console.log(user)
	useEffect(() => {
		api().get("/api/friends")
			.then(result => {
                console.log(result.data)
				setUser(result.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])
    const Container=styled.div`
        display: flex;
        margin-left: 10%;
        margin-right: 10%;
        max-width: 80%;
        flex-wrap: wrap;
        flex-direction: row
    `
    const User = styled.div`
        border: 3px solid black
        width: 39%;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 3rem;
    `
    const UserData=styled.p`
        
    `

    const Header=styled.h1`
        margin-bottom: 3rem;
    `
	return (
		<>
			<Header>My Friends</Header>
            <Container>
            {user.map(users => 
                <User>
                    <UserData>Name: {users.name}</UserData>
                    <UserData>Age: {users.age}</UserData>
                    <UserData>Email: {users.email}</UserData>  
                </User>
            )}
            </Container>
		</>
	)
}

export default FriendsList