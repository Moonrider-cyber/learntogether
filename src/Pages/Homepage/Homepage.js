import Navbar from "../../Componets/layout/Navbar/Navbar";
import Banner from "../../Componets/Herosection/Hero-section";
import Courselist from "../../Componets/Courselist/Courselist";
import Teachwithus from "../../Componets/layout/Banner-Teachwithus/Teachwithus";
import Footer from "../../Componets/layout/Footer/footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Courselist />
      <Teachwithus />
      <Footer />
    </div>
  );
}

export default Homepage;
