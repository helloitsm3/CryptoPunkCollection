import Hero from "../components/Hero";
import Header from "../components/Header";
import Collection from "../components/Collection";

import { withQuery, gql } from "urql";

export default function Home() {
    return (
        <main className="text-white bg-gradient-texture min-h-screen bg-no-repeat bg-black">
            <Header />
            <Hero />
            <Collection />
        </main>
    );
}

export async function getServerSideProps({ query, urqlClient }) {
    const POKEMONS_QUERY = gql`
        query {
            pokemons(limit: 10) {
                id
                name
            }
        }
    `;

    const result = await urqlClient.query(POKEMONS_QUERY, {}).toPromise();

    console.log(result);
    return { props: {} };
}
