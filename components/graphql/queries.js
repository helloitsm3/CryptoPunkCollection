import { gql } from "urql";

export const SALES_QUERY = gql`
    query assetSales($filter: String) {
        assetSales(filter: $filter) {
            sales {
                transactionHash
                blockTimestamp
                usdPrice
                buyer
                seller
                prevUSDPrice
            }
        }
    }
`;
