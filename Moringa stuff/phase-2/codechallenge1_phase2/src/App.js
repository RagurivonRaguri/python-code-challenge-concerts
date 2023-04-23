import React from "react";
import transactions from "./db.json"
import Transaction from "./Transaction";
import Searchbar from "./Searchbar";

function App () {
    return(
        <>
        <Searchbar transactions={transactions}/>
        <Transaction transactions={transactions}/>
        </>
    )
}
export default App;