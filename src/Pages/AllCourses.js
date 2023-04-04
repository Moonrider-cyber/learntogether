import Navbar from "../Componets/layout/Navbar/Navbar";
import Footer from "../Componets/layout/Footer/footer";
import { AllCoursesComp } from "../Componets/AllCourses/AllCoursesComp";
import { FillterCourses } from "../Componets/AllCourses/FillterCourses";


function AllCourses({fillter}) {

  return (
    <>
      <Navbar whitenav={false} />
      {fillter ? <FillterCourses/> :
      <AllCoursesComp/>
    }

      <Footer />
    </>
  );
}

export default AllCourses;
