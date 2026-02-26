import React from "react";

const ProfileCard = ({
  image,
  imageName,
  personName,
  jobSpeciality,
  badge,
}) => {
  return (
    <div className="profile-card w-62 h-66.75 bg-white p-2 mt-4 rounded-2xl">
      <div className="profile-image flex justify-center relative items-center">
        <img src={image} alt={imageName} className="w-33.25 h-33.25 " />
        <img src={badge} className="absolute bottom-0 right-[23%]" alt="" />
      </div>
      <div className="profile-content text-center mt-4">
        <p className="font-semibold">{personName}</p>
        <p>{jobSpeciality}</p>
      </div>
      <div className="dots flex justify-center items-center mt-4 gap-1">
        <div className="yellow-dot w-2.5 h-2.5 bg-[#FFC83E] rounded-[50%]"></div>
        <div className="green-dot w-2.5 h-2.5 bg-[#70D32E] rounded-[50%]"></div>
        <div className="blue-dot w-2.5 h-2.5 bg-[#6194EC] rounded-[50%]"></div>
        <div className="pink-dot w-2.5 h-2.5 bg-[#FB8C3D] rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
