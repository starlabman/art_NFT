const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Greek Letters";
const description = "This is the first Art NFT in Greek Letters Collection";
const baseUri = "ipfs://QmU1dK38YCgpZy8RCpHWG1fQgs2KGavpTTKKUj5uAQVT5u";

const solanaMetadata = {
  symbol: "GL",
  seller_fee_basis_points: 10000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    // layersOrder: [
    //   { name: "Background" },
    //   { name: "Eyeball" },
    //   { name: "Eye color" },
    //   { name: "Iris" },
    //   { name: "Shine" },
    //   { name: "Bottom lid" },
    //   { name: "Top lid" },
    // ],

    layersOrder: [
      { name: "Background" ,
        options: {
          bypassDNA: false,
        }
      },
      { name: "Eyeball" },
      {
        name: "Eye color",
        options: {
          blend: MODE.destinationIn,
          opacity: 0.2,
          displayName: "Awesome Eye Color",
        },
      },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid", options: { blend: MODE.overlay, opacity: 0.7 } },
      { name: "Top lid" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
