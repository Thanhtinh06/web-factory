import React from "react";
import Header from "../../shared/layouts/header/Header";
import GroupButton from "../../shared/components/groupButton/GroupButton";
import Banner from "../feartures/banner/Banner";
import Contact from "../feartures/contact/Contact";
import Community from "../feartures/community/Community";
import Event from "../feartures/event/Event";

const Home = () => {
  return (
    <main>
      <Header />
      <GroupButton />
      <Banner />
      <Contact />
      <Community />
      <Event />
    </main>
  );
};

export default Home;
