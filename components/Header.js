const RenderNav = () => {
    const navs = [
        { title: "Etherscan", url: "https://etherscan.io/address/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb" },
        { title: "Twitter", url: "https://twitter.com/cryptopunksnfts" },
        { title: "OpenSea", url: "https://opensea.io/collection/cryptopunks" },
    ];

    return (
        <nav>
            {navs.map((nav, index) => {
                const { title, url } = nav;

                return (
                    <a key={index} href={url} target="_blank">
                        <span className="text-xl px-5 font-semibold text-dark-brown">{title}</span>
                    </a>
                );
            })}
        </nav>
    );
};

const Header = () => {
    return (
        <div className="text-white flex flex-row justify-between items-center px-16 py-10">
            <h1 className="font-bold text-3xl">CryptoPunks</h1>

            <RenderNav />
        </div>
    );
};

export default Header;
