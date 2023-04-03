import Navbar from "../Componets/layout/Navbar/Navbar";
import Footer from "../Componets/layout/Footer/footer";
import { AllCoursesComp } from "../Componets/AllCourses/AllCoursesComp";


function AllCourses() {

  return (
    <>
      <Navbar whitenav={false} />
        <AllCoursesComp/>
 
      <Footer />
    </>
  );
}

export default AllCourses;
