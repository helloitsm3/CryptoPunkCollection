import Hero from "../components/Hero";
import Header from "../components/Header";
import Collection from "../components/Collection";

export default function Home() {
    return (
        <main className="text-white bg-gradient-texture min-h-screen bg-no-repeat bg-black">
            <Header />
            <Hero />
            <Collection />
        </main>
    );
}
