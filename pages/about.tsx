import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Headline3 from "../components/headline-3";
import Section from "../components/section";
import ContainedButton from "../components/contained-button";
import Headline2 from "../components/headline-2";
import Headline4 from "../components/headline-4";
import EducationInfo from "../components/education-info";
import SocialLinks from "../components/social-links";
import profileImgLarge from "../public/images/profile.jpg";
import profileImg from "../public/images/sk.jpg";
import SkillInfo from "../components/skill-info";
import ExperienceAndResponsibility from "../components/experience-and-responsibility";

import DownloadButton from "../components/download-button";
import ListWithUnderlinedCaption, { Skill } from "../components/list-with-underlined-caption";

const About: NextPage = () => {
  const vacusResponsibilities = [
    `Determine information architecture and create sitemaps`,
    `Create prototypes and wireframes `,
    `Create use cases and flow diagrams, and define information hierarchies`,
    `Combine UX thinking with design execution, to produce usable and intuitive user interfaces`,
    `Plan and run user tests and other design research to inform design decisions`,
    `Collaborate with the rest of the design team to evolve and refine our design system, ensuring visual cohesion and engineering efficiency across all user touchpoints`,
    `Communicate design solutions to engineers and stakeholders`,
    `Design and prototype elegant solutions for web and mobile apps`,
    `Understand user needs`,
    `Work within brand guidelines to create layouts that reinforce a brand’s style`
  ]
  
  const byallResponsibilities = [
    `Plan and conduct user research and competitor analysis`,
    `Interpret data and qualitative feedback`,
    `Create user stories, personas, and storyboards`,
    `Determine information architecture and create sitemaps`,
    `Create prototypes and wireframes`,
    `Conduct usability testing`
  ]

  const skSkills: Skill[] = [
    {
      skillTitle: 'Design',
      skills: [
        'Drawing',
        'Typography',
        'Visual Design',
        'Responsive Design',
        'Wireframing',
        'Usability Testing',
        '3D Printing',
        'Rapid Prototyping',
        'Conceptual Modeling'
      ]
    }, 
    {
      skillTitle: 'Softwares',
      skills: [
        'Figma',
        'Adobe XD',
        'Adobe Photoshop',
        'Keyshot',
        'Autodesk Fusion 360',
        'InVision',
        'Sketch'
      ]
    },
    {
      skillTitle: 'Languages',
      skills: [
        'English',
        'Tamil'
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>About | Sangeeth Kumar</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, my name is Sangeeth Kumar. I love the design and I'm excited about new
          technologies. Whether you have a question or just want to say hi, I will try my best to get back to you!"
        />
      </Head>
      <Header />
      <div className="mx-auto mt-[68px] max-w-[1040px] lg:mt-[88px] lg:p-0">
        <Section>
          <p className="mb-10 font-sans-cn text-2xl font-bold tracking-[0.12em] text-slate-900">
            👋 Hello there !
          </p>
          <div className="lg:flex lg:items-start lg:justify-between">
            <div className="w-full lg:max-w-[552px]">
              <div className="mb-6">
                <h1 className="pb-2 text-xl font-extrabold leading-8 tracking-[0.01em] text-slate-900">
                  My name is Sangeeth Kumar.
                </h1>
              </div>
              <div className="mb-6">
                <p className="body-1 text-slate-600">
                  A product designer who has a great enthusiasm for designing digital products that make things better & touches someone&apos;s life. 
                  <br />
                  <br />
                  For the past few years, I have been learning and researching user experience design, and user interface design. 
                  I love the design and am excited about new technologies. I have always believed that design and development are inseparable, 
                  and their creative collaboration leads to better solutions.
                </p>
              </div>
            </div>
            <div className="relative block max-w-lg overflow-hidden rounded-lg drop-shadow lg:hidden">
              <Image
                src={profileImg}
                alt="My profile image"
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
            <div className="relative hidden w-1/2 max-w-[360px] overflow-hidden rounded-lg drop-shadow lg:block">
              <Image
                src={profileImg}
                alt="My profile image"
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </Section>
        <Section  overrideYPadding="py-5" >
          <div style={{overflow: 'auto'}}>            
            <Headline2>Experience</Headline2>
            <div className="float-left lg:w-[450px] w-full mb-8 lg:mb-0">
              <ExperienceAndResponsibility
                companyName="1) Vacus Tech Pvt Ltd"
                time="Nov 2021-Present"
                role="Industrial Designer"
                information="Vacus Tech is a Wireless Indoor Positioning Company with patented technology for automated configurable fencing, 
                precise positioning, and accounting of assets and people. Industry segments include Enterprises, 
                Data Centres, Manufacturing, Warehousing, and Logistics."
                responsibilities={vacusResponsibilities}
              />
            </div>
            <div  className="float-right lg:w-[450px] w-full mb-8 lg:mb-0">
              <ExperienceAndResponsibility
                companyName="2) Byall"
                time="June 2021-Nov 2021"
                role="UX UI Designer"
                information="Byall enable individuals as independent resources to assist corporates with their sourcing of candidates. 
                We started this platform because we think that everyone should become a recruiter and 
                that disrimination has nothing to do with recruitment or recruited."
                responsibilities={byallResponsibilities}
                />
                <div className="mt-9">
                  <DownloadButton
                    textLabel="Resume"
                    href="https://drive.google.com/file/d/12kG9nmYKj6XnIFw5yEIdJADqhWtswktJ/view?usp=sharing"
                    target="_blank"
                  />
                </div>
            </div>
          </div>          
        </Section>
        <Section overrideYPadding="py-5">
          <div style={{overflow: 'auto'}}>
            <div className="skills w-full lg:w-[450px] float-left">
              <Headline2>Skills</Headline2>
              <ListWithUnderlinedCaption
                skills={skSkills}  
              />
            </div>
            <div className="lg:w-[450px] w-full float-right">
              <Headline2>Contact</Headline2>
              <p className="body-1 mb-6 text-slate-600">
                Whether you have a question or just want to say hi,{" "}
                <br className="hidden lg:block" />I will try my best to get back to
                you!
              </p>
              <ContainedButton
                textLabel="Start a conversation"
                href="mailto:e.sangeethkumar@gmail.com"
              />
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default About;
