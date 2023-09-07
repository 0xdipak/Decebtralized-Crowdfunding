"use client";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const profiles = [
  {
    name: "Dipak Sharma",
    about: "Student",
    image:
      "https://media.licdn.com/dms/image/C4E03AQEFGPIA92ahdg/profile-displayphoto-shrink_400_400/0/1654001122866?e=1699488000&v=beta&t=dQbZTtZSlSt8ZISbQgrvOOGRhwCw-UsmG7wlQRrfpOQ",
    social: {
      twitter: "https://twitter.com/0xdipak",
      linkedin: "https://www.linkedin.com/in/0xdipak/",
      github: "https://github.com/0xdipak",
    },
  },
  {
    name: "Atrip Limbu",
    about: "Student, Frontend Developer",
    image:
      "https://media.licdn.com/dms/image/D5603AQEpDTzJlMwMZA/profile-displayphoto-shrink_400_400/0/1686808171034?e=1699488000&v=beta&t=Ix8spa9y8sYBZt6hiBRmFH8apsLDsk6RYSoaWQ7vnpw",
    social: {
      twitter: "https://twitter.com/AtripLimbu",
      linkedin: "https://www.linkedin.com/in/atrip-angthupo-3a4365278/",
      github: "https://github.com/atrip-git",
    },
  },
  {
    name: "Rabin Rana",
    about: "Student, Graphics Designer",
    image:
      "https://media.licdn.com/dms/image/D5603AQFLuzSfIzJUxQ/profile-displayphoto-shrink_400_400/0/1685069284457?e=1699488000&v=beta&t=QLsxEXvB15SmCWB4xH_8sNmrCMxiWczuiapF8XslRVY",
    social: {
      twitter: "https://twitter.com/perry_perry89",
      linkedin: "https://www.linkedin.com/in/rabin-rana-858552278/",
      github: "https://github.com/casiosmith",
    },
  },
  {
    name: "krish Gurung",
    about: "Student, Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/107617991?v=4",
    social: {
      twitter: "",
      linkedin: "https://www.linkedin.com/in/krish-gurung-197367278/",
      github: "https://github.com/krish11211",
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
    className="w-full flex flex-col items-center shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800
  my-2 p-3"
  >
    <img
      className="h-60 w-60 object-contain shadow-lg shadow-black rounded-full mb-3"
      src={profile.image}
      alt="member image"
    />
    <h4 className="text-white font-semibold">{profile.name}</h4>
    <p className="text-gray-400 text-sm my-1">About : {profile.about}</p>
    <div className="flex justify-center items-center space-x-8 mt-5 text-white cursor-pointer">
      <div
        className="shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] rounded-full px-2 py-2"
      >
        <a href={`${profile.social.linkedin}`} target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div
        className="shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] rounded-full px-2 py-2"
      >
        <a href={`${profile.social.twitter}`} target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div
        className="shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] rounded-full px-2 py-2"
      >
        <a href={`${profile.social.github}`} target="_blank">
          <BsGithub />
        </a>
      </div>
    </div>
  </div>
);

export default Members;
