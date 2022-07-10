import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import caffyCoverImg from "../public/images/caffy-cover.jpg";
import caffyCoverImgSmall from "../public/images/caffy-cover-small.jpg";
// import wipCoverImg from "../public/images/wip-cover.jpg";
// import wipCoverImgSmall from "../public/images/wip-cover-small.jpg";
import houseaCoverImg from "../public/images/housea-cover.jpg";
import houseaCoverImgSmall from "../public/images/housea-cover-small.jpg";
import circleCoverImg from "../public/images/circle-cover.png";
import circleCoverImgSmall from "../public/images/circle-cover-small.png";
import homeHero from "../public/images/main-hero.png"
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
      <div className="bg-[#1F2229]">
      <h1 className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden p-0">
        Projects
      </h1>
      <div className="h-[500px]">
        <Image
            src={homeHero}
            alt="hero image"
            layout="responsive"
            objectFit="cover"
            priority
          />
      </div>
      <div className="text-center">
        <Headline2>Recent Works</Headline2>
      </div>
      <div className="mt-[68px] space-y-5 p-5 lg:mt-[88px]">
        <Card
          title="Housea"
          media={houseaCoverImg}
          mediaSmall={houseaCoverImgSmall}
          description="Design a website for finding rental apartments"
          link="/projects/housea"
          priority={true}
          darkText={true}
        />
        <Card
          title="Circle"
          media={circleCoverImg}
          mediaSmall={circleCoverImgSmall}
          description="Design a tool to help international students share household
          items"
          link="/projects/circle"
          priority={true}
        />
        <Card
          title="Caffy"
          media={caffyCoverImg}
          mediaSmall={caffyCoverImgSmall}
          description="Design a mobile web app for a cafe"
          link="/projects/caffy"
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
      </div>
    </>
  );
};

export default Home;
