
import './App.css';
import Home from './components/home/Home';
import SearchProvider from './context/SearchContext';


function App() {
  return (
    <>
      <SearchProvider>
        <Home/>
      </SearchProvider>
      
    </>
  );
}

export default App;
