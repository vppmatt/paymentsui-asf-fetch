import { Fragment } from "react";
import Search from "../Search/Search";
import Transactions from "./Transactions";

const FindATransaction = () => {
    return ( <Fragment>
                <Search />
                <Transactions />
            </Fragment>);
}

export default FindATransaction;