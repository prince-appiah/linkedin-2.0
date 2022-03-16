import {
  ArrowForwardIosRounded,
  BusinessCenter,
  Explore,
  Group,
  OndemandVideoSharp,
} from "@mui/icons-material";
import Image from "next/image";
import logo from "../assets/images/linkedin.png";
import HeaderLink from "../components/HeaderLink";
import PageMeta from "../components/PageMeta";
import { getProviders, signIn } from "next-auth/react";

export default function Index({ providers }) {
  return (
    <div className="space-y-10">
      <PageMeta />

      <header className="flex items-center justify-around py-4 read-only:">
        <div className="relative h-10 w-36">
          {/* TODO: Fix image not displaying */}
          <Image
            src={logo}
            alt="brand-logo"
            layout="fill"
            // width={200}
            // height={400}
            objectFit="contain"
          />
        </div>
        <div className="flex items-center divide-gray-300 sm:divide-x">
          <div className="hidden pr-4 space-x-8 sm:flex">
            <HeaderLink Icon={Explore} text="Discover" />
            <HeaderLink Icon={Group} text="People" />
            <HeaderLink Icon={OndemandVideoSharp} text="Learning" />
            <HeaderLink Icon={BusinessCenter} text="Jobs" />
          </div>

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: "" })}
                  className="font-semibold text-blue-700 border border-blue-700  rounded-full px-5 py-1.5 transition-all hover:border-2"
                >
                  Sign In
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center max-w-screen-lg mx-auto xl:flex-row">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl   md:text-5xl text-amber-700 max-w-xl !leading-snug pl-4 xl:pl-0 ">
            Welcome to your professional community
          </h1>
          <div className="space-y-4 ">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
          </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] top-14 right-5 xl:h-[650px]">
          <Image src="https://rb.gy/vkzpzt" alt="bg" layout="fill" priority />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return { props: { providers } };
}
