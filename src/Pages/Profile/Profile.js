import React from "react";
import Profile_head from "../../Componets/ProfileCom/Profile_head";
import Navbar from "../../Componets/layout/Navbar/NavOnlyLogo";
import Footer from "../../Componets/layout/Footer/footer";

export const Profile = (user) => {
  return (
    <>
      <Navbar />

      <Profile_head user={user} />

      <Footer />
    </>
  );
};
