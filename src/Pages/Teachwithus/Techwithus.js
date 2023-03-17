import Navbar from "../../Componets/layout/Navbar/Navbar";
import Footer from "../../Componets/layout/Footer/footer";
import {Teachcomp} from "../../Componets/Teachwithus/Teachcomp";

function Teachwithus(isAuthenticated,user) {

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} user={user} whitenav={false} />
      <Teachcomp/>
      <Footer />
    </>
  );
}

export default Teachwithus;
