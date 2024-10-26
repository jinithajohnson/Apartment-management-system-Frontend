import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const [data, changeData] = useState({ "email": "", "password": "" });

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        // Check if email or password fields are empty
        if (!data.email || !data.password) {
            alert("Please fill in both email and password");
            return; // Stop further execution if fields are empty
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple regex for email validation

        if (!data.email || !emailRegex.test(data.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const minPasswordLength = 4;
        const maxPasswordLength = 10;


        if (data.password.length < minPasswordLength || data.password.length > maxPasswordLength) {
            alert(`Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long.`);
            return;
        }

        // Check if the email and password match admin credentials
        if (data.email === "admin@gmail.com" && data.password === "admin") {
            alert("Admin login successful");
            navigate("/residents");
            return; // Stop further execution after admin login
        }


        
        // If not admin, proceed with normal signin
        axios.post("http://localhost:8088/signin", data).then(
            (response) => {
                console.log(response.data);

                if (response.data.status === "incorrect password") {
                    alert("Incorrect password");
                } else if (response.data.status === "invalid emailid") {
                    alert("Invalid email ID");
                } else {
                    let token = response.data.token;
                    let userId = response.data.userId;

                    console.log(token);
                    console.log(userId);

                    sessionStorage.setItem("userId", userId);
                    sessionStorage.setItem("token", token);

                    alert("Login Successful");
                    navigate("/home");
                }
            }
        ).catch((error) => {
            console.log(error.message);
            alert(error.message);
        });
    };

    // Define styles for background and form design
    const backgroundStyle = {
        backgroundImage: 'url("https://watermark.lovepik.com/photo/20211122/large/lovepik-livable-apartment-picture_500745102.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    };

    const formStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    };

    return (
        <div>
            <div style={backgroundStyle}>
                <div className="container">
                    <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    
                        <div className="row g-3" style={formStyle}>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1 className="display-4 text"><center>SIGN IN</center></h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SignIn</button>
                            </div>
                            <div>
                                <Link to="/" className="btn btn-primary">Click here for new user</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SignIn;
