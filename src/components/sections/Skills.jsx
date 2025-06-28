import {
  BiLogoNetlify, BiLogoPostgresql, BiLogoTypescript
} from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb, DiJava, DiPhp } from "react-icons/di";
import {
  FaDocker, FaAws, FaCss3Alt, FaDigitalOcean, FaGitAlt,
  FaGitlab, FaHtml5, FaNodeJs, FaPython, FaReact, FaVuejs
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiAntdesign, SiExpress, SiFlask, SiJest, SiNuxtdotjs,
  SiPassport, SiPostman, SiPythonanywhere, SiSequelize,
  SiTailwindcss, SiTensorflow, SiCplusplus, SiJenkins,
  SiGnubash, SiRender, SiOracle
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
  return (
    <div>
      <section id="skills" className="mx-4 lg:mx-20">
        <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
          Technologies I Use.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiCplusplus className="text-2xl" /> C++
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <DiJava className="text-2xl" /> JAVA
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaPython className="text-2xl" /> Python
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaHtml5 className="text-2xl" /> HTML
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaCss3Alt className="text-2xl" /> CSS
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiTailwindcss className="text-2xl" /> Tailwind
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <IoLogoJavascript className="text-2xl" /> JavaScript
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaReact className="text-2xl" /> React
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiExpress className="text-2xl" /> Express
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaNodeJs className="text-2xl" /> NodeJS
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <DiMongodb className="text-2xl" /> MongoDB
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiFlask className="text-2xl" /> Flask
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <DiPhp className="text-2xl" /> PHP
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaAws className="text-2xl" /> AWS
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaDocker className="text-2xl" /> Docker
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiJenkins className="text-2xl" /> Jenkins
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiGnubash className="text-2xl" /> Bash
          </span>
        </div>
      </section>

      <section id="skills" className="mx-4 lg:mx-20">
        <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
          Tools I Use.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <FaGitAlt className="text-2xl" /> Git
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <DiGithubAlt className="text-2xl" /> Github
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiRender className="text-2xl" /> Render
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <CgVercel className="text-2xl" /> Vercel
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <IoLogoFirebase className="text-2xl" /> Firebase
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiPostman className="text-2xl" /> Postman
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <GrMysql className="text-2xl" /> MySQL
          </span>
          <span className="inline-flex items-center gap-x-2 py-4 px-3 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
            <SiOracle className="text-2xl" /> Oracle
          </span>
        </div>
      </section>
    </div>
  );
}

export default Skills;
