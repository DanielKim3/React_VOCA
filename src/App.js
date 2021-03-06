import React from 'react';
import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EmptyPage from './components/EmptyPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path="/">
            <DayList/>
          </Route>
          <Route path="/day/:day"> 
            <Day/>
          </Route>    
          <Route>
            <EmptyPage/>  
          </Route>  
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;