import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from "./components/header";
import ScrollButton from './components/ScrollButton/scrollButton';
import ErrorPage from './views/ErrorPage';
import FeedPage from "./views/FeedPage";
import UserProfilePage from './views/UserProfilePage';

function App() {
  return (
    <div className='abcd'>
      <Router>
        <Header />
        <ScrollButton />
        <Switch>
          <Route exact path='/user/:username'>
            <UserProfilePage />
          </Route>
          <Route exact path='/'>
            <FeedPage /> 
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
