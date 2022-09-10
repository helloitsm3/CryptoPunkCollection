import { InjectedConnector } from "wagmi/connectors/injected";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const Wallet = () => {
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    if (isConnected) {
        return (
            <div className="flex flex-col items-center">
                <div className="space-x-3">
                    <button className="bg-red-600 px-8 py-3 rounded-lg" onClick={() => disconnect()}>
                        Disconnect
                    </button>
                </div>
            </div>
        );
    }

    return (
        <button className="bg-blue-600 px-8 py-3 rounded-lg" onClick={() => connect()}>
            Connect Wallet
        </button>
    );
};

export default Wallet;
