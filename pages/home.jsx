import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";

const Home = () => {
  return (
    <>
      <header className="flex items-center justify-around py-4">
        <div className="relative h-10 w-36">
          <Image
            src="https://rb.gy/vtbzlp"
            alt="brand-logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center divide-gray-300 sm:divide-x">
          <div className="hidden pr-4 space-x-8 sm:flex">
            <HeaderLink />
          </div>
        </div>
      </header>
      <h4>Welocme to </h4>
    </>
  );
};

export default Home;
