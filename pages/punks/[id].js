import { useRouter } from "next/router";
import { initUrqlClient, withUrqlClient } from "next-urql";
import { SALES_QUERY } from "../../components/graphql/queries";
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from "urql";

import Header from "../../components/Header";
import RenderSales from "../../components/RenderSales";
import CryptoPunks from "../../public/cryptopunks.json";
import useRandomPunks from "../../hooks/useRandomPunks";
import RenderAccessories from "../../components/RenderAccessories";

/**
 * A page to render details of individual Crypto Punks
 */
const Punks = () => {
    const router = useRouter();
    const { id } = router.query;
    const punk = useRandomPunks(id);
    const c_punk = CryptoPunks.find((punk) => punk.image.includes(`cryptopunk${id}.png`));

    const [res] = useQuery({
        query: SALES_QUERY,
        variables: {
            filter: JSON.stringify({ project: ["cryptopunks"], nftTicker: ["Ͼ"], assetId: [id] }),
        },
    });

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

                {res.fetching ? <p className="text-center py-16 font-bold text-2xl">Loading...</p> : <RenderSales data={res.data} />}
            </div>
        </main>
    );
};

export default withUrqlClient(() => ({
    url: process.env.NEXT_PUBLIC_API_URL,
}))(Punks);

export async function getServerSideProps({ query }) {
    const { id } = query;
    const ssrCache = ssrExchange({ isClient: false });
    const isRedirect = isNaN(id, 10) || parseInt(id, 10) > 9999;
    const client = initUrqlClient(
        {
            url: process.env.NEXT_PUBLIC_API_URL,
            exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
            fetchOptions: () => {
                return {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: process.env.NEXT_PUBLIC_API_KEY,
                    },
                };
            },
        },
        false
    );

    // This query is used to populate the cache for the query
    // used on this page.
    await client.query(SALES_QUERY).toPromise();

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
            // urqlState is a keyword here so withUrqlClient can pick it up.
            // urqlState: ssrCache.extractData(),
            revalidate: 600,
        },
    };
}
