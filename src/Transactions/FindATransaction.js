import { Fragment, useState } from "react";
import Search from "../Search/Search";
import Transactions from "./Transactions";

const FindATransaction = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return ( <Fragment>
                <Search setSearchTerm={setSearchTerm} />
                <Transactions searchTerm={searchTerm} />
            </Fragment>);
}

export default FindATransaction;