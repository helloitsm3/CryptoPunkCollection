import Link from "next/link";
import Wallet from "./Wallet";

/**
 * A component to render a header for users to navigate between pages.
 */
const Header = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center lg:px-16 px-8 py-10">
            <Link href="/">
                <a className="font-bold text-3xl">CryptoPunks</a>
            </Link>

            <Wallet />
        </div>
    );
};

export default Header;
