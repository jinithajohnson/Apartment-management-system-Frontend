import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const ViewVisitors = () => {
  const [data, changeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const RejectVisitor = (_id) => {
    let input = { "_id": _id }
    axios.post("http://localhost:8088/rejectVisitor", input).then(
      (response) => {
        console.log(response.data)
        if (response.data.status === "success") {
          alert("Rejected")
          changeData(prevData => prevData.filter(visitor => visitor._id !== _id));
        } else {
          alert("Error");
        }
      }
    ).catch((error) => {
      console.error(error.message);
    }).finally();
  };

  const fetchData = () => {
    axios.get("http://localhost:8088/viewVisitors").then(
      (response) => {
        changeData(response.data);
      }
    ).catch(
      (error) => {
        console.log(error.message);
      }
    );
  };

  // Search logic
  const filteredUser = data.filter((visitor) => {
    return (
      (visitor.NameOfVisitor?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (String(visitor.FlatId)?.toLowerCase().includes(searchTerm.toLowerCase())) ||  // Convert FlatId to string
      (String(visitor.DateOfArrival)?.toLowerCase().includes(searchTerm.toLowerCase())) // Convert DateOfArrival to string
    );
  });

  // Fetch data on component mount
  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <div className="container">
        <NavbarAdmin />
        <div className="row">
          
          {/* Search Bar */}
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by name of visitor, flatId or date of visit"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
            />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NameOfVisitor</th>
                  <th scope="col">FlatId</th>
                  <th scope="col">DateOfArrival</th>
                  <th scope="col">TimeOfArrival</th>
                  <th scope="col">ReasonForVisit</th>
                  <th scope="col">VisitorContact</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredUser.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td scope="row">{value.NameOfVisitor}</td>
                        <td>{value.FlatId}</td>
                        <td>{value.DateOfArrival}</td>
                        <td>{value.TimeOfArrival}</td>
                        <td>{value.ReasonForVisit}</td>
                        <td>{value.VisitorContact}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => RejectVisitor(value._id)}>Reject</button>
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

export default ViewVisitors;
