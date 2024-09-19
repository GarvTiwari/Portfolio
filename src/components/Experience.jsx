import React from "react";
import css from "../assests/image/css.png";
import HTML from "../assests/image/html.png";
import javascript from "../assests/image/Javascript.png";
import reactImg from "../assests/image/reactImage.png";
import mongodb from "../assests/image/mongo.png";
import nodejs from "../assests/image/Nodejs.png";

const Experience = () => {

    const techs = [
        {
            id:1,
            src:HTML,
            title:'HTML',
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:javascript,
            title:'Javascript',
            style:"shadow-yellow-500"
        },
        {
            id:5,
            src:reactImg,
            title:'React',
            style:"shadow-react-blue"
        },
        {
            id:6,
            src:mongodb,
            title:'Mongo',
            style:"shadow-green-500"
        },
        {
            id:7,
            src:nodejs,
            title:'Node',
            style:" shadow-green-600"
        },
    ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black h-screen pt-5"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Internship Experience - <b> LogiqueCode (Since June 24, 2024) </b> <br />
As an intern at LogiqueCode, I have been involved in various projects utilizing a range of technologies. My role has provided me with hands-on experience and the opportunity to develop my skills in the following areas:
</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
                techs.map(({id, src, title, style}) => (
                  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt={title} className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Experience;
