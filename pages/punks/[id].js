import { useRouter } from "next/router";

import Header from "../../components/Header";
import RenderSales from "../../components/RenderSales";
import CryptoPunks from "../../public/cryptopunks.json";
import useRandomPunks from "../../hooks/useRandomPunks";
import RenderAccessories from "../../components/RenderAccessories";

/**
 * A page to render details of individual Crypto Punks
 */
const Punks = ({ data }) => {
    const router = useRouter();
    const { id } = router.query;
    const punk = useRandomPunks(id);
    const c_punk = CryptoPunks.find((punk) => punk.image.includes(`cryptopunk${id}.png`));

    return (
        <main className="text-white bg-gradient-texture min-h-screen bg-no-repeat bg-black">
            <Header />

            <div className="px-10">
                <div className="container mx-auto my-10 flex md:flex-row flex-col">
                    <img src={punk} className="punk-image" />

                    <div className="flex justify-between flex-col md:px-10">
                        <h1 className="font-bold text-4xl md:py-0 py-5">#{id}</h1>
                        <p className="text-lg">
                            10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain. The project that
                            inspired the modern CryptoArt movement. Selected press and appearances include Mashable, CNBC, The Financial
                            Times, Bloomberg, MarketWatch, The Paris Review, Salon, The Outline, BreakerMag, Christie&apos;s of London,
                            Art|Basel, The PBS NewsHour, The New York Times in 2018 and again in 2021. The Cryptopunks are one of the
                            earliest examples of a &ldquo;Non-Fungible Token&ldquo; on Ethereum, and were inspiration for the ERC-721
                            standard that powers most digital art and collectibles.
                        </p>

                        <RenderAccessories accessories={c_punk.accessories} />
                    </div>
                </div>

                <RenderSales data={data} />
            </div>
        </main>
    );
};

export default Punks;
export async function getServerSideProps({ query }) {
    const { id } = query;
    const isRedirect = isNaN(id, 10) || parseInt(id, 10) > 9999;

    const encodeParams = encodeURI(
        JSON.stringify({
            project: ["cryptopunks"],
            nftTicker: ["%CF%BE"],
            assetId: [id],
        })
    )
        .replaceAll("%5B", "[")
        .replaceAll("%5D", "]")
        .replaceAll("%25", "%");

    const params = {
        limit: "10",
        project: "cryptopunks",
        orderBy: "usdPrice",
        order: "DESC",
    };

    // const res = await fetch("https://nonfungible.com/api/salesForAsset?" + new URLSearchParams(params).toString() + "&" + encodeParams);
    // const data = await res.json();

    if (isRedirect) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            data: {
                sales: [
                    {
                        blockchain: "ethereum",
                        transactionHash: "0x28a123f26b7a1a7944a19aea90d36fce4045fbf3f8ebbefa11927258915ac6ab",
                        blockNumber: 15360033,
                        blockTimestamp: "2022-08-17T17:23:44.000Z",
                        assetId: "6189",
                        project: "cryptopunks",
                        nftAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        nftTicker: "Ͼ",
                        marketAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        usdPrice: 188515,
                        tokenAddress: "0x0000000000000000000000000000000000000000",
                        tokenTicker: "ETH",
                        totalPrice: "100000000000000000000",
                        totalDecimalPrice: 100,
                        feeUSDPrice: null,
                        feeTotalPrice: null,
                        feeTotalDecimalPrice: null,
                        feeCollectors: null,
                        saleType: "secondary",
                        buyer: "0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685",
                        buyer_name: "0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685",
                        seller: "0xbbaec56b725a0b9501a655d7d1b48555af637b70",
                        seller_name: "0xbbaec56b725a0b9501a655d7d1b48555af637b70",
                        to: "0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685",
                        to_name: "0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685",
                        from: "0xbbaec56b725a0b9501a655d7d1b48555af637b70",
                        from_name: "0xbbaec56b725a0b9501a655d7d1b48555af637b70",
                        wallets: ["0xbbaec56b725a0b9501a655d7d1b48555af637b70", "0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685"],
                        tokenUSDPrice: 1885.15,
                        usdPriceChange: 75168.46,
                        usdPriceChangePercent: 66.31738383897736,
                        blockTimestampChange: 3357411,
                        prevBlockTimestamp: "2022-07-09T20:46:53.000Z",
                        prevMarketAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        prevUSDPrice: 113346.54,
                        prevFeeTotalPrice: 0,
                        prevFeeTotalDecimalPrice: 0,
                        prevFeeUSDPrice: 0,
                        prevFrom: "0x0da0df4be467140e74c76257d002f52e954be4d3",
                        prevFrom_name: "0x0da0df4be467140e74c76257d002f52e954be4d3",
                        prevTo: "0x4c54d41126a56f45f181cc4abc3b5ed5452bc8e1",
                        prevTo_name: "0x4c54d41126a56f45f181cc4abc3b5ed5452bc8e1",
                        buyerAssetMarketCount: 1,
                        sellerAssetMarketCount: 1,
                        buyerAssetReceiveCount: 1,
                        sellerAssetReceiveCount: 0,
                        assetSoldCount: 2,
                        assetId_long: 6189,
                        meta: {
                            tags: ["Fedora", "Big Shades", "Male"],
                            image: "https://www.larvalabs.com/cryptopunks/cryptopunk6189.png",
                        },
                        _id: "aZqi2oIBu7dKbubBYsMz",
                        _cursor: "WzE4ODUxNSwiYVpxaTJvSUJ1N2RLYnViQllzTXoiXQ==",
                        project_name: "CryptoPunks",
                        category: "collectible",
                        category_name: "Collectible",
                    },
                    {
                        blockchain: "ethereum",
                        transactionHash: "0x2325a17bc6114a734cba349ed698d6491e60b0fa6b2c2565efe2526002d3aba4",
                        blockNumber: 15466731,
                        blockTimestamp: "2022-09-03T17:40:42.000Z",
                        assetId: "6189",
                        project: "cryptopunks",
                        nftAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        nftTicker: "Ͼ",
                        marketAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        usdPrice: 154882,
                        tokenAddress: "0x0000000000000000000000000000000000000000",
                        tokenTicker: "ETH",
                        totalPrice: "100000000000000000000",
                        totalDecimalPrice: 100,
                        feeUSDPrice: null,
                        feeTotalPrice: null,
                        feeTotalDecimalPrice: null,
                        feeCollectors: null,
                        saleType: "secondary",
                        buyer: "0xfe2f279d3679bac2d07cf46c93503410ef9ca448",
                        buyer_name: "0xfe2f279d3679bac2d07cf46c93503410ef9ca448",
                        seller: "0x0232d1083e970f0c78f56202b9a666b526fa379f",
                        seller_name: "0x0232d1083e970f0c78f56202b9a666b526fa379f",
                        to: "0xfe2f279d3679bac2d07cf46c93503410ef9ca448",
                        to_name: "0xfe2f279d3679bac2d07cf46c93503410ef9ca448",
                        from: "0x0232d1083e970f0c78f56202b9a666b526fa379f",
                        from_name: "0x0232d1083e970f0c78f56202b9a666b526fa379f",
                        wallets: ["0x0232d1083e970f0c78f56202b9a666b526fa379f", "0xfe2f279d3679bac2d07cf46c93503410ef9ca448"],
                        tokenUSDPrice: 1548.82,
                        usdPriceChange: -29758.38074780759,
                        usdPriceChangePercent: -16.116940740310373,
                        blockTimestampChange: 1469818,
                        prevBlockTimestamp: "2022-08-17T17:23:44.000Z",
                        prevMarketAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        prevUSDPrice: 184640.3807478076,
                        prevFeeTotalPrice: 0,
                        prevFeeTotalDecimalPrice: 0,
                        prevFeeUSDPrice: 0,
                        prevFrom: "0xbbaec56b725a0b9501a655d7d1b48555af637b70",
                        prevFrom_name: "0xbbaec56b725a0b9501a655d7d1b48555af637b70",
                        prevTo: "0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685",
                        prevTo_name: "0x1919db36ca2fa2e15f9000fd9cdc2edcf863e685",
                        buyerAssetMarketCount: 1,
                        sellerAssetMarketCount: 1,
                        buyerAssetReceiveCount: 1,
                        sellerAssetReceiveCount: 0,
                        assetSoldCount: 3,
                        assetId_long: 6189,
                        meta: {
                            image: "https://www.larvalabs.com/cryptopunks/cryptopunk6189.png",
                        },
                        _id: "H5N4BIMBhgpmG-CBDQSG",
                        _cursor: "WzE1NDg4MiwiSDVONEJJTUJoZ3BtRy1DQkRRU0ciXQ==",
                        project_name: "CryptoPunks",
                        category: "collectible",
                        category_name: "Collectible",
                    },
                    {
                        blockchain: "ethereum",
                        transactionHash: "0x4447d305b396244f4eae42f85ccb1cc4d6f10dbdb4f27c141c979def29f7ff47",
                        blockNumber: 15110623,
                        blockTimestamp: "2022-07-09T20:46:53.000Z",
                        assetId: "6189",
                        project: "cryptopunks",
                        nftAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        nftTicker: "Ͼ",
                        marketAddress: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
                        usdPrice: 113346.54,
                        tokenAddress: "0x0000000000000000000000000000000000000000",
                        tokenTicker: "ETH",
                        totalPrice: "93000000000000000000",
                        totalDecimalPrice: 93,
                        feeUSDPrice: null,
                        feeTotalPrice: null,
                        feeTotalDecimalPrice: null,
                        feeCollectors: null,
                        saleType: "primary",
                        buyer: "0x4c54d41126a56f45f181cc4abc3b5ed5452bc8e1",
                        buyer_name: "0x4c54d41126a56f45f181cc4abc3b5ed5452bc8e1",
                        seller: "0x0da0df4be467140e74c76257d002f52e954be4d3",
                        seller_name: "0x0da0df4be467140e74c76257d002f52e954be4d3",
                        to: "0x4c54d41126a56f45f181cc4abc3b5ed5452bc8e1",
                        to_name: "0x4c54d41126a56f45f181cc4abc3b5ed5452bc8e1",
                        from: "0x0da0df4be467140e74c76257d002f52e954be4d3",
                        from_name: "0x0da0df4be467140e74c76257d002f52e954be4d3",
                        wallets: ["0x0da0df4be467140e74c76257d002f52e954be4d3", "0x4c54d41126a56f45f181cc4abc3b5ed5452bc8e1"],
                        tokenUSDPrice: 1218.78,
                        usdPriceChange: 0,
                        usdPriceChangePercent: 0,
                        blockTimestampChange: 0,
                        prevUSDPrice: 0,
                        prevFeeTotalPrice: 0,
                        prevFeeTotalDecimalPrice: 0,
                        prevFeeUSDPrice: 0,
                        buyerAssetMarketCount: 1,
                        sellerAssetMarketCount: 1,
                        buyerAssetReceiveCount: 1,
                        sellerAssetReceiveCount: 1,
                        assetSoldCount: 1,
                        assetId_long: 6189,
                        meta: {
                            tags: ["Fedora", "Big Shades", "Male"],
                            image: "https://www.larvalabs.com/cryptopunks/cryptopunk6189.png",
                        },
                        _id: "9eGqboIB-girDI3ZRtMg",
                        _cursor: "WzExMzM0Ni41NCwiOWVHcWJvSUItZ2lyREkzWlJ0TWciXQ==",
                        project_name: "CryptoPunks",
                        category: "collectible",
                        category_name: "Collectible",
                    },
                ],
                total: 3,
            },
        },
    };
}
