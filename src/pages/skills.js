import Link from 'next/link';
import { GiCrossMark } from 'react-icons/gi';
const Skills = () => {
  return (
    <section className="border-t-emerald-60 bg-purple-600 h-[100vh] ">
      <div className="flex fixed w-full bg-black justify-between items-center rounded-b-lg">
        <h1 className="p-2 text-xl text-center text-white">Skills</h1>
        <Link href={'/'}>
          <GiCrossMark className="text-3xl p-2 text-white" />
        </Link>
      </div>
      <div className="skill-container w-full flex flex-col justify-center items-center">
        <h1 className="mt-16 text-4xl text-White">My Skills</h1>
        <div className="flex flex-row justify-between mt-20 space-x-10 items-center">
          <i
            className="devicon-cplusplus-plain hover:animate-bounce text-blue-700  text-4xl"
            d-title="C/C++"
          ></i>
          <i
            className="devicon-javascript-plain hover:animate-bounce  text-yellow-500 text-4xl"
            d-title="Javascript"
          ></i>
          <i
            className="devicon-java-plain hover:animate-bounce  text-red-500 text-4xl"
            d-title="Java"
          ></i>
          <i
            className="devicon-python-plain hover:animate-spin  text-green-500 text-4xl"
            d-title="Python"
          ></i>
          <i
            className="devicon-html5-plain hover:animate-bounce text-orange-500 text-4xl"
            d-title="HTML"
          ></i>
          <i
            className="devicon-css3-plain hover:animate-bounce text-lime-500 text-4xl"
            d-title="CSS"
          ></i>
        </div>
        <div className="flex flex-row justify-between mt-20 space-x-10 items-center">
          <i
            className="devicon-nodejs-plain hover:animate-bounce text-green-700 text-4xl"
            d-title="Node Js"
          ></i>
          <i
            className="devicon-react-original hover:animate-spin text-lime-500 text-4xl"
            d-title="React"
          ></i>
          <i
            className="devicon-materialui-plain hover:animate-bounce text-blue-500 text-4xl"
            d-title="MUI"
          ></i>
          <i
            className="devicon-bootstrap-plain hover:animate-bounce text-pink-600 text-4xl"
            d-title="Bootstrap"
          ></i>
          <i
            className="devicon-flutter-plain hover:animate-bounce text-orange-600 text-4xl"
            d-title="Flutter"
          ></i>
        </div>
        <div className="flex flex-row justify-between mt-20 space-x-10 items-center">
          <i className="devicon-git-plain hover:animate-bounce text-indigo-600 text-4xl" d-title="Git"></i>
          <i className="devicon-vscode-plain hover:animate-bounce text-cyan-500 text-4xl" d-title="Vs Code"></i>
          <i className="devicon-matlab-plain hover:animate-bounce text-teal-500 text-4xl" d-title="Matlab"></i>
          <i className="devicon-webstorm-plain hover:animate-bounce text-amber-500 text-4xl" d-title="WebStorm"></i>
        </div>
        <div className="flex flex-row justify-between mt-20 space-x-10 items-center">
          <i className="devicon-mongodb-plain hover:animate-bounce text-orange-600 text-4xl" d-title="MongoDB"></i>
          <i className="devicon-mysql-plain hover:animate-bounce text-lime-600 text-4xl" d-title="MySql"></i>
          <i className="devicon-webstorm-plain hover:animate-bounce text-green-500 text-4xl" d-title="WebStorm"></i>
        </div>
      </div>
    </section>
  );
};
export default Skills;
