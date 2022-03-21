import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import PageMeta from "../components/PageMeta";
import Header from "../components/Header";
import logo from "../assets/images/linkedin.png";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <PageMeta />
      <Header />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  return { props: {} };
}
