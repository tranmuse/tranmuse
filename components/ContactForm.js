import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <form
      className="flex flex-col mx-auto w-full max-w-2xl"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="text-white font-bold py-4">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="py-2 px-4 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      />

      <label htmlFor="email" className="text-white font-bold py-4">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="py-2 px-4 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      />

      <label htmlFor="message" className="text-white font-bold py-4">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="py-2 px-4 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      ></textarea>

      <button
        type="submit"
        className="mt-12 py-2 px-4 uppercase text-white font-bold border-2 border-white rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
      >
        Send
      </button>
    </form>
  );
}
