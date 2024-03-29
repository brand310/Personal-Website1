import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import Image from "next/image";
import devbrandon from "../public/dev-brandon.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/chat-front-color.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import brandonlogo from "../public/brandonlogo.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Brandon's Portfolio</title>
          <meta name="description" content="Brandon Sandoval's portfolio website." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charset="UTF-8" />
          <meta property="og:site_name" content="Brandon Sandoval" />
          <meta property="og:title" content="Brandon's Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://imgur.com/j7tzovB" />
          <meta property="og:url" content="https://brandonsandoval.com" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="800" />
          <meta property="og:description" content="Brandon Sandoval's portfolio website." />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=" bg-gray-800 px-10 md:px-20 lg:px-40">
          <section className=" min-h-screen">
            <nav className="py-10 flex justify-between">
              <Image
                src={brandonlogo}
                width={350}
                height={350}
                className="-m-5"
              />
              <ul className="flex items-center">
                <li>
                  <a
                    className=" bg-gradient-to-r from-cyan-500 to-blue-400 text-white px-4 py-2 rounded-md ml-8"
                    href="https://drive.google.com/file/d/1W_dz4xeSkFvw_ExTWfKpZsZXpg-uK0A3/view?usp=sharing"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-5">
              <div className="relative mx-auto bg-gradient-to-b from-gray-500 rounded-full w-64 h-64 mb-6 overflow-hidden md:h-96 md:w-96">
                <Image
                  src={devbrandon}
                  layout="none"
                  objectFit="cover"
                  alt="icons"
                  className="-mt-3 ml-6 md:-mt-4"
                />
              </div>
              <h2 className="font-JoseBold text-5xl py-2 text-blue-500 font-medium md:text-7xl">
                Brandon Sandoval
              </h2>
              <h3 className="font-JoseRegular text-gray-200 text-2xl py-2 md:text-4xl">
                Full Stack Software Engineer.
              </h3>
              <p className=" font-JoseLight text-xl py-5 leading-8 text-gray-300 md:text-2xl max-w-xl mx-auto">
                First generation bilingual junior full stack engineer based in
                Los Angeles with experience in HTML, CSS, JavaScript, React, and
                Node.js. I have an understanding of both front-end and back-end
                development, and I am comfortable working with a wide range of
                tools and technologies to create cohesive, high-performance
                software solutions.
              </p>
            </div>
            <div className="text-6xl flex justify-center gap-16 py-3 -mt-10 mb-10 text-gray-200">
              <a
                className="hover:text-blue-500 duration-300 ease-in-out"
                href="https://twitter.com/mkdirbrandon"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                className="hover:text-blue-500 duration-300 ease-in-out"
                href="https://www.linkedin.com/in/brandonsandoval1/"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="hover:text-blue-500 duration-300 ease-in-out"
                href="https://github.com/brand310"
              >
                <AiFillGithub />
              </a>
            </div>
          </section>

          <section>
            <div>
              <h3 className=" font-JoseRegular text-gray-200  text-3xl py-1">
                About Me
              </h3>
              <p className=" font-JoseRegular text-gray-300 text-md py-2 leading-8">
                Skilled in using{" "}
                <span className=" text-blue-600 font-JoseBold">React</span> to
                build responsive, dynamic user interfaces, and I am well-versed
                in the latest trends and best practices in front-end
                development. I also have experience with using{" "}
                <span className="text-blue-600 font-JoseBold">Node.js</span> to
                build server-side applications, and am comfortable using tools
                like Express.js and MongoDB to maintain servers and use proper frameworks.
              </p>
              <p className=" font-JoseRegular text-md py-2 leading-8 text-gray-300 ">
                As a strong collaborator and communicator, I enjoy working
                with teams to create solutions. Whether I am working on a small
                personal project or contributing to a larger team effort. I have
                always loved talking to people and giving full presentations on
                projects that I can be proud of. I love learning and I'm always
                seeking out new opportunities to expand my skills and knowledge,
                whether that means learning a new programming language or
                mastering a new tool or framework.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg shadow-gray-900 p-10 rounded-xl my-10">
                <Image
                  className="mx-auto"
                  src={design}
                  width={100}
                  height={100}
                  alt="icons"
                />
                <h3 className=" font-JoseBold text-gray-100 text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2 text-gray-300 font-JoseRegular ">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600 font-JoseRegular ">
                  Design tools I use:
                </h4>
                <p className="text-gray-200 py-1 font-JoseLight">Photoshop</p>
                <p className="text-gray-200 py-1 font-JoseLight">Canva</p>
                <p className="text-gray-200 py-1 font-JoseLight">Figma</p>
              </div>
              <div className="text-center shadow-lg shadow-gray-900 p-10 rounded-xl my-10">
                <Image
                  className="mx-auto"
                  src={consulting}
                  width={100}
                  height={100}
                  alt="icons"
                />
                <h3 className=" font-JoseBold text-gray-100 text-lg font-medium pt-8 pb-2">
                  Communication
                </h3>
                <p className="py-2 text-gray-300 font-JoseRegular ">
                  Strong communication skills, allowing me to effectively convey
                  ideas and messages.
                </p>
                <h4 className="py-4 text-teal-600 font-JoseRegular">
                  Great with:
                </h4>
                <p className="text-gray-200 py-1 font-JoseLight">
                  Microsoft Teams
                </p>
                <p className="text-gray-200 py-1 font-JoseLight">Slack</p>
                <p className="text-gray-200 py-1 font-JoseLight">Zoom</p>
              </div>
              <div className="text-center shadow-lg shadow-gray-900 p-10 rounded-xl my-10">
                <Image
                  className="mx-auto"
                  src={code}
                  width={100}
                  height={100}
                  alt="icons"
                />
                <h3 className="font-JoseBold text-gray-100 text-lg font-medium pt-8 pb-2">
                  Code
                </h3>
                <p className="py-2 text-gray-300 font-JoseRegular ">
                  I am skilled in coding, with the ability to write efficient,
                  well-structured code to create designs.
                </p>
                <h4 className="py-4 text-teal-600 font-JoseRegular ">
                  Languages I'm certified in:
                </h4>
                <p className="text-gray-200 py-1 font-JoseLight">JavaScript</p>
                <p className="text-gray-200 py-1 font-JoseLight">CSS</p>
                <p className="text-gray-200 py-1 font-JoseLight">Python</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-gray-100 text-3xl py-1 font-JoseRegular">
                Portfolio
              </h3>
              <p className="text-gray-200 text-md py-2 leading-8 font-JoseRegular ">
                With experience in web design, I have a passion for creating
                visually stunning and user-friendly websites. With React, I
                possess a deep understanding of web technologies and design
                principles, enabling me to build websites that are both
                aesthetically pleasing and highly functional. With a strong
                focus on client satisfaction and user experience, I strive to
                deliver the best possible outcomes for all web design projects.
              </p>
              <p className="text-md py-2 leading-8 text-gray-200 font-JoseRegular ">
                The following are examples of web designs for all sorts of
                clients including schools, cleaning businesses and freelance
                work:
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
              </div>
            </div>
          </section>
          <section className="font-JoseLight">
            <hr></hr>
            <div className="text-gray-200 text-md py-6 leading-8 ">
              <h3 className="text-4xl py-4">Lets get started!</h3>
              <p className="py-5">
              If you are interested in hiring me or have any questions about my work, don't hesitate to reach out!
              </p>
              <div className="flex gap-2">
                <AiOutlineMail className="mt-2.5 " />
                <p>Email: brandonsandoval0@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <AiOutlinePhone className="mt-2.5 " />
                <p>Business Number: (424) 244-1358 </p>
              </div>
              <div>
                <p className="pt-5">All Rights Reserved © 2023</p>
                <p>Profile art work done by <a className="text-blue-500 underline"
                    href="https://anthonycerullo.carrd.co/"
                  >Anthony Cerullo.</a> </p> 
                <p>
                  Website built by{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://www.brandonsandoval.com/"
                  >
                    me.
                  </a>
                </p>
               
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
