import Layout from "../components/Layout";
import Image from "next/image";
export default function About() {
  return (
    <Layout>
      <div className="gap-4 max-w-4xl mx-auto">
        <h1>About Me</h1>
        {/* <Image
          className="w-80 rounded-full shadow-lg mx-auto my-4"
          src="/about.png"
          alt="About TranMuse image"
          width={500}
          height={500}
        /> */}
        <div className="w-full"></div>

        <div className="text-lg col-span-2">
          <p>
            Hi, my name is Tran Nguyen, and I'm a passionate AI artist. However,
            before discovering my passion for AI art, I embarked on a journey of
            exploration to find my true calling.
          </p>
          <p>
            I hold an MIS in Information Systems from the University of Missouri
            St. Louis, along with a graduate certificate in cybersecurity. My
            prior work experience as a web content specialist and social media
            researcher piqued my interest in emerging technologies. However, my
            desire to explore a multitude of interests, ranging from 3D printing
            and cybersecurity to AI, database, digital art, UI design, and
            front-end development, left me searching for a clear direction.
          </p>
          <p>
            In 2022, I discovered AI art and found myself fascinated by the
            endless possibilities that came with combining AI and art. This
            discovery was a turning point in my journey, and I knew I had found
            my true calling. I became an AI artist, honed my skills, and began
            exploring the unique ways to exploit AI art and create something
            exceptional.
          </p>
          <p className="text-center my-4">Best Regards,</p>
          <Image
            className=" mx-auto"
            src="/logo/logo2.png"
            alt="TranMuse logo"
            width={150}
            height={120}
          />
        </div>
      </div>
    </Layout>
  );
}
