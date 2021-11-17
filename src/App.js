
import './App.css';
import Home from './components/home/Home';
import SearchProvider from './context/SearchContext';
import TeamProvider from './context/teamContext/Store';
import { initialState, heroTeamReducer } from './context/teamContext/teamReducer';


function App() {
  return (
    <>
      <SearchProvider>
      <TeamProvider initialState={ initialState } reducer={ heroTeamReducer }>
        <Home/>
      </TeamProvider> 
      </SearchProvider>
      
    </>
  );
}

export default App;
