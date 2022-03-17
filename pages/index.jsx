import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import PageMeta from "../components/PageMeta";

export default function Home() {
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
      <button onClick={signOut}>Sign Out</button>
      <PageMeta />
    </>
  );
}

export async function getServerSideProps(ctx) {}
