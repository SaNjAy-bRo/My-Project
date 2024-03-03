// import { HtmlIcon, CssIcon, JavaScriptIcon } from '@vscode-icons/core';
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs,faReact, faBootstrap, faPython} from '@fortawesome/free-brands-svg-icons';
// import { ChipIcon } from '@vscode-icons/core'; 
import React from "react";
// import { skills } from "../data";

const skillsWithIcons = [
  { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
  { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3} /> },
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
  { name: 'SQL', icon: <FontAwesomeIcon icon={faJs} /> },
  { name: 'Python', icon: <FontAwesomeIcon icon={faPython} /> },
  { name: 'Django', icon: <FontAwesomeIcon icon={faJs} /> },
  { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} /> },
  
  // Add more skills and icons as needed
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="mb-20 text-center">
          <ChipIcon className="inline-block w-10 mb-4" />
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl title-font">
            Skills I Have
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
          I bring a robust skill set to web development, encompassing proficiency in HTML, CSS, and JavaScript, along with expertise in React.js, Python, Bootstrap, and SQL. With a keen eye for design and a knack for creating dynamic, user-centric experiences, I am well-equipped to contribute to diverse aspects of web development.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
        {skillsWithIcons.map(({ name, icon }) => (
      <div key={name} className="w-full p-2 sm:w-1/2">
        <div className="flex items-center h-full p-4 bg-gray-800 rounded">
        <BadgeCheckIcon className="flex-shrink-0 w-6 h-6 mr-4 text-green-400" />
          <span className="font-medium text-white title-font">
            {name}
          </span>
          {icon && <div className="ml-4">{icon}</div>}
        </div>
      </div>
    ))}
  </div>
        </div>
      </div>
    </section>
  );
}