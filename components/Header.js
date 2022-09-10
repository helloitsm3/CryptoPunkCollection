import Wallet from "./Wallet";

const Header = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center px-16 py-10">
            <h1 className="font-bold text-3xl">CryptoPunks</h1>

            <Wallet />
        </div>
    );
};

export default Header;
