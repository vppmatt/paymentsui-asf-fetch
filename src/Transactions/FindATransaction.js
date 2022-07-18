import { Fragment, useState } from "react";
import { useParams } from "react-router";
import Search from "../Search/Search";
import Transactions from "./Transactions";

const FindATransaction = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const params = useParams();
    if (params.orderId != null && params.orderId !== searchTerm) {
        setSearchTerm(params.orderId);
    }



    return ( <Fragment>
                <Search setSearchTerm={setSearchTerm} />
                <Transactions searchTerm={searchTerm} />
            </Fragment>);
}

export default FindATransaction;