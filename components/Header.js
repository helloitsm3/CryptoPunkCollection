import Link from "next/link";
import Wallet from "./Wallet";

const Header = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center px-16 py-10">
            <Link href="/">
                <a className="font-bold text-3xl">CryptoPunks</a>
            </Link>

            <Wallet />
        </div>
    );
};

export default Header;
