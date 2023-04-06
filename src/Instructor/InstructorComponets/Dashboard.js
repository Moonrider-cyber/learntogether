import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux'; 
import { useSelector } from 'react-redux';

import "../App.css";
import { Home } from './Home';
import { Navbar } from './Layout/Navbar';
import { Users } from './Users';
import { Courses } from './Courses';
import Sidebar from './Layout/Sidebar';
import { Payment } from './Payment';
import { getAllCoursesins } from '../../redux/actions/instructor';

function Dashboard({home,userspage,coursespage,instructorpage,paymentpage}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoursesins());
  }, [dispatch])
  
  const { instructor } = useSelector((state) => state.Instructor);
  const { courses,category } = useSelector((state) => state.courses);



  return (
    <>
      <Sidebar/>
      <section className="home-section">
        
        <Navbar instructor={instructor} />

      { home ? <Home /> : null}
      {/* { userspage ? <Users users={users} /> : null } */}
      { coursespage ? <Courses courses={courses} /> : null }
      { paymentpage ? <Payment /> : null }

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