import Layout from "../components/Layout";
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaDeviantart,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6">
        <h1>Contact me</h1>

        <form className="flex flex-col space-y-4 mx-auto w-full max-w-2xl">
          <label htmlFor="name" className="text-black font-bold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="py-2 px-4 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />

          <label htmlFor="email" className="text-black font-bold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="py-2 px-4 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />

          <label htmlFor="message" className="text-black font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="py-2 px-4 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          ></textarea>

          <button
            type="submit"
            className="py-2 px-4 bg-black text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}
