import Layout from "../components/Layout";
import Image from "next/image";
export default function About() {
  return (
    <Layout>
      <div className="gap-4 max-w-4xl mx-auto">
        <h1 className="pb-8">Email sent! Thank you for your message.</h1>
        <img
          className="w-80 mx-auto my-4"
          src="/mailsent.svg"
          alt="Email has been sent"
        />
      </div>
    </Layout>
  );
}
