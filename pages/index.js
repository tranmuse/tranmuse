import Head from "next/head";
import Layout from "../components/Layout";
import { TypeAnimation } from "react-type-animation";
import { BiGitBranch } from "react-icons/bi";
import { MdSquare, MdOutlineSquare } from "react-icons/md";
import {
  SiTailwindcss,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiCanva,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <Head>
        <title>TranMuse's Portfolio</title>
      </Head>
      <Layout>
        <main className="flex-1 flex flex-col">
          {/* About Section */}
          <div class="divide-y-4 divide-black">
            <div className="pt-0 md:pb-16s h-[12rem] md:h-[32rem] flex justify-center items-center">
              <div className="container mx-auto px-4 max-w-5xl text-center md:bg-black md:text-white text-2xl md:text-6xl py-4">
                <TypeAnimation
                  sequence={[
                    "Hi, I'm TranMuse.",
                    1000,
                    "Hi, I'm an AI Artist.",
                    1000,
                    "Hi, I'm a Kalimba Tabs Collector.",
                    1000,
                    "Hi, I'm a Web Content Specialist",
                    1000,
                    "Hi, I'm a Front End Developer",
                    1000,
                  ]}
                  speed={10}
                  repeat={Infinity}
                />
              </div>
            </div>

            {/* Projects Section */}
            <div className="py-4 md:py-16 bg-black">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-4xl uppercase text-center text-white font-bold mb-4 md:mb-20">
                  My Projects
                </h2>
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full md:w-96 bg-white border-4 border-black overflow-hidden flex justify-center flex-col mx-4 mb-8">
                    <div className="p-4">
                      <img
                        src="ai-art.svg"
                        alt="AI Art"
                        className="h-64 w-64 mx-auto"
                      />
                      <h3 className="text-2xl font-bold mb-2 text-center">
                        AI Art
                      </h3>
                      <div className="my-4 text-center">
                        <span className="bg-gray-200 py-1 px-2 mr-2">
                          Personal Project
                        </span>
                        <span className="bg-gray-200 py-1 px-2 mr-2">Art</span>
                        <span className="bg-gray-200 py-1 px-2 mr-2">AI</span>
                      </div>
                      <div className="flex justify-center">
                        <a
                          href="/aiart"
                          className="my-2 bg-black text-white p-2 border-2 border-black hover:bg-white hover:text-black text-sm font-semibold uppercase border-black"
                        >
                          View project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-96 bg-white border-4 border-black overflow-hidden flex justify-center flex-col mx-4 mb-8">
                    <div className="p-4">
                      <img
                        src="kalimba.svg"
                        alt="Kalimba"
                        className="h-64 w-64 mx-auto"
                      />
                      <h3 className="text-2xl font-bold mb-2 text-center">
                        Kalimba Tabs
                      </h3>
                      <div className="my-4 text-center ">
                        <span className="bg-gray-200 py-1 px-2 mr-2">
                          Personal Project
                        </span>
                        <span className="bg-gray-200 py-1 px-2 mr-2">
                          Music
                        </span>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="/kalimba-tabs"
                          className="my-2 bg-black text-white p-2 border-2 border-black hover:bg-white hover:text-black text-sm font-semibold uppercase"
                        >
                          View project
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-96 bg-white border-4 border-black overflow-hidden flex justify-center flex-col mx-4 mb-8">
                    <div className="p-4">
                      <img
                        src="ai-art.svg"
                        alt="AI Art"
                        className="h-64 w-64 mx-auto"
                      />
                      <h3 className="text-2xl font-bold mb-2 text-center">
                        Print on Demand
                      </h3>
                      <div className="my-4 text-center">
                        <span className="bg-gray-200 py-1 px-2 mr-2">
                          Personal Project
                        </span>
                        <span className="bg-gray-200 py-1 px-2 mr-2">POD</span>
                        <span className="bg-gray-200 py-1 px-2 mr-2">
                          Redbubble
                        </span>
                      </div>
                      <div className="flex justify-center">
                        <a
                          href="/aiart"
                          className="my-2 bg-black text-white p-2 border-2 border-black hover:bg-white hover:text-black text-sm font-semibold uppercase "
                        >
                          View project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About Section */}
            <div className="py-16">
              <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl uppercase text-center font-bold mb-20">
                  Education And Experience
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="mb-8 md:mb-0">
                    <h3 className="text-lg text-gray-400 mb-8 uppercase">
                      <span className="bg-black text-white font-bold py-2 px-4">
                        Education
                      </span>
                    </h3>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">
                        MS in Information Systems
                      </h4>
                      <p class="text-base text-gray-400 mt-1">
                        University of Missouri - St. Louis
                      </p>
                    </div>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">
                        Graduate Certificate in Cybersecurity
                      </h4>
                      <p class="text-base text-gray-400 mt-1">
                        University of Missouri - St. Louis
                      </p>
                    </div>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">BBA in Marketing</h4>
                      <p class="text-base text-gray-400 mt-1">
                        International University - Vietnam National University
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 md:mb-0">
                    <h3 className="text-lg text-gray-400 mb-8 uppercase">
                      <span className="bg-black text-white font-bold py-2 px-4">
                        Past Experience
                      </span>
                    </h3>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">Web Content Specialist</h4>
                      <p class="text-base text-gray-400 mt-1">
                        Extron Electronics - Anaheim, CA
                      </p>
                    </div>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">Web Specialist</h4>
                      <p class="text-base text-gray-400 mt-1">
                        Ad.IQ - Costa Mesa, CA
                      </p>
                    </div>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">
                        Social Media Research Analyst
                      </h4>
                      <p class="text-base text-gray-400 mt-1">
                        Buzzmetrics - Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 md:mb-0">
                    <h3 className="text-lg text-gray-400 mb-8 uppercase">
                      <span className="bg-black text-white font-bold py-2 px-4">
                        Current Works
                      </span>
                    </h3>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">Co-founder</h4>
                      <p class="text-base text-gray-400 mt-1">
                        IMI Prompt - Midjourney Prompt Builder
                      </p>
                    </div>
                    <div className="py-2">
                      <h4 className="text-2xl mb-0">Co-founder</h4>
                      <p class="text-base text-gray-400 mt-1">
                        Miji Market - Midjourney Prompt Marketplace
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg text-gray-400 my-8 uppercase">
                    <span className="bg-black text-white font-bold py-2 px-4">
                      Skills
                    </span>
                  </h3>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <img src="/midjourney.webp" class="w-16" />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">Midjourney</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare />
                        </div>
                      </div>
                    </div>
                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <SiTailwindcss size={72} />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">Tailwind CSS</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdOutlineSquare />
                        </div>
                      </div>
                    </div>
                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <SiCanva size={72} />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">Canva</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdOutlineSquare />
                        </div>
                      </div>
                    </div>
                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <SiAdobephotoshop size={72} />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">Photoshop</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare />
                        </div>
                      </div>
                    </div>
                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <SiReact size={72} />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">React</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare />
                        </div>
                      </div>
                    </div>
                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <SiNextdotjs size={72} />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">Next.js</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare />
                        </div>
                      </div>
                    </div>

                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <BiGitBranch size={72} />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">Git</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare />
                        </div>
                      </div>
                    </div>
                    <div class="py-4 flex items-center">
                      <div class="flex-shrink-0 mr-4">
                        <SiAdobeaftereffects size={72} />
                      </div>
                      <div class="flex-grow">
                        <p class="text-base mb-2">After Effects</p>
                        <div class="flex justify-left items-center">
                          <MdSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare className="mr-1" />
                          <MdOutlineSquare />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="py-16 bg-black">
              <div className="container mx-auto px-4">
                <h2 className="text-white text-4xl uppercase text-center font-bold mb-12">
                  Contact Me
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
      </Layout>
      <div className="h-1 bg-gray-300"></div>
    </div>
  );
}
