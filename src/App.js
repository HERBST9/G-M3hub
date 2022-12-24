import { BrowserRouter,Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Games from './pages/games/Games'
import Create from './pages/create/Create'
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/games/:id">
            <Games/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
