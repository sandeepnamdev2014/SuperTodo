// React code 
import React from 'react';

import ReactDOM from 'react-dom';
import Nav from './components/nav';
import {Router,Route,Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import TodoContainer from './components/todo-container'
import UserContainer from './components/UserContainer'
import './index.css';

const history=createBrowserHistory();


const Routes= () =>{
    return(
        <Router history={history}>
            <Nav title="MY TODO"/>
            <Switch>
            <Route path="/user" component={UserContainer}/> 
            <Route path="/">
            <TodoContainer />
            </Route> 
            
            </Switch>
        </Router>
    )
}



ReactDOM.render(<Routes />,document.querySelector('#root'))