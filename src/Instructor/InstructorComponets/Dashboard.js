import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux'; 
import { useSelector } from 'react-redux';

import "../App.css";
import { Home } from './Home';
import { Navbar } from './Layout/Navbar';
import { Courses } from './Courses';
import Sidebar from './Layout/Sidebar';
import { Payment } from './Payment';
import { getAllCoursesins, getInstructorPayment } from '../../redux/actions/instructor';

function Dashboard({home,coursespage,paymentpage}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoursesins());
    dispatch(getInstructorPayment());
  }, [dispatch])
  
  const { instructor } = useSelector((state) => state.Instructor);
  const { courses } = useSelector((state) => state.courses);

  return (
    <>
      <Sidebar/>
      <section className="home-section">
        
        <Navbar instructor={instructor} />

      { home ? <Home /> : null}
      { coursespage ? <Courses courses={courses} /> : null }
      { paymentpage ? <Payment  /> : null }

      </section>
    </>
  );
}

export default Dashboard;