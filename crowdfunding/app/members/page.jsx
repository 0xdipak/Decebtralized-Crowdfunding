'use client'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

const profiles = [
  {
    name: "Dipak Sharma",
    about: "Student, Blockchain Developer",
    image: "",
    social: {
      twitter: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Atrip Limbu",
    about: "Student, Frontend Developer",
    image: "",
    social: {
      twitter: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Rabin Rana",
    about: "Student",
    image: "",
    social: {
      twitter: "",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "krish Gurung",
    about: "Student",
    image: "",
    social: {
      twitter: "",
      linkedin: "",
      github: "",
    },
  },
];

const Members = () => {
  return (
      <div className="bg-[#151c25] gradient-bg-artworks">
        <div className="w-4/5 py-10 mx-auto">
          <h4 className="text-white text-3xl font-bold uppercase text-gradient">
            Team Members
          </h4>

          <div
            className="grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-10
        py-2.5"
          >
            {profiles.map((profile, i) => (
              <Card key={i} profile={profile} />
            ))}
          </div>
        </div>
      </div>
  );
};

const Card = ({ profile }) => (
  <div
    className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800
  my-2 p-3"
  >
    <img
      className="h-60 w-full object-contain shadow-lg shadow-black rounded-lg mb-3"
      src={`https://avatars.dicebear.com/api/pixel-art/${profile.name}.svg`}
      alt="NFT image"
    />
    <h4 className="text-white font-semibold">{profile.name}</h4>
    <p className="text-gray-400 text-sm my-1">About : {profile.about}</p>
    <div className="flex justify-center items-center space-x-8 mt-5 text-white cursor-pointer">
      <div
        className="shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] rounded-full px-2 py-2"
      >
        <BsLinkedin />
      </div>
      <div
        className="shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] rounded-full px-2 py-2"
      >
        <BsTwitter />
      </div>
      <div
        className="shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] rounded-full px-2 py-2"
      >
        <BsGithub />
      </div>
    </div>
  </div>
);

export default Members;
