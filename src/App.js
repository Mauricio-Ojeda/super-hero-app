
import { useEffect, useReducer } from 'react';
import './App.css';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

import SearchProvider from './context/SearchContext';
import TeamProvider from './context/teamContext/Store';
import { initialState, heroTeamReducer } from './context/teamContext/teamReducer';
import { AppRouter } from './Routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {

  const [user, dispatch] = useReducer( authReducer, {}, init );

  // set token in localStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify( user ));
    
  }, [ user ])

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch}} >
      <SearchProvider>
      <TeamProvider initialState={ initialState } reducer={ heroTeamReducer }>
          <AppRouter />
      </TeamProvider> 
      </SearchProvider>
      </AuthContext.Provider>
      
    </>
  );
}

export default App;
