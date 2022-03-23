import { Avatar } from "@mui/material";
import {
  BusinessCenter,
  Article,
  VideoCameraBack,
  PhotoSizeSelectActual,
} from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

import { modalState, modalTypeState } from "../atoms/modalAtom";

const Input = () => {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <div className="bg-white  rounded=lg p-3 space-y-3 border border-gray-300 dark:border-none  dark:bg-[#1d2226]">
      <div className="flex items-center space-x-2">
        <Avatar
          className="!h-10 !w-10 !cursor-pointer"
          src={session?.user?.image}
          alt={session?.user?.name}
        />

        <motion.button
          className="rounded-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium w-full text-left"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setModalOpen(true);
            setModalType("dropIn");
          }}
        >
          Add a post
        </motion.button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-10">
        <button className="inputButton group">
          <PhotoSizeSelectActual className="text-blue-400" />
          <h4 className="opacity-80 group-hover:opacity-100">Photo</h4>
        </button>
        <button className="inputButton group">
          <VideoCameraBack className="text-green-400" />
          <h4 className="opacity-80 group-hover:opacity-100">Video</h4>
        </button>
        <button className="inputButton group">
          <BusinessCenter className="text-blue-300" />
          <h4 className="opacity-80 group-hover:opacity-100">Job</h4>
        </button>
        <button className="inputButton group">
          <Article className="text-red-400" />
          <h4 className="opacity-80 group-hover:opacity-100 whitespace-nowrap">
            Write Article
          </h4>
        </button>
      </div>
    </div>
  );
};

export default Input;
