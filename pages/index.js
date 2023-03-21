import { useState } from "react";
import Layout from "../components/Layout";
import CollectionList from "../components/CollectionList";
import { imageCollectionData } from "../public/data/collection";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCollections = imageCollectionData.filter((collection) =>
    collection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Layout>
      <div className="container mx-auto max-w-screen-xl text-center">
        <h1>Hi, I'm TranMuse!</h1>
        <div className="text-gray-700 text-lg mx-auto max-w-5xl">
          <p>
            As an AI artist, I use the cutting-edge technology to create
            visually stunning works of art. With my digital paintings and music
            compositions, I'm constantly pushing the boundaries of what's
            possible with AI-generated art. My art blends human creativity with
            artificial intelligence to showcase the endless possibilities of
            combining technology and art.
          </p>
        </div>
        <div className="flex justify-center my-4">
          <input
            type="text"
            placeholder="Search collections"
            className="border border-gray-400 p-2 rounded-md w-1/3"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <CollectionList collections={filteredCollections} />
      </div>
    </Layout>
  );
}
