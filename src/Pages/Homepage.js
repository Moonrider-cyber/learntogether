import Navbar from "../Componets/layout/Navbar/Navbar";
import Banner from "../Componets/Herosection/Hero-section";
import Courselist from "../Componets/Courselist/Courselist";
import BannerTeachwithus from "../Componets/layout/Banner-Teachwithus/BannerTeachwithus";
import Footer from "../Componets/layout/Footer/footer";


function Homepage(isAuthenticated,user) {

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <Banner />
      <Courselist />
      <BannerTeachwithus onlytext={false} />
      <Footer />
    </div>
  );
}

export default Homepage;
