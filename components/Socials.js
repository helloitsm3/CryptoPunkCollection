const Socials = () => {
    const socials = [
        {
            title: "Etherscan",
            url: "https://etherscan.io/address/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
            styles: "px-8 py-2 bg-yellow-300 bg-opacity-30 text-bright-yellow rounded-md",
        },
        {
            title: "Twitter",
            url: "https://twitter.com/cryptopunksnfts",
            styles: "px-8 py-2 bg-purple-600 bg-opacity-30 text-bright-purple rounded-md",
        },
        {
            title: "OpenSea",
            url: "https://opensea.io/collection/cryptopunks",
            styles: "px-8 py-2 bg-cyan-500 bg-opacity-30 text-bright-blue rounded-md",
        },
    ];

    return (
        <div className="flex flex-row justify-center space-x-5">
            {socials.map((social, index) => {
                return (
                    <a href={social.url} key={index} target="_blank">
                        <span className={social.styles}>{social.title}</span>
                    </a>
                );
            })}
        </div>
    );
};

export default Socials;
