import { AddRounded, BookmarkOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import sidebarBg from "../assets/images/sidebar-bg.webp";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <aside className="max-w-lg space-y-2 min-w-max">
      {/* Top */}
      <div className=" bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        {/* Avatar */}
        <div className="relative w-full h-14">
          <Image src={sidebarBg} alt="avatar" layout="fill" priority />
        </div>
        <Avatar
          //   onClick={signOut}
          src={session?.user?.image}
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-y-0.5 ">
          <h4 className="cursor-pointer hover:underline decoration-purple-700 underline-offset-1">
            {session?.user?.name}
          </h4>
          <p className="text-sm text-black/60 dark:text-white/75">
            {session?.user?.email}
          </p>
        </div>
        <div className="hidden text-sm text-left md:inline dark:text-white/75">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2">
              <h4 className="">Who viewed your profile?</h4>{" "}
              <span className="text-blue-500">129</span>
            </div>
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">2,325</span>
            </div>
          </div>

          <div className="sidebarButton">
            <h4 className="text-xs leading-4">
              Access exclusive tools & insights
            </h4>
            <h4 className="font-medium dark:text-white">
              <span className="inline-block w-3 h-3 mr-1 rounded-sm bg-gradient-to-tr from-yellow-700 to-yellow-200"></span>
              Try Premium for Free
            </h4>
          </div>

          <div className="sidebarButton flex items-center space-x-1.5">
            <BookmarkOutlined className="!-ml-1" />
            <h4 className="font-medium dark:text-white">My Items</h4>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="hidden md:flex bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky border border-gray-300 dark:border-none   top-20  text-black/70 dark:text-white/75 ">
        <p className="sidebarLink">Groups</p>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Events</p>
          <AddRounded className="!h-5" />
        </div>

        <p className="sidebarLink">Followed Hashtags</p>
        <div className="text-center sidebarButton ">
          <h4 className="text-sm font-medium dark:text-white">Discover More</h4>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
