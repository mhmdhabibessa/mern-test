// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const UserList = (props) => {

    const { removeFromDom } = props;
    const deletePerson = (userId) => {
        axios.delete('http://localhost:8000/api/users/' + userId)
            .then(res => {
                removeFromDom(userId)
            })
            .catch(err => console.error(err));
    }
    const [value, setValue] = React.useState(2);
    return (
        <div>
            {props.users.map((user, i) =>
                // <>
                <div
                    style={{ backgroundColor: "yellowgreen", width: "250px", margin: "auto" }}
                    key={i}>
                    <h2>
                        {user.name}, {user.age}
                    </h2>


                    <button onClick={(e) => { deletePerson(user._id) }}>
                        Delete
                    </button>
                    <Link to={"/user/" + user._id + "/edit"}>
                        Edit
                    </Link>
                    <Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                // </>
            )}
        </div>
    )
}

export default UserList;

