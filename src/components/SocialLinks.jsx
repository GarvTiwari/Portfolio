// import React from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// const SocialLinks = () => {
//   return (
//     <div className="flex flex-col top-[35%] left-0 fixed">
//       <ul>
//         <li className="flex justify-center items-center w-40 h-14 px-4 ml-[100px]">
//           <a href="" className="flex justify-between items-center w-full">
//             <>
//               Linkedin <FaLinkedin size={30} />
//             </>
//           </a>
//         </li>
  
//       </ul>
//     </div>
//   );
// };

// export default SocialLinks;



import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "Linkedin",
      icon: <FaLinkedin size={30} />,
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:example@example.com",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, label, icon, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {label} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
