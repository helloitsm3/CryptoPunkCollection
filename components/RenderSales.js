import moment from "moment";
import Link from "next/link";

import { formatter } from "./utils";

const RenderDesktop = ({ sales }) => {
    return (
        <div className="container mx-auto lg:flex flex-col justify-center px-10 hidden">
            <p className="py-10 text-center font-bold text-3xl">Purchase History</p>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="text-left">Seller</th>
                        <th className="text-left">Price (USD)</th>
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

const RenderMobile = ({ sales }) => {
    return (
        <div className="container mx-auto flex flex-col justify-center lg:px-10 lg:hidden">
            <p className="py-10 text-center font-bold text-3xl">Purchase History</p>

            <div className="flex flex-wrap">
                {sales.map((sale, index) => {
                    const { buyer, blockTimestamp, usdPrice, transactionHash } = sale;
                    return (
                        <div key={index} className="flex flex-wrap mb-7 bg-white text-black rounded-md px-3">
                            <div>
                                <div className="my-2 font-bold text-lg">{formatter.format(usdPrice)}</div>
                                <div>{buyer}</div>
                                <div>{moment(blockTimestamp).format("LLL")}</div>
                            </div>

                            <div className="my-3 mt-5 bg-blue-500 rounded-md w-full text-center py-3">
                                <Link href={`https://etherscan.io/tx/${transactionHash}`} passHref>
                                    <a target="_blank" className=" text-black">
                                        View Transaction
                                    </a>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const RenderSales = ({ data }) => {
    const { sales, total } = data;

    if (total === 0) return <p className="text-center py-16 font-bold text-2xl">There's currently no sales for this punk!</p>;

    return (
        <div>
            <RenderDesktop sales={sales} />
            <RenderMobile sales={sales} />
        </div>
    );
};

export default RenderSales;
