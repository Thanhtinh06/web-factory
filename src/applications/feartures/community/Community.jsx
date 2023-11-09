import React from "react";
import ListGames from "../../../shared/components/listGames/ListGames";
import { ReactComponent as IconTwitter } from "./../../../shared/assets/twitter.svg";
import { ReactComponent as IconFacebook } from "./../../../shared/assets/facebook.svg";
import { ReactComponent as IconInstagram } from "./../../../shared/assets/instagram.svg";
import { ReactComponent as IconSearch } from "./../../../shared/assets/search.svg";
import FormInput from "../../../shared/components/form/FormInput";
import Slider from "../../../shared/components/slider/Slider";

const Community = () => {
  return (
    <section className="community section" id="section-2">
      <div className="community-content">
        <h2 className="title text-blue">Game Community Hub</h2>
        <div className="game">
          <h3>Live Game Updates</h3>
          <ListGames />
        </div>
        <div className="unity">
          <p>All Post</p>
          <div className="unity-right">
            <IconTwitter />
            <IconInstagram />
            <IconFacebook />
            <form className="form-search">
              <FormInput
                placeholder={"Search"}
                className={"search"}
                type={"text"}
              />
              <button type="submit">
                <span>
                  <IconSearch />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default Community;
