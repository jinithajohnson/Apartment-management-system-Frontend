import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Visitor from './components/Visitor';
import Complaints from './components/Complaints';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import ViewVisitors from './components/ViewVisitors';
import Residents from './components/Residents';
import ComplaintList from './components/ComplaintList';
import AnnouncementForm from './components/Announcement';
import AnnouncementList from './components/AnnouncementList';
import Announcement from './components/Announcement';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/visitor' element={<Visitor/>} />
      <Route path='/complaints' element={<Complaints/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/viewVisitors' element={<ViewVisitors/>} />
      <Route path='/residents' element={<Residents/>} />
      <Route path='/complaintList' element={<ComplaintList/>} />
      <Route path='/create' element={<Announcement/>} />
      <Route path='/viewAnnouncement' element={<AnnouncementList/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
