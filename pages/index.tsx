import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import caffyCoverImg from "/public/images/caffy-cover.jpg";
import caffyCoverImgSmall from "/public/images/caffy-cover-small.jpg";
import wipCoverImg from "/public/images/wip-cover2.jpg";
// import wipCoverImgSmall from "/public/images/wip-cover-small.jpg";
// import houseaCoverImg from "/public/images/housea-cover.jpg";
// import houseaCoverImgSmall from "/public/images/housea-cover-small.jpg";
import nammaBusCardImg from "/public/images/nammabus_card.jpg"
import smartHomeCardImg from "/public/images/smarthome_card.jpg"
// import circleCoverImg from "/public/images/circle-cover.png";
// import circleCoverImgSmall from "/public/images/circle-cover-small.png";
// import homeHero from "/public/images/main-hero.png"
import Headline2 from "../components/headline-2";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Sangeeth Kumar</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Sangeeth Kumar. I am a user experience designer. This is the portfolio to show my recent projects."
        />
      </Head>
      <Header />
      <h1 className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden p-0">
        Projects
      </h1>
      
      <Image
        src={wipCoverImg}
        alt="hero image"
        layout="responsive"
        objectFit="cover"
        priority
      />
      <div className="mt-[68px] space-y-5 p-5 lg:mt-[100px]">
        <div className="text-center">
          <Headline2>Recent Works</Headline2>
        </div>
        <Card
          title="Namma Bus"
          media={nammaBusCardImg}
          mediaSmall={nammaBusCardImg}
          description="An App that tells you Local bus Routes and Timings"
          link="/housea"
          priority={true}
        />
        <Card
          title="Smart Home"
          media={smartHomeCardImg}
          mediaSmall={smartHomeCardImg}
          description="An App that tells you Local bus Routes and Timings"
          link="/circle"
          priority={true}
        />
        <Card
          title="Caffy"
          media={caffyCoverImg}
          mediaSmall={caffyCoverImgSmall}
          description="Design a mobile web app for a cafe"
          link="/caffy"
          priority={false}
        />
        {/* Work in process */}
        {/* <div>
          <div className="relative h-[calc(66vh)] lg:max-h-[800px]">
            <div className="relative block h-full lg:hidden">
              <Image
                src={wipCoverImgSmall}
                alt="Work in process"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative hidden h-full lg:block">
              <Image
                src={wipCoverImg}
                alt="Work in process"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="absolute top-0 left-0 h-full w-full bg-project-overlay-small lg:bg-project-overlay-large" />
            <div className="absolute bottom-16 left-5 lg:bottom-[20%] lg:left-[10%]">
              <h2 className="mb-1 text-[40px] font-black leading-[3rem] tracking-[0.01em] text-white drop-shadow lg:mb-2 lg:text-5xl">
                Work in process...
              </h2>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
