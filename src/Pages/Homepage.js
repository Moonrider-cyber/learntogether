import Navbar from "../Componets/layout/Navbar/Navbar";
import Banner from "../Componets/Herosection/Hero-section";
import Courselist from "../Componets/Courselist/Courselist";
import BannerTeachwithus from "../Componets/layout/Banner-Teachwithus/BannerTeachwithus";
import Footer from "../Componets/layout/Footer/footer";


function Homepage() {

  return (
    <div>
      <Navbar whitenav={true} />
      <Banner />
      <Courselist />
      <BannerTeachwithus onlytext={false} />
      <Footer />
    </div>
  );
}

export default Homepage;
