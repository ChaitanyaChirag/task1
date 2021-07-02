import Login from './Login'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import App from './App'
export default function Main() {

    return (
      <div>
        <Router>
          <Switch>
          <Route path ="/" exact  component={Login}/>
        
        <Route path ="/dashboard"  component={App}/>
        </Switch>
        </Router>
      </div>
    );
  }