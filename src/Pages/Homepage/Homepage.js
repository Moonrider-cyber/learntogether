import Navbar from "../../Componets/Navbar/Navbar";
import Banner from "../../Componets/Herosection/Hero-section";
import Courselist from "../../Componets/Courselist/Courselist";
import Teachwithus from "../../Componets/Teachwithus/Teachwithus";
import Footer from "../../Componets/Footer/footer";

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
