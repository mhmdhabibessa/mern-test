import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
export default () => {
    const [message, setMessage] = useState("Loading...")
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState([]);
    // const [faker,setFaker] = useState()

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => {
                // console.log(res.data.message);
                setMessage(res.data.message)
            })
    }, []);


    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                console.log("Hello");
                setUsers(res.data.users);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);


    const removeFromDom = userId => {
        setUsers(users.filter(user => user._id != userId));
    }
    const fakerApi = () => {

    }
    const createUser = user => {
        axios.post('http://localhost:8000/api/users', user)
            .then(res => {
                setUsers([...users, res.data.user])

            })
            .catch(err => {
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }




    return (
        <div>
            <h2>Message from the backend: {message}</h2>
            {errors && errors.map((err, index) => <p style={{ color:"red"}} key={index}>{err}</p>)}

            <UserForm
                onSubmitProp={createUser}
                initialName=""
                initialAge={0}
            />
            {/* <UserList /> */}
            {/* {JSON.stringify(users)} */}
            {loaded && <UserList users={users} removeFromDom={removeFromDom} />}

        </div>
    )
}

