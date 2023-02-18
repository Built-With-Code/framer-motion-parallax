import { motion, useScroll, useTransform } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import FeatureCard from "../components/FeatureCard";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="flex flex-col bg-black min-h-[200vh]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative w-full max-h-[40rem] h-screen" ref={ref}>
        <div className="relative flex flex-col h-full z-10">
          <Navbar />
          <div className="flex-1 flex justify-center items-center">
            <h1 className="text-white font-bold text-6xl">
              An all-electric future.
            </h1>
          </div>
        </div>
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ y }}
        >
          <video
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black" />
        </motion.div>
      </header>

      <main className="max-w-[70%] mx-auto my-8 z-50">
        <h1 className="text-white font-bold text-6xl my-8">
          The best terrestrial transport experience.
        </h1>
        <div className="grid grid-cols-3 gap-x-8 gap-y-16">
          <FeatureCard feature="Long range" />
          <FeatureCard feature="OTA updates" />
          <FeatureCard feature="Fast charging" />
          <FeatureCard feature="5-star safety" />
          <FeatureCard feature="Driver assists" />
          <FeatureCard feature="Zero emissions" />
        </div>
        <div className="relative w-5/6 h-96 mx-auto my-16">
          <Image
            src="/assets/image.jpg"
            alt="vehicle portfolio"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
