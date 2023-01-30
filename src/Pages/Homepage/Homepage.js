import Navbar from "../../Componets/Navbar/Navbar";
import Banner from "../../Componets/Herosection/Hero-section";
import Courselist from "../../Componets/Courselist/Courselist";
import Teachwithus from "../../Componets/Teachwithus/Teachwithus";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Courselist />
      <Teachwithus />
    </div>
  );
}

export default Homepage;
