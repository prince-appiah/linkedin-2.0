import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import PageMeta from "../components/PageMeta";
import Header from "../components/Header";
import logo from "../assets/images/linkedin.png";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import Feed from "../components/Feed";

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => router.push("/home"),
  });

  return (
    <div className="bg-gray-[#f3f2ef] dark:bg-black h-screen overflow-y-scroll md:space-y-6 dark:text-white">
      <PageMeta title="Feed | LinkedIn 2.0" />
      <Header />
      <main className="flex justify-center px-4 gap-x-5 sm:px-12">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
        </div>
        {/* Widgets */}
        <div className=""></div>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return { redirect: { permanent: false, destination: "/home" } };
  }

  return { props: { session } };
}
