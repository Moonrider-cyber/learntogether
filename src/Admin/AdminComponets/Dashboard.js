import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAllCoursesadmin, getAllPayments, getAllUsers } from '../../redux/actions/admin';
import { getAllCategory } from '../../redux/actions/courses';
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
import { Payment } from './Payment';

function Dashboard({home,userspage,coursespage,categorypage,adminspage,instructorpage,paymentpage}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllCoursesadmin());
    dispatch(getAllCategory());
    dispatch(getAllPayments());
  }, [dispatch])
  
  const { users,admin,payments,paymentsdata } = useSelector((state) => state.admin);
  const { courses,category } = useSelector((state) => state.courses);

console.log(paymentsdata)

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
      { paymentpage ? <Payment payments={payments} /> : null }

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