import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAllUsers } from '../../redux/actions/admin';
import { getAllCourses } from '../../redux/actions/courses';
import { useSelector } from 'react-redux';

import "../App.css";
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Users } from './Users';
import { Courses } from './Courses';
import { Catagory } from './Catagory';
import Sidebar from './Sidebar';
import { Admins } from './Admins';
import { Instructor } from './Instructor';

function Dashboard({home,userspage,coursespage,catagorypage,adminspage,instructorpage}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllCourses());
  }, [dispatch])
  
  const { users } = useSelector((state) => state.admin);
  const { courses } = useSelector((state) => state.courses);



  return (
    <>
      <Sidebar/>
      <section className="home-section">
        
        <Navbar/>

      { home ? <Home /> : null}
      { userspage ? <Users users={users} /> : null }
      { coursespage ? <Courses courses={courses} /> : null }
      { catagorypage ? <Catagory /> : null }
      { adminspage ? <Admins /> : null }
      { instructorpage ? <Instructor /> : null }

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