import { useRouter } from "next/router";
import { imageCollectionData } from "../../public/data/collection";
import Layout from "../../components/Layout";
import Masonry from "react-masonry-css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Collection() {
  const router = useRouter();
  const { collectionID } = router.query;

  // Find the collection object with the matching ID
  const collection = imageCollectionData.find(
    (collection) => collection.id === collectionID
  );

  const [searchTerm, setSearchTerm] = useState("");

  if (!collection) {
    return (
      <Layout>
        <h1>Collection not found</h1>
      </Layout>
    );
  }

  const filteredImages = collection.images.filter(
    (image) =>
      (image.tags &&
        image.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )) ||
      (image.name &&
        image.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <h1>{collection.name}</h1>
      <div className="text-gray-700 text-lg my-2 mx-auto max-w-5xl text-center">
        <p>{collection.description}</p>
      </div>
      <div className="my-6 mx-auto md:w-1/3 p-2 shadow-md rounded-md border border-gray-300 flex">
        <input
          type="text"
          placeholder="Search images and collections"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg focus:outline-none placeholder-gray-400"
        />
        <FaSearch className="h-6 w-6 text-gray-300 ml-2" />
      </div>

      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredImages.map((image) => (
          <div key={image.id} className="relative my-masonry-grid_column">
            <img
              src={image.src}
              alt={image.tags.join(", ")}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Masonry>
    </Layout>
  );
}
