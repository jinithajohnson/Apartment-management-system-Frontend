import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        "Name": "",
        "FlatId": "",
        "ContactNo": "",
        "FamilyMembers": "",
        "Role": "",
        "Occupation": "",
        "Indate": "",
        "email": "",
        "password": "",
        "confirmPassword": ""
    });


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

const readValue = () => {
    let formData = {
        "Name": data.Name,
        "FlatId": data.FlatId,
        "ContactNo": data.ContactNo,
        "FamilyMembers": data.FamilyMembers,
        "Role": data.Role,
        "Occupation": data.Occupation,
        "Indate": data.Indate,
        "email": data.email,
        "password": data.password,
        "confirmPassword": data.confirmPassword
    };

    
    const minPasswordLength = 5;
    const maxPasswordLength = 10;
    const phoneLength = 10;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple regex for email validation
    const nameRegex = /^[a-zA-Z\s]+$/;  // Name validation (only letters and spaces)

    
    if (!data.Name || !nameRegex.test(data.Name)) {
        alert("Name must only contain letters and cannot be empty.");
        return;
    }


    if (!data.FlatId) {
        alert("Flat ID cannot be empty.");
        return;
    }

   
    if (!data.ContactNo || data.ContactNo.length !== phoneLength) {
        alert(`Contact number must be exactly ${phoneLength} digits.`);
        return;
    }

    
    if (!data.FamilyMembers || isNaN(data.FamilyMembers) || data.FamilyMembers <= 0) {
        alert("Family Members must be a positive number.");
        return;
    }

  
    if (!data.Role) {
        alert("Please select a role.");
        return;
    }

   
    if (!data.Occupation) {
        alert("Occupation cannot be empty.");
        return;
    }

  
    if (!data.Indate) {
        alert("Indate cannot be empty.");
        return;
    }


    if (!data.email || !emailRegex.test(data.email)) {
        alert("Please enter a valid email address.");
        return;
    }

   
    if (data.password.length < minPasswordLength || data.password.length > maxPasswordLength) {
        alert(`Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long.`);
        return;
    }

  
    if (data.password !== data.confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    axios.post("http://localhost:8088/signup", formData)
        .then(response => {
            console.log(response);
            if (response.data.status === "success") {
                alert("Signup successful");
                navigate("/signin");
            } else {
                alert("Error during signup");
            }
        })
        .catch(error => console.error(error));
};

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
    <div style={backgroundStyle}>
        <div className="container">
            <div className="row">
                <div className="col col-12">
                    <div className="row g-3" style={formStyle}>
                        <div className="col col-12">
                            <h1 className="display-4 text"><center>SIGN UP</center></h1>
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="name" className="form-label">Username</label>
                            <input type="text" className="form-control" name='Name' value={data.Name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="flatId" className="form-label">Flat ID</label>
                            <input type="text" className="form-control" name='FlatId' value={data.FlatId} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="contactNo" className="form-label">Contact No</label>
                            <input type="text" className="form-control" name='ContactNo' value={data.ContactNo} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="familyMembers" className="form-label">Family Members</label>
                            <input type="text" className="form-control" name='FamilyMembers' value={data.FamilyMembers} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select name="Role" className="form-control" value={data.Role} onChange={inputHandler}>
                                <option value="">Select</option>
                                <option value="Resident">Resident</option>
                                <option value="Tenant">Tenant</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="occupation" className="form-label">Occupation</label>
                            <input type="text" className="form-control" name='Occupation' value={data.Occupation} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="indate" className="form-label">Indate</label>
                            <input type="date" className="form-control" name='Indate' value={data.Indate} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name='confirmPassword' value={data.confirmPassword} onChange={inputHandler} />
                        </div>
                        <div className="col col-12">
                            <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                        </div>
                        <div className="col col-12">
                            <Link to="/signin" className="btn btn-primary">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};
export default Signup;

