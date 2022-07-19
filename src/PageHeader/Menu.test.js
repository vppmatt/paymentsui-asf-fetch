import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App";


test ("check navigation to the new transaction page is working" , async () => {
    render(<App />);
    const newTransLink = screen.queryByText("New Transaction");
    userEvent.click(newTransLink);
    const heading = await screen.findByTestId("h2", {}, 2000);
    expect(heading).toHaveTextContent("New Transaction");
})