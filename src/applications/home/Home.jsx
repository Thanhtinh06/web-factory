import React from "react";
import Header from "../../shared/layouts/header/Header";
import GroupButton from "../../shared/components/groupButton/GroupButton";
import Banner from "../feartures/banner/Banner";
import Contact from "../feartures/contact/Contact";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <GroupButton />
      <Banner />
      <Contact />
    </div>
  );
};

export default Home;
