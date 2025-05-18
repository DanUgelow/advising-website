import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Typography } from "@mui/material";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import styles from "@/styles/index.module.scss";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import About from "@/components/About";
import Contact from "@/components/Contact";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>DU Advising</title>
        <meta
          name='description'
          content='Business advising, web development, tech & social media support'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='/advising-logo.png' />
        <meta
          property='og:description'
          content='Business advising, web development, tech & social media support'
        />
        <link rel='icon' href='/advising-logo.png' />
      </Head>
      <>
        <Nav />
        <main>
          <Header />
          <Services />
          <About />
          <Packages />
          <Contact />
        </main>
      </>
    </>
  );
}
