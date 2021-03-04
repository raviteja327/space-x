import Header from "./components/Header/Header";
import Launch from "./components/Launch/Launch";
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Launch banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" 
        title="FalconSat" launchDate="2006-03-25T10:30:00+12:00" 
        description="Engine failure at 33 seconds and loss of vehicle" 
      />
      <Launch banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" 
        title="DemoSat" launchDate="2007-03-21T13:10:00+12:00" 
        description="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage" 
      />
    </div>
  );
}

export default App;
