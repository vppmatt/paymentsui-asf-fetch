import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

test( "ensure warning message is not displayed when component first rendered",
    () => {

        //GIVEN
            render(<BrowserRouter><Search /></BrowserRouter>);
        //WHEN
            //nothing happens
        //THEN
            const messageParagraph = screen.queryByText("Please enter a valid order id");
            //we expect the message isn't present
            expect(messageParagraph).not.toBeInTheDocument();
    }
)

test( "ensure warning message is displayed when the user has only typed in a space",
    () => {

        //GIVEN
            render(<BrowserRouter><Search /></BrowserRouter>);
        //WHEN
            const orderIdInput = screen.getByLabelText("Order Id:");
            userEvent.type(orderIdInput, " ");
        //THEN
            const messageParagraph = screen.queryByText("Please enter a valid order id");
            //we expect the message is present
            expect(messageParagraph).toBeInTheDocument();
    }
)