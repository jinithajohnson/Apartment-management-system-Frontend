import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavbarAdmin = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear any user authentication data (localStorage, cookies, etc.)
        localStorage.removeItem('token'); // Assuming you store a token for authentication
        localStorage.removeItem('user');  // Remove user data if any

        // Redirect to login page after logging out
        navigate('/signin'); // Replaces history.push('/login')
    };

    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning" href="#">admin management</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-warning" href="/residents">Residents</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-warning" href="/viewVisitors">View Vistors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-warning" href="/complaintList">Complaints</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-warning" href="/create">Announcement</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-warning" href="/viewAnnouncement">View Announcement</a>
                            </li>


                        </ul>
                        {/* Logout Button on the Right */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-primary text-warning nav-link" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default NavbarAdmin