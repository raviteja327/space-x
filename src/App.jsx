import Header from "./components/Header/Header";
import LaunchList from "./components/LaunchList/LaunchList";
import LaunchView from "./components/LaunchView/LaunchView";
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <LaunchList />
          </Route>
          <Route path="/launchview/:flight_number">
            <LaunchView />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
