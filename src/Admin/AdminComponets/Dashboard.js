import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAllUsers } from '../../redux/actions/admin';
import { getAllCategory, getAllCourses } from '../../redux/actions/courses';
import { useSelector } from 'react-redux';

import "../App.css";
import { Home } from './Home';
import { Navbar } from './Layout/Navbar';
import { Users } from './Users';
import { Courses } from './Courses';
import { Category } from './Category';
import Sidebar from './Layout/Sidebar';
import { Admins } from './Admins';
import { Instructor } from './Instructor';

function Dashboard({home,userspage,coursespage,categorypage,adminspage,instructorpage}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllCourses());
    dispatch(getAllCategory());
  }, [dispatch])
  
  const { users,admin } = useSelector((state) => state.admin);
  const { courses,category } = useSelector((state) => state.courses);



  return (
    <>
      <Sidebar/>
      <section className="home-section">
        
        <Navbar admin={admin} />

      { home ? <Home /> : null}
      { userspage ? <Users users={users} /> : null }
      { coursespage ? <Courses courses={courses} /> : null }
      { categorypage ? <Category category={category} /> : null }
      { adminspage ? <Admins users={users} /> : null }
      { instructorpage ? <Instructor users={users} /> : null }

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