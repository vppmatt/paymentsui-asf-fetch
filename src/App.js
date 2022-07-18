import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';
import FindATransaction from './Transactions/FindATransaction';
import NewTransaction from './NewTransactions/NewTransaction';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <PageHeader/>
        <Routes>
          <Route path="/find" element = {<FindATransaction />} />
          <Route path="/new" element={<NewTransaction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
