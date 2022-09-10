import moment from "moment";
import Link from "next/link";

const RenderSales = ({ data }) => {
    const { sales, total } = data;
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    if (total === 0) return <p className="text-center py-16 font-bold text-2xl">There's currently no sales for this punk!</p>;

    return (
        <div className="container mx-auto flex flex-col justify-center  px-10">
            <p className="py-10 text-center font-bold text-3xl">Purchase History</p>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="text-left">Seller</th>
                        <th className="text-left">Price (USD)</th>
                        <th className="text-left">Prev. Price (USD)</th>
                        <th className="text-left">Buyer</th>
                        <th className="text-left">Date Purchased</th>
                        <th className="text-left">Transaction</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => {
                        const { seller, buyer, blockTimestamp, usdPrice, prevUSDPrice, transactionHash } = sale;
                        return (
                            <tr key={index}>
                                <td className="h-12">{seller}</td>
                                <td className="h-12">{formatter.format(usdPrice)}</td>
                                <td className="h-12">{formatter.format(prevUSDPrice)}</td>
                                <td className="h-12">{buyer}</td>
                                <td className="h-12">{moment(blockTimestamp).format("LLL")}</td>
                                <td className="h-12">
                                    <Link href={`https://etherscan.io/tx/${transactionHash}`} passHref>
                                        <a target="_blank" className="bg-white rounded-md text-black px-5 py-2">
                                            View Transaction
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default RenderSales;
