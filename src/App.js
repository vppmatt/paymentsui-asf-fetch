import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Search from './Search/Search';
import Transactions from './Transactions/Transactions';
import FindATransaction from './Transactions/FindATransaction';

function App() {
  return (
    <div className="App">
      <PageHeader />
     <FindATransaction />
    </div>
  );
}

export default App;
