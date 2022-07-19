import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
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