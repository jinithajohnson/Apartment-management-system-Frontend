import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Complaints = () => {

    const [data, setData] = useState(
        {
            "ResidentName": "",
            "FlatId": "",
            "ComplaintType": "",
            "PriorityLevel": "",
            "DateFilled": "",
            "ContactNo": ""
        }
    )

    const inputHandler = (event) => {
        setData({
            ...data, [event.target.name]:
                event.target.value
        })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8088/complaints", data).then(
            (response) => {
                console.log(response)
                if (response.data.status == "success") {
                    alert("success")

                }
                else {
                    alert("Error")
                }
            }
        ).catch()

    }

    // Define styles for background and form design
    const backgroundStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/28999982/pexels-photo-28999982/free-photo-of-luxurious-hotel-lobby-with-orchid-display.jpeg")',
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
            <Navbar/>
            <div style={backgroundStyle}>
            <div className="container">
                <div className="row g-3" >
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3" style={formStyle}>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1 className="display-4 text"><center>Complaints Form</center></h1>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="text" className="form-label">Resident Name</label>
                                <input type="text" className="form-control" name='ResidentName' value={data.ResidentName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="Password" className="form-label">Flat Id</label>
                                <input type="text" className="form-control" name='FlatId' value={data.FlatId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="Password" className="form-label">Complaint Type</label>
                                <input type="text" className="form-control" name='ComplaintType' value={data.ComplaintType} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="PriorityLevel" className="form-label">Priority level</label>
                                <select name="PriorityLevel" className="form-control" value={data.PriorityLevel} onChange={inputHandler}>
                                    <option className="option">Select</option>
                                    <option className="option">High</option>
                                    <option className="option">Medium</option>
                                    <option className="option">Low</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="text" className="form-label">Date filled</label>
                                <input type="date" className="form-control" name='DateFilled' value={data.DateFilled} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="text" className="form-label">Contact No</label>
                                <input type="text" className="form-control" name='ContactNo' value={data.ContactNo} onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readValue}>Submit</button>
                                </div>


                    </div>

                </div>
            </div>
        </div>
        </div>

    )
}
export default Complaints;