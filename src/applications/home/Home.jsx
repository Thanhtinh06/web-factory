import React from "react";
import Header from "../../shared/layouts/header/Header";
import Footer from "../../shared/layouts/footer/Footer";
import GroupButton from "../../shared/components/groupButton/GroupButton";
import Banner from "../feartures/banner/Banner";
import Contact from "../feartures/contact/Contact";
import Community from "../feartures/community/Community";
import Event from "../feartures/event/Event";
import ExclusiveContent from "../feartures/exclusive-content /ExclusiveContent";

const Home = () => {
  return (
    <main id="fullpage-container">
      <Header />
      <GroupButton />
      <Banner />
      <Contact />
      <Community />
      <Event />
      <ExclusiveContent />
      <Footer />
    </main>
  );
};

export default Home;
