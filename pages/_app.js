import Head from "next/head";

import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WagmiConfig, createClient, configureChains } from "wagmi";

import "../styles/globals.css";

const { chains, provider, webSocketProvider } = configureChains([mainnet], [publicProvider()], { targetQuorum: 1 });

const connectors = [
    new MetaMaskConnector({
        chains,
        options: {
            shimDisconnect: true,
            UNSTABLE_shimOnConnectSelectAccount: true,
        },
    }),
];

const client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>CryptoPunks Collection</title>
                <meta name="description" content="A webpage to view all cryptopunks collection" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <WagmiConfig client={client}>
                <Component {...pageProps} />
            </WagmiConfig>
        </>
    );
}

export default MyApp;
