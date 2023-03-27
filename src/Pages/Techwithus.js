import Navbar from "../Componets/layout/Navbar/Navbar";
import Footer from "../Componets/layout/Footer/footer";
import {Teachcomp} from "../Componets/Teachwithus/Teachcomp";
import BannerTeachwithus from "../Componets/layout/Banner-Teachwithus/BannerTeachwithus";


function Teachwithus() {

  return (
    <>
      <Navbar whitenav={false} />
      <Teachcomp/>
      <BannerTeachwithus onlytext={true}/>
      <Footer />
    </>
  );
}

export default Teachwithus;
