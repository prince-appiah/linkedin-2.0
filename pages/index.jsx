import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import PageMeta from "../components/PageMeta";
import Header from "../components/Header";
import logo from "../assets/images/linkedin.png";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { useRouter } from "next/router";
import Feed from "../components/Feed";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { connectToDatabase } from "../utils/mongodb";

export default function Home({ posts, news }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => router.push("/home"),
  });
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <div className="bg-gray-[#f3f2ef] dark:bg-black h-screen overflow-y-scroll md:space-y-6 dark:text-white">
      <PageMeta title="Feed | LinkedIn 2.0" />
      <Header />
      <main className="flex justify-center px-4 gap-x-5 sm:px-12">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed posts={posts} />
        </div>
        {/* Widgets */}
        <Widgets news={news} />

        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return { redirect: { permanent: false, destination: "/home" } };
  }

  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find()
    .sort({ timestamp: -1 })
    .toArray();

  // google news api
  const results = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      session,
      news: results.articles,
      posts: posts.map((i) => ({
        _id: i._id.toString(),
        input: i.input,
        photoUrl: i.photoUrl,
        userImg: i.userImg,
        email: i.email,
        createdAt: i.createdAt,
      })),
    },
  };
}
