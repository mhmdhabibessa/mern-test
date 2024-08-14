import React, { useState } from 'react'
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

export default (props) => {

    const { initialName, initialAge, onSubmitProp } = props
    const [name, setName] = useState(initialName);
    const [age, setAge] = useState(initialAge);
    // const {addUser} = props
    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, age });
        setAge("")
        setName("")
    }
    const recaptchaRef = React.createRef();
    function onChange(value) {
        console.log("Captcha value:", value);
      }

    return (
        <form onSubmit={onSubmitHandler}>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="Your client site key"
                onChange={onChange}
            />
            <p>
                <label>Name</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <p>
                <label>Age</label><br />
                <input type="text" onChange={(e) => setAge(e.target.value)} value={age} />
            </p>
            <input type="submit" />
        </form>
    )
}

