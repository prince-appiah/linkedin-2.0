import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  HomeRounded,
  Group,
  BusinessCenter,
  Chat,
  Notification,
  Avatar,
  AppsOutlined,
  SearchRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";

import linkedinLight from "../assets/images/linkedin-light.svg";
import linkedinDark from "../assets/images/linkedin-dark.png";
import HeaderLink from "../components/HeaderLink";
import { useSession } from "next-auth/react";
``;
const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();
  const { data: session } = useSession();

  useEffect(() => setIsMounted(true), []);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-md">
      {/* Left side */}
      <div className="flex items-center w-full max-w-xs space-x-2">
        {isMounted &&
          (resolvedTheme === "dark" ? (
            <Image
              src={linkedinDark}
              alt="linkedin-dark"
              width={45}
              height={45}
            />
          ) : (
            <Image
              src={linkedinLight}
              alt="linkedin-light"
              width={55}
              height={55}
            />
          ))}

        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <SearchRounded />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow hidden text-sm placeholder-black bg-transparent md:inline-flex dark:placeholder-white/75 focus:outline-none"
          />
        </div>
      </div>
      {/* Rightt side */}
      <div className="flex items-center space-x-6">
        <HeaderLink icon={HomeRounded} text="Home" feed active />
        <HeaderLink icon={Group} text="My Network" feed />
        <HeaderLink icon={BusinessCenter} text="Jobs" feed hidden />
        <HeaderLink icon={Chat} text="Messaging" feed hidden />
        {/* <HeaderLink icon={Notification} text="Notifications" feed /> */}
        {/* <HeaderLink
          icon={Avatar}
          text="Me"
          feed
          avatar={session?.user?.image}
          hidden
        /> */}
        <HeaderLink icon={AppsOutlined} text="Work" feed hidden />

        {/* Theme toggle */}
        {isMounted && (
          <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
              resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <span className="absolute left-0">🌜</span>

            <motion.div
              className="z-40 w-5 h-5 bg-white rounded-full"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />

            <span className="absolute right-0.5">🌞</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
