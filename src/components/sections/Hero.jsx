import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaLink, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-700"
    >
      <div className="self-center w-full">
        {/* Mobile Image with Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle"
        >
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden shadow-black/20 dark:shadow-white/20"
            alt="Profile"
          />
          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm">
            Hello! 👋 How are you doing? 🤔
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] self-center text-zinc-900 dark:text-zinc-100">
            <motion.h2
              className="text-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {user_info.main.role}
            </motion.h2>

            <motion.h1
              className="font-black mt-3 text-5xl lg:w-[85%] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {user_info.main.name}
            </motion.h1>

            <motion.p
              className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {user_info.main.description}
            </motion.p>

            {/* Buttons: Projects & Contact */}
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 border border-black dark:border-white font-medium transition-all duration-300 hover:bg-red-800 hover:text-white hover:border-red-800 dark:hover:bg-red-700 dark:hover:border-red-700"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 items-center group"
              >
                <span className="font-medium">Contact</span>
                <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Social Icons + Resume */}
            <motion.div
              className="flex items-center gap-4 mt-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              {/* LinkedIn */}
              <a href={user_info.socials.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl hover:scale-110 transition-transform text-[#0077B5]" />
              </a>

              {/* GitHub */}
              <a href={user_info.socials.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl hover:scale-110 transition-transform text-black dark:text-white" />
              </a>

              {/* Instagram */}
              <a href={user_info.socials.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-3xl hover:scale-110 transition-transform text-[#E1306C]" />
              </a>

              {/* Gmail */}
              <a href={`mailto:${user_info.main.email}`} target="_blank" rel="noreferrer">
                <FaEnvelope className="text-3xl hover:scale-110 transition-transform text-[#D44638]" />
              </a>

              {/* Twitter */}
              <a href={user_info.socials.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="text-3xl hover:scale-110 transition-transform text-[#1DA1F2]" />
              </a>

              {/* LeetCode */}
              <a href={user_info.socials.leetcode} target="_blank" rel="noreferrer">
                <SiLeetcode className="text-3xl hover:scale-110 transition-transform text-[#FFA116]" />
              </a>

              {/* Resume Button */}
              <a
                href={user_info.main.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-6 py-2 flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-md text-sm font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition mr-24"
              >
                Resume <FaLink />
              </a>
            </motion.div>
          </div>

          {/* Large Screen Image */}
          <motion.div
            className="hidden lg:block w-[480px] self-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <img
              className="rounded-[10%] transform rotate-3 hover:rotate-0 transition-transform duration-700 shadow-xl shadow-black/20 dark:shadow-white/20 hover:shadow-2xl hover:shadow-black/30 dark:hover:shadow-white/30"
              src={user_info.main.photo}
              alt="Hero"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
