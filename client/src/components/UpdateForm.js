import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserForm from './UserForm';
import { useNavigate, Navigate, useParams } from 'react-router-dom';

export default (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id)
            .then(res => {
                setUser(res.data.user);
                console.log(user);
                setLoaded(true);
            })
            .catch(err => {
                console.error('Error fetching user:', err);
            });
    }, [])
    const updateUser = user => {
        axios.put('http://localhost:8000/api/users/' + id, user)
            .then(res => {
                console.log(res)
                navigate("/users");
            });
    }
    return (
        <>
            {
                loaded && (

                    <UserForm
                        onSubmitProp={updateUser}
                        initialName={user.name}
                        initialAge={user.age}
                    />
                )
            }
        </>
    )


}