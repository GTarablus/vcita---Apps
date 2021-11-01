import './App.scss';
import { DashBoard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="app-container">
          <h1>Reports Dashboard</h1>
          <div className="main-dashboard">
            <DashBoard type={'email'} />
            <DashBoard type={'sms'} />
            <DashBoard type={'meet'} />
            <DashBoard type={'pay'} />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
