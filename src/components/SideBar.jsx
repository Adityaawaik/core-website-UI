import React, { useState } from "react";
import coreImage from "../../images/companyLogo.svg";
import backArrow from "../../images/backArrow.svg";
import homeIcon from "../../images/homeIcon.svg";
import profileIcon from "../../images/profileIcon.svg";
import peopleIcon from "../../images/peopleIcon.svg";
import teamManagementIcon from "../../images/teamManagementIcon.svg";
import projectIcon from "../../images/projectIcon.svg";
import hiringIcon from "../../images/hiringIcon.svg";
import reportIcon from "../../images/reportIcon.svg";
import settingIcon from "../../images/settingIcon.svg";

const SideBar = () => {
  const [isBurgerMenuClicked, setIsBurgerMenuClicker] = useState(false);

  const toggerBurgerMenuClicked = () => {
    setIsBurgerMenuClicker(!isBurgerMenuClicked);
  };

  return (
    <section className="w-70 min-h-20 mt-4 bg-[#3D3936] rounded-[20px] m-2 flex flex-col max-[950px]:w-full">
      {/* Header */}
      <div className="flex justify-between p-2 items-center h-23">
        <img src={coreImage} alt="company logo" />

        {/* Arrow rotation */}
        <img
          onClick={toggerBurgerMenuClicked}
          src={backArrow}
          className={`w-5 h-5 cursor-pointer transition-transform duration-500 min-[950px]:hidden
          ${isBurgerMenuClicked ? "rotate-90" : "rotate-270"} `}
          alt="backArrow"
        />
      </div>

      <div className="flex justify-center max-[950px]:hidden">
        <ul className="text-white w-full px-2">
          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={homeIcon} alt="home-icon" />
            <span>Home</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={profileIcon} alt="profile-icon" />
            <span>My Info</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={peopleIcon} alt="people-icon" />
            <span>People</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={teamManagementIcon} alt="team-management-icon" />
            <span>Team Management</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={projectIcon} alt="project-icon" />
            <span>Project Setup</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={hiringIcon} alt="hiring-icon" />
            <span>Hiring</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={reportIcon} alt="report-icon" />
            <span>Report</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={settingIcon} alt="setting-icon" />
            <span>Setting</span>
          </li>
        </ul>
      </div>

      <div
        className={`justify-center overflow-hidden transition-all duration-1000 ease-in-out
        ${
          isBurgerMenuClicked
            ? "opacity-100 max-h-125 flex"
            : "opacity-0 max-h-0 flex"
        }
        min-[951px]:hidden`}
      >
        <ul className="text-white w-full px-2">
          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={homeIcon} alt="home-icon" />
            <span>Home</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={profileIcon} alt="profile-icon" />
            <span>My Info</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={peopleIcon} alt="people-icon" />
            <span>People</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={teamManagementIcon} alt="team-management-icon" />
            <span>Team Management</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={projectIcon} alt="project-icon" />
            <span>Project Setup</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={hiringIcon} alt="hiring-icon" />
            <span>Hiring</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={reportIcon} alt="report-icon" />
            <span>Report</span>
          </li>

          <li className="flex gap-4 items-center rounded-lg p-2 hover:bg-[#ffffff6e] cursor-pointer">
            <img src={settingIcon} alt="setting-icon" />
            <span>Setting</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
