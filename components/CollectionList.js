import Link from "next/link";
const CollectionList = ({ collections }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {collections &&
        collections.map((collection) => (
          <Link href={`/collections/${collection.id}`} key={collection.id}>
            <div className="h-full bg-white rounded-lg overflow-hidden shadow-md my-4">
              <img
                src={collection.thumbnail}
                alt={collection.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {collection.name}
                </h2>
                <p className="text-gray-600">{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CollectionList;
