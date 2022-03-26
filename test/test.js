describe("NFTMarket", function () {
  it("Should create and execute market sales", async function () {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFTCollection");
    const nft = await NFT.deploy();
    await nft.deployed();
    const nftContractAddress = nft.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    // await nft.createToken("https://www.location.com");
    // await nft.createToken("https://www.location2.com");

    // await market.createMarketItem(nftContractAddress, 1, auctionPrice, {
    //   value: listingPrice,
    // });
    // await market.createMarketItem(nftContractAddress, 2, auctionPrice, {
    //   value: listingPrice,
    // });

    // const [_, buyerAddress] = await ethers.getSigners();

    // await market
    //   .connect(buyerAddress)
    //   .createMarketSale(nftContractAddress, 1, { value: auctionPrice });

    // items = await market.fetchMarketItems();
    // items = await Promise.all(
    //   items.map(async (i) => {
    //     const tokenUri = await nft.tokenURI(i.tokenId);
    //     let item = {
    //       price: i.price.toString(),
    //       tokenId: i.tokenId.toString(),
    //       seller: i.seller,
    //       owner: i.owner,
    //       tokenUri,
    //     };
    //     return item;
    //   })
    // );
    // console.log("items: ", items);
  });

  it("Test Unit contract 1", async function () {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;
    console.log(marketAddress);
  });

  it("Test Unit contract 2", async function () {
    const Market = await ethers.getContractFactory("NFTCollection")
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address;
    console.log(marketAddress);
  });
});

describe("NFT", function () {
  it("NFT collection",  async function() {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("NFTCollection");
    const hardhatToken = await Token.deploy();
    console.log(hardhatToken.address);
  });
});