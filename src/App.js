import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Search />
      <Transactions />
    </div>
  );
}

export default App;
