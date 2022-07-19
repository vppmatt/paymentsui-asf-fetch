import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Transactions from "./Transactions"

jest.mock("../data/DataFunctions" , () => {

    return {
        getAllPaymentsAxiosVersion : () => 
        Promise.resolve({ status : 200,  data : [{country : "FRA"}, {country : "BRA"}, 
        {country : "BRA"},{country : "ZAF"}, {country : "FRA"}]})
    }

}  )


test ("duplicate countries removed from countries dropdown", async () => {
    render(<BrowserRouter><Transactions /></BrowserRouter> )
    const dropdown = await screen.findAllByRole("option", {} , 5000);
    expect(dropdown).toHaveLength(4);
})