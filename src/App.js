import './App.css';
import { Switch, Route } from 'react-router-dom'
import AttractionsContainer from './components/AttractionsContainer'
import AttractionDetailsContainer from './components/AttractionDetailsContainer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={AttractionsContainer}></Route>
        <Route path="/attractions" exact component={AttractionsContainer}></Route>
        <Route path="/attractions/:id" component={AttractionDetailsContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
