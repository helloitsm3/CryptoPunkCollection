import Link from "next/link";
import Wallet from "./Wallet";

const Header = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center lg:px-16 sm:px-10 py-10">
            <Link href="/">
                <a className="font-bold text-3xl">CryptoPunks</a>
            </Link>

            <Wallet />
        </div>
    );
};

export default Header;
