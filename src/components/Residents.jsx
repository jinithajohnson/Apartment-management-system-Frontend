import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const Residents = () => {
    const [data, changeData] = useState([]);


    const deleteNonResident = (_id) => {
      let input = { "_id": _id }
      axios.post("http://localhost:8088/deleteNonResident", input).then(
        (response) => {
          console.log(response.data)
          if (response.data.status == "success") {
            alert("successfully deleted")
            changeData(prevData => prevData.filter(Residents => Residents._id !== _id));
  

          }
          else {
            alert("error")
          }
  
        }
      ).catch().finally()
    }
  
  
    const fetchData = () => {
      axios.get("http://localhost:8088/residents").then(
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
                                    <th scope="col">Name</th>
                                    <th scope="col">FlatId</th>
                                    <th scope="col">ContactNo</th>
                                    <th scope="col">FamilyMembers</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Occupation</th>
                                    <th scope="col">Indate</th>
                                    <th scope="col">email</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td scope="row">{value.Name}</td>
                                                <td>{value.FlatId}</td>
                                                <td>{value.ContactNo}</td>
                                                <td>{value.FamilyMembers}</td>
                                                <td>{value.Role}</td>
                                                <td>{value.Occupation}</td>
                                                <td>{value.Indate}</td>
                                                <td>{value.email}</td>

                                                <td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => { deleteNonResident(value._id) }}>Delete</button>
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

export default Residents;
