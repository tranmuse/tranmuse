const fs = require("fs");
const path = require("path");

const collectionDirectory = "images";
const collectionData = [];

fs.readdirSync(collectionDirectory).forEach((collection) => {
  const collectionPath = path.join(collectionDirectory, collection);
  const collectionImages = [];

  fs.readdirSync(collectionPath)
    .filter((image) => {
      const extname = path.extname(image);
      return extname === ".jpg" || extname === ".png" || extname === ".jpeg";
    })
    .forEach((image, index) => {
      collectionImages.push({
        id: index + 1,
        src: path.join(collectionPath, image),
        tags: [],
      });
    });

  if (collectionImages.length > 0) {
    collectionData.push({
      id: collection.replace(/ /g, "-").toLowerCase(),
      name: collection,
      description: "Add a description here.",
      thumbnail: collectionImages[0].src,
      images: collectionImages,
      link: `/collections/${collection.replace(/ /g, "-").toLowerCase()}`,
    });
  }
});

const dataString = `export const imageCollectionData = ${JSON.stringify(
  collectionData,
  null,
  2
)};`;

fs.writeFileSync("collection.js", dataString);
