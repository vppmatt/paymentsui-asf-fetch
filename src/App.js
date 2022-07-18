import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';
import FindATransaction from './Transactions/FindATransaction';
import NewTransaction from './NewTransactions/NewTransaction';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      
      <PageHeader/>
    
        <Routes>
        
          <Route path="/find" element = {<FindATransaction />} />
          <Route path="/new" element={<NewTransaction />} />
          <Route path="/" element={<h1>Welcome to the application</h1>} />
          <Route path="*" element={<PageNotFound />} />  
        </Routes>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
