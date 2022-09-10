/**
 * Renders component when user is viewing on a web browser
 * @example
 *
 * accessories = ["Black Lipstick", "Green Eye Shadow", "Blonde Bob"]
 *
 * <RenderAccessories accessories={accessories} />
 */
const RenderAccessories = ({ accessories }) => {
    return (
        <div>
            <p className="font-bold text-2xl my-3">Accessories</p>

            <div className="flex flex-wrap">
                {accessories?.map((accessory, index) => (
                    <p key={index} className="mr-2 bg-bright-purple rounded-sm px-2 my-1">
                        {accessory}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default RenderAccessories;
