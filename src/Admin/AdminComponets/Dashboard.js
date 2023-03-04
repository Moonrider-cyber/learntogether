import * as React from 'react';
import { Routes,Route } from 'react-router-dom';

import "../App.css";
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Users } from './Users';
import Sidebar from './Sidebar';

function Dashboard({home,users}) {

  return (
    <>
      <Sidebar/>
      <section className="home-section">
        
        <Navbar/>


      { home ? <Home /> : null}
      { users ? <Users /> : null }

      {/* <Home /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users /> } />
        </Routes> */}
      </section>
    </>
  );
}

export default Dashboard;