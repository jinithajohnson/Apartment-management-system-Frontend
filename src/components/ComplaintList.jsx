import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const ComplaintList = () => {
    const [data, changeData] = useState([]);


    const deleteComplaint = (_id) => {
      let input = { "_id": _id }
      axios.post("http://localhost:8088/deleteComplaint", input).then(
        (response) => {
          console.log(response.data)
          if (response.data.status == "success") {
            alert("complaint cleared")
            changeData(prevData => prevData.filter(Residents => Residents._id !== _id));
          }
          else {
            alert("error")
          }
  
        }
      ).catch().finally()
    }
  
  
    const fetchData = () => {
      axios.get("http://localhost:8088/complaintList").then(
        (response) => {
          changeData(response.data);
        }
      ).catch(
        (error) => {
          console.log(error.message);
        }
      );
    };
  
    // Fetch data on component mount
    useEffect(() => { fetchData(); }, []);

    
    return (
        <div>
            <div className="container">
                <NavbarAdmin />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ResidentName</th>
                                    <th scope="col">FlatId</th>
                                    <th scope="col">ComplaintType</th>
                                    <th scope="col">PriorityLevel</th>
                                    <th scope="col">DateFilled</th>
                                    <th scope="col">ContactNo</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td scope="row">{value.ResidentName}</td>
                                                <td>{value.FlatId}</td>
                                                <td>{value.ComplaintType}</td>
                                                <td>{value.PriorityLevel}</td>
                                                <td>{value.DateFilled}</td>
                                                <td>{value.ContactNo}</td>
                                                <td>
                                                    <td>
                                                        <button className="btn btn-primary" onClick={() => { deleteComplaint(value._id) }}>Complaint cleared</button>
                                                    </td>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintList;
