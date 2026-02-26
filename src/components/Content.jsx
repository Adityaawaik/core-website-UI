import React from "react";
import searcIcon from "../../images/searchIcon.svg";
import downloadIcon from "../../images/downloadIcon.svg";
import filterIcon from "../../images/filterIcon.svg";
import addIcon from "../../images/addIcon.svg";
import menuIcon from "../../images/menuIcon.svg";
import twoBarIcon from "../../images/twoBarIcon.svg";
import connectionIcon from "../../images/connectionIcon.svg";
import hero1 from "../../images/hero1.svg";
import hero2 from "../../images/hero2.svg";
import hero3 from "../../images/hero3.svg";

import herione1 from "../../images/herione1.svg";
import herione2 from "../../images/herione2.svg";
import herione3 from "../../images/herione3.svg";
import herione4 from "../../images/herione4.svg";
import herione5 from "../../images/herione5.svg";

import ProfileCard from "./ProfileCard";

import searchBadge from "../../images/searchBadge.svg";
import connectionBadge from "../../images/connectionBadge.svg";
import XObadge from "../../images/XObadge.svg";
import teamworkBadge from "../../images/teamworkBadge.svg";
import flightBadge from "../../images/flightBadge.svg";
import micBadge from "../../images/micBadge.svg";
import leaderBadge from "../../images/leaderBadge.svg";
import brightBadge from "../../images/brightBadge.svg";

import arrowIcon from "../../images/arrowIcon.svg";

const Content = () => {
  return (
    <main>
      <div className="search-more-features flex items-center justify-between max-[700px]:flex-col  ml-4 mr-4">
        <div className="search-area flex items-center bg-white mt-4 p-2 w-84 gap-2 h-12 rounded-3xl max-[550px]:w-full">
          <img src={searcIcon} alt="searchIcon" />
          <input
            type="text"
            name="userTypedContent"
            id=""
            placeholder="Search by employee name or number"
            className="max-[550px]:w-full"
          />
        </div>

        <div className="more-features mt-4 flex items-center gap-2">
          <img
            src={downloadIcon}
            alt="downloadIcon"
            className="bg-white rounded-[50%] p-2 cursor-pointer"
          />
          <img
            src={filterIcon}
            alt="filterIcon"
            className="bg-white rounded-[50%] p-2 cursor-pointer"
          />
          <img
            src={addIcon}
            alt="addIcon"
            className="bg-black rounded-[50%] p-2 cursor-pointer"
          />
          <div className="additonal-features flex items-center border rounded-lg p-1 gap-2">
            <img
              src={menuIcon}
              alt="menuIcon"
              className="bg-black rounded-[50%] p-2 cursor-pointer"
            />
            <img
              src={twoBarIcon}
              alt="twoBarIcon"
              className="bg-white rounded-[50%] p-2 cursor-pointer"
            />
            <img
              src={connectionIcon}
              alt="connectionIcon"
              className="bg-white rounded-[50%] p-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="all-profiles flex flex-wrap justify-center gap-16 mb-8">
        <ProfileCard
          image={hero1}
          imageName={hero1}
          badge={searchBadge}
          personName="Ethane Lee"
          jobSpeciality="IT Specialist"
        />
        <ProfileCard
          image={herione1}
          imageName={herione1}
          badge={connectionBadge}
          personName="Emily Baker "
          jobSpeciality="Marketing Manager"
        />
        <ProfileCard
          image={hero2}
          imageName={hero2}
          badge={XObadge}
          personName="Micheal Shaun"
          jobSpeciality="Sales Director"
        />

        <ProfileCard
          image={herione2}
          imageName={herione2}
          badge={teamworkBadge}
          personName="Liam Carter"
          jobSpeciality="Product Designer"
        />

        <ProfileCard
          image={herione3}
          imageName={herione3}
          badge={flightBadge}
          personName="Grace Kim"
          jobSpeciality="Customer Lead"
        />

        <ProfileCard
          image={hero3}
          imageName={hero3}
          badge={micBadge}
          personName="Noah Willams"
          jobSpeciality="Finance Head"
        />

        <ProfileCard
          image={herione4}
          imageName={herione4}
          badge={leaderBadge}
          personName="Isabella Rossi"
          jobSpeciality="Operation Manager"
        />
        <ProfileCard
          image={herione5}
          imageName={herione5}
          badge={brightBadge}
          personName="Ava Thomson"
          jobSpeciality="HR Executive"
        />

        <ProfileCard
          image={hero2}
          imageName={hero2}
          badge={XObadge}
          personName="Micheal Shaun"
          jobSpeciality="Sales Director"
        />
        <ProfileCard
          image={herione2}
          imageName={herione2}
          badge={teamworkBadge}
          personName="Liam Carter"
          jobSpeciality="Product Designer"
        />
        <ProfileCard
          image={herione3}
          imageName={herione3}
          badge={flightBadge}
          personName="Grace Kim"
          jobSpeciality="Customer Lead"
        />
        <ProfileCard
          image={hero3}
          imageName={hero3}
          badge={micBadge}
          personName="Noah Willams"
          jobSpeciality="Finance Head"
        />
      </div>

      <div className="rows-per-page flex gap-4 items-center mb-4">
        <p>Rows Per Page : </p>
        <p className="border p-2 rounded-2xl gap-2 flex ">
          100
          <img src={arrowIcon} alt="arrowIcon" />
        </p>

        <p className="flex gap-2">
          1-100 of 500
          <img src={arrowIcon} alt="arrowIcon" className="rotate-90" />
          <img src={arrowIcon} alt="arrowIcon" className="rotate-270" />
        </p>
      </div>
    </main>
  );
};

export default Content;
